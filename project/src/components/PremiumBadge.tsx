import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

interface PremiumBadgeProps {
  className?: string;
}

export function PremiumBadge({ className }: PremiumBadgeProps) {
  return (
    <Badge 
      variant="outline" 
      className={`bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-amber-500/50 text-amber-600 dark:text-amber-400 gap-1 ${className}`}
    >
      <Crown className="w-3 h-3" />
      Premium
    </Badge>
  );
}
