import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface StudyProgress {
  id: string;
  class_level: number;
  subject: string;
  topic: string;
  completed_at: string;
}

interface SubjectProgress {
  subject: string;
  completedTopics: number;
  totalTopics: number;
  percentage: number;
}

export const useStudyProgress = (classLevel: number, subject?: string) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<StudyProgress[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setProgress([]);
      setLoading(false);
      return;
    }

    try {
      let query = supabase
        .from('study_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('class_level', classLevel);

      if (subject) {
        query = query.eq('subject', subject);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProgress(data || []);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  }, [user, classLevel, subject]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const markTopicComplete = async (topic: string, subjectName: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('study_progress')
        .insert({
          user_id: user.id,
          class_level: classLevel,
          subject: subjectName,
          topic: topic,
        });

      if (error) {
        if (error.code === '23505') {
          // Already exists, ignore
          return true;
        }
        throw error;
      }

      await fetchProgress();
      return true;
    } catch (error) {
      console.error('Error marking topic complete:', error);
      return false;
    }
  };

  const unmarkTopicComplete = async (topic: string, subjectName: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('study_progress')
        .delete()
        .eq('user_id', user.id)
        .eq('class_level', classLevel)
        .eq('subject', subjectName)
        .eq('topic', topic);

      if (error) throw error;

      await fetchProgress();
      return true;
    } catch (error) {
      console.error('Error unmarking topic:', error);
      return false;
    }
  };

  const isTopicComplete = (topic: string, subjectName?: string) => {
    return progress.some(
      (p) => p.topic === topic && (subjectName ? p.subject === subjectName : true)
    );
  };

  const getSubjectProgress = (subjectName: string, totalTopics: number): SubjectProgress => {
    const completedTopics = progress.filter((p) => p.subject === subjectName).length;
    return {
      subject: subjectName,
      completedTopics,
      totalTopics,
      percentage: totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0,
    };
  };

  return {
    progress,
    loading,
    markTopicComplete,
    unmarkTopicComplete,
    isTopicComplete,
    getSubjectProgress,
    refetch: fetchProgress,
  };
};
