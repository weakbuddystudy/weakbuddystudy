import { useStudyProgress } from '@/hooks/useStudyProgress';
import { useAuth } from '@/hooks/useAuth';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, TrendingUp, BookOpen } from 'lucide-react';

const SUBJECTS = ['Science', 'Mathematics', 'English', 'Social Studies', 'Hindi'];
const TOPICS_PER_SUBJECT = 10; // Estimated topics per subject

interface ProgressTrackerProps {
  classLevel: number;
  currentSubject: string;
}

export const ProgressTracker = ({ classLevel, currentSubject }: ProgressTrackerProps) => {
  const { user } = useAuth();
  const { getSubjectProgress, progress, loading } = useStudyProgress(classLevel);

  if (!user) {
    return (
      <Card className="border-border/50 bg-muted/30">
        <CardContent className="py-6 text-center text-muted-foreground">
          <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p>Sign in to track your study progress</p>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="border-border/50">
        <CardContent className="py-6">
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-muted rounded w-1/3" />
            <div className="h-2 bg-muted rounded" />
            <div className="h-2 bg-muted rounded w-2/3" />
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentProgress = getSubjectProgress(currentSubject, TOPICS_PER_SUBJECT);
  const totalCompleted = progress.length;
  const totalPossible = SUBJECTS.length * TOPICS_PER_SUBJECT;
  const overallPercentage = Math.round((totalCompleted / totalPossible) * 100);

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Study Progress - Class {classLevel}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-medium">{overallPercentage}%</span>
          </div>
          <Progress value={overallPercentage} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {totalCompleted} topics completed across all subjects
          </p>
        </div>

        {/* Current Subject Progress */}
        <div className="pt-2 border-t border-border/50 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-foreground">{currentSubject}</span>
            <span className="text-primary font-medium">{currentProgress.percentage}%</span>
          </div>
          <Progress value={currentProgress.percentage} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {currentProgress.completedTopics} of {currentProgress.totalTopics} topics
          </p>
        </div>

        {/* All Subjects Quick View */}
        <div className="pt-2 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-2">All Subjects</p>
          <div className="grid grid-cols-2 gap-2">
            {SUBJECTS.map((subj) => {
              const subjProgress = getSubjectProgress(subj, TOPICS_PER_SUBJECT);
              return (
                <div
                  key={subj}
                  className={`flex items-center gap-2 text-xs p-2 rounded-md ${
                    subj === currentSubject ? 'bg-primary/10' : 'bg-muted/50'
                  }`}
                >
                  <CheckCircle2
                    className={`w-3 h-3 ${
                      subjProgress.percentage === 100
                        ? 'text-green-500'
                        : subjProgress.percentage > 0
                        ? 'text-primary'
                        : 'text-muted-foreground/50'
                    }`}
                  />
                  <span className="truncate">{subj}</span>
                  <span className="ml-auto font-medium">{subjProgress.percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
