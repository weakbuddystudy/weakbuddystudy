import { useState } from 'react';
import { ClassSubjectSelector } from '@/components/ClassSubjectSelector';
import { StudyVault } from '@/components/StudyVault';
import { AIStudyGenerator } from '@/components/AIStudyGenerator';
import { UserMenu } from '@/components/UserMenu';
import { ProgressTracker } from '@/components/ProgressTracker';
import UPIPayment from '@/components/UPIPayment';
import { getStudyContent, generateLiteContent } from '@/data/studyContent';
import { BookMarked, Sparkles, BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [selectedClass, setSelectedClass] = useState(10);
  const [selectedSubject, setSelectedSubject] = useState('Science');

  const content = getStudyContent(selectedClass, selectedSubject) || generateLiteContent(selectedClass, selectedSubject);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="vault-gradient text-primary-foreground py-12 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <BookMarked className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-bold font-serif">📚 WeakBuddyStudy</h1>
            </div>
            <div className="flex items-center gap-3">
              <UPIPayment />
              <UserMenu />
            </div>
          </div>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Your AI-powered tutor for Classes 5-12. Generate cheatsheets, mock exams, 
            and complete study guides—turn your weak subjects into strengths!
          </p>
        </div>
      </header>

      {/* Selector Section */}
      <section className="py-8 px-4 border-b border-border bg-card">
        <div className="container max-w-5xl mx-auto">
          <ClassSubjectSelector
            selectedClass={selectedClass}
            selectedSubject={selectedSubject}
            onClassChange={setSelectedClass}
            onSubjectChange={setSelectedSubject}
          />
        </div>
      </section>

      {/* Content Section */}
      <main className="py-8 px-4">
        <div className="container max-w-5xl mx-auto">
          {/* Progress Tracker */}
          <div className="mb-6">
            <ProgressTracker classLevel={selectedClass} currentSubject={selectedSubject} />
          </div>
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="w-full flex h-auto gap-1 bg-muted p-1 mb-6">
              <TabsTrigger value="ai" className="flex-1 gap-2 py-3">
                <Sparkles className="w-4 h-4" />
                AI Generator
              </TabsTrigger>
              <TabsTrigger value="library" className="flex-1 gap-2 py-3">
                <BookOpen className="w-4 h-4" />
                Study Library
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="mt-0">
              <AIStudyGenerator 
                selectedClass={selectedClass} 
                selectedSubject={selectedSubject} 
              />
            </TabsContent>

            <TabsContent value="library" className="mt-0">
              <StudyVault content={content} />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border bg-muted/30">
        <div className="container max-w-5xl mx-auto text-center text-muted-foreground text-sm">
          <p>WeakBuddyStudy — AI-powered learning aligned with NCERT/CBSE curriculum</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
