import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { subjects } from '@/data/studyContent';
import { GraduationCap, BookOpen } from 'lucide-react';

interface ClassSubjectSelectorProps {
  selectedClass: number;
  selectedSubject: string;
  onClassChange: (classNum: number) => void;
  onSubjectChange: (subject: string) => void;
}

export function ClassSubjectSelector({
  selectedClass,
  selectedSubject,
  onClassChange,
  onSubjectChange,
}: ClassSubjectSelectorProps) {
  const availableSubjects = subjects[selectedClass] || [];

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
      <div className="flex-1">
        <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
          <GraduationCap className="w-4 h-4" />
          Select Class
        </label>
        <Select
          value={selectedClass.toString()}
          onValueChange={(value) => {
            const newClass = parseInt(value);
            onClassChange(newClass);
            const newSubjects = subjects[newClass] || [];
            if (newSubjects.length > 0 && !newSubjects.includes(selectedSubject)) {
              onSubjectChange(newSubjects[0]);
            }
          }}
        >
          <SelectTrigger className="w-full bg-card border-border">
            <SelectValue placeholder="Choose class" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <SelectItem key={num} value={num.toString()}>
                Class {num}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
          <BookOpen className="w-4 h-4" />
          Select Subject
        </label>
        <Select value={selectedSubject} onValueChange={onSubjectChange}>
          <SelectTrigger className="w-full bg-card border-border">
            <SelectValue placeholder="Choose subject" />
          </SelectTrigger>
          <SelectContent>
            {availableSubjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
