import { StudyContent } from '@/data/studyContent';
import { MarkdownRenderer } from './MarkdownRenderer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useStudyProgress } from '@/hooks/useStudyProgress';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { PremiumBadge } from './PremiumBadge';
import { PremiumLock } from './PremiumLock';
import {
  BookOpen,
  FileText,
  Lightbulb,
  ClipboardList,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Download,
} from 'lucide-react';

interface StudyVaultProps {
  content: StudyContent;
}

export function StudyVault({ content }: StudyVaultProps) {
  const { user } = useAuth();
  const { isPremium } = useSubscription();
  const { isTopicComplete, markTopicComplete, unmarkTopicComplete } = useStudyProgress(
    content.class,
    content.subject
  );

  const handleTopicToggle = async (topic: string, checked: boolean) => {
    if (checked) {
      await markTopicComplete(topic, content.subject);
    } else {
      await unmarkTopicComplete(topic, content.subject);
    }
  };

  // Extract topics from cheatsheet sections
  const topics = content.cheatsheet.map((section) => section.title);

  return (
    <div className="w-full animate-fade-in">
      {/* Topic Progress Checklist */}
      {user && (
        <Card className="vault-card mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Mark Topics as Complete
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {topics.map((topic) => (
                <label
                  key={topic}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <Checkbox
                    checked={isTopicComplete(topic, content.subject)}
                    onCheckedChange={(checked) => handleTopicToggle(topic, checked as boolean)}
                  />
                  <span className="text-sm">{topic}</span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="syllabus" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted p-1 mb-6">
          <TabsTrigger value="syllabus" className="flex-1 min-w-[100px] gap-2">
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Syllabus</span>
          </TabsTrigger>
          <TabsTrigger value="pdf" className="flex-1 min-w-[100px] gap-2">
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">PDF Portal</span>
          </TabsTrigger>
          <TabsTrigger value="pyp" className="flex-1 min-w-[100px] gap-2">
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">PYP</span>
            <PremiumBadge className="hidden sm:flex" />
          </TabsTrigger>
          <TabsTrigger value="cheatsheet" className="flex-1 min-w-[100px] gap-2">
            <Lightbulb className="w-4 h-4" />
            <span className="hidden sm:inline">Cheatsheet</span>
            <PremiumBadge className="hidden sm:flex" />
          </TabsTrigger>
          <TabsTrigger value="exam" className="flex-1 min-w-[100px] gap-2">
            <ClipboardList className="w-4 h-4" />
            <span className="hidden sm:inline">Exam</span>
          </TabsTrigger>
          <TabsTrigger value="interactive" className="flex-1 min-w-[100px] gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">Interactive</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="syllabus" className="mt-0">
          <Card className="vault-card">
            <CardHeader className="vault-gradient text-primary-foreground rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Course Syllabus
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Class {content.class} - {content.subject}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-foreground/90 leading-relaxed text-lg">{content.syllabus}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pdf" className="mt-0">
          <Card className="vault-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FileText className="w-5 h-5" />
                PDF Portal
              </CardTitle>
              <CardDescription>Official NCERT and reference materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {content.pdfLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-secondary" />
                      <span className="font-medium">{link.title}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pyp" className="mt-0">
          {!isPremium ? (
            <PremiumLock featureName="Previous Year Papers" />
          ) : (
            <Card className="vault-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calendar className="w-5 h-5" />
                  Previous Year Papers (2020-2025)
                  <PremiumBadge />
                </CardTitle>
                <CardDescription>Official CBSE question papers and marking schemes</CardDescription>
              </CardHeader>
              <CardContent>
                {content.previousYearPapers && content.previousYearPapers.length > 0 ? (
                  <div className="space-y-6">
                    {content.previousYearPapers.map((yearData) => (
                      <div key={yearData.year} className="space-y-3">
                        <h3 className="font-semibold text-lg text-secondary border-b border-border pb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {yearData.year}-{(yearData.year + 1).toString().slice(-2)}
                        </h3>
                        <div className="grid gap-2">
                          {yearData.papers.map((paper, index) => (
                            <a
                              key={index}
                              href={paper.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 hover:border-primary/30 transition-all group"
                            >
                              <div className="flex items-center gap-3">
                                <Download className="w-4 h-4 text-secondary" />
                                <span className="font-medium text-sm">{paper.title}</span>
                                <Badge variant={
                                  paper.type === 'Question Paper' ? 'default' :
                                  paper.type === 'Marking Scheme' ? 'secondary' : 'outline'
                                } className="text-xs">
                                  {paper.type}
                                </Badge>
                              </div>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    Previous year papers for this subject will be added soon. Check the PDF Portal for available sample papers.
                  </p>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="cheatsheet" className="mt-0">
          {!isPremium ? (
            <PremiumLock featureName="Formula & Concept Cheatsheet" />
          ) : (
            <Card className="vault-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Lightbulb className="w-5 h-5" />
                  Formula & Concept Cheatsheet
                  <PremiumBadge />
                </CardTitle>
                <CardDescription>Quick reference for key formulas and definitions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {content.cheatsheet.map((section, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="font-semibold text-lg text-secondary border-b border-border pb-2">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 pl-2">
                            <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                            <MarkdownRenderer content={item} className="flex-1" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="exam" className="mt-0">
          <Card className="vault-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <ClipboardList className="w-5 h-5" />
                Mock Exam Questions
              </CardTitle>
              <CardDescription>Practice questions with marking scheme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {content.examPapers.map((paper, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-lg border border-border bg-muted/20 space-y-4"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <Badge
                        variant={
                          paper.difficulty === 'Easy'
                            ? 'secondary'
                            : paper.difficulty === 'Medium'
                            ? 'default'
                            : 'destructive'
                        }
                        className="text-sm"
                      >
                        {paper.difficulty}
                      </Badge>
                      <span className="text-sm font-medium text-muted-foreground">
                        [{paper.marks} Marks]
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Question:</h4>
                      <MarkdownRenderer content={paper.question} />
                    </div>
                    <details className="group">
                      <summary className="cursor-pointer text-primary font-medium hover:underline">
                        Show Answer
                      </summary>
                      <div className="mt-3 p-4 bg-card rounded-lg border border-primary/20">
                        <h4 className="font-medium text-secondary mb-2">Answer:</h4>
                        <MarkdownRenderer content={paper.answer} />
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactive" className="mt-0">
          <Card className="vault-card">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Sparkles className="w-5 h-5" />
                Interactive Logic: {content.interactiveLogic.topic}
              </CardTitle>
              <CardDescription>Step-by-step visual explanation</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {content.interactiveLogic.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <MarkdownRenderer content={step} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
