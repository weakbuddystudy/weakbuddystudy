import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MarkdownRenderer } from './MarkdownRenderer';
import { useStudyAI, StudyMode } from '@/hooks/useStudyAI';
import { generateExamPDF } from '@/utils/pdfGenerator';
import { FileText, GraduationCap, Loader2, Sparkles, BookOpen, RotateCcw, Download } from 'lucide-react';
import { toast } from 'sonner';

interface AIStudyGeneratorProps {
  selectedClass: number;
  selectedSubject: string;
}

export function AIStudyGenerator({ selectedClass, selectedSubject }: AIStudyGeneratorProps) {
  const [topic, setTopic] = useState('');
  const [lastMode, setLastMode] = useState<StudyMode | null>(null);
  const { content, isLoading, generateContent, clearContent } = useStudyAI();

  const handleGenerate = (mode: StudyMode) => {
    setLastMode(mode);
    generateContent(
      { classLevel: selectedClass, subject: selectedSubject, topic },
      mode
    );
  };

  const handleDownloadPDF = () => {
    if (!content) {
      toast.error('No content to download');
      return;
    }
    
    try {
      generateExamPDF({
        classLevel: selectedClass,
        subject: selectedSubject,
        topic: topic || undefined,
        content,
      });
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.error('Failed to generate PDF');
    }
  };

  return (
    <div className="space-y-6">
      {/* Generator Controls */}
      <Card className="vault-card border-primary/20">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="w-5 h-5 text-secondary" />
            AI Study Generator
          </CardTitle>
          <CardDescription>
            Generate personalized cheatsheets, mock exams, or complete study guides
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Topic Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Topic (optional - leave empty for auto-pick)
            </label>
            <Input
              placeholder="e.g., Electricity, Quadratic Equations, Photosynthesis..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-card"
              disabled={isLoading}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => handleGenerate('cheatsheet')}
              disabled={isLoading}
              className="flex-1 min-w-[160px] bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <FileText className="w-4 h-4 mr-2" />
              )}
              📝 Make Cheatsheet
            </Button>
            
            <Button
              onClick={() => handleGenerate('exam')}
              disabled={isLoading}
              className="flex-1 min-w-[160px] bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <GraduationCap className="w-4 h-4 mr-2" />
              )}
              🎓 Create Mock Exam
            </Button>

            <Button
              onClick={() => handleGenerate('full_vault')}
              disabled={isLoading}
              variant="outline"
              className="flex-1 min-w-[160px] border-primary/50 hover:bg-primary/10"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <BookOpen className="w-4 h-4 mr-2" />
              )}
              📚 Full Study Vault
            </Button>
          </div>

          {/* Current Selection Display */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
            <span className="font-medium">Generating for:</span>
            <span className="text-primary font-semibold">Class {selectedClass}</span>
            <span>•</span>
            <span className="text-secondary font-semibold">{selectedSubject}</span>
            {topic && (
              <>
                <span>•</span>
                <span className="italic">{topic}</span>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Loading State */}
      {isLoading && !content && (
        <Card className="vault-card">
          <CardContent className="py-12 text-center">
            <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-primary" />
            <p className="text-lg font-medium text-muted-foreground">
              🤖 WeakBuddy is thinking...
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Generating your personalized study content
            </p>
          </CardContent>
        </Card>
      )}

      {/* AI Generated Content */}
      {content && (
        <Card className="vault-card">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Sparkles className="w-5 h-5" />
                Generated Content
              </CardTitle>
              <CardDescription>
                Class {selectedClass} - {selectedSubject}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadPDF}
                disabled={isLoading}
                className="text-primary border-primary/50 hover:bg-primary/10"
              >
                <Download className="w-4 h-4 mr-1" />
                Download PDF
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearContent}
                className="text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <MarkdownRenderer content={content} />
            </div>
            {isLoading && (
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Still generating...</span>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
