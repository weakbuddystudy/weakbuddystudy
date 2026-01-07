import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Lock } from "lucide-react";
import UPIPayment from "./UPIPayment";

interface PremiumLockProps {
  featureName: string;
}

export function PremiumLock({ featureName }: PremiumLockProps) {
  return (
    <Card className="vault-card">
      <CardContent className="flex flex-col items-center justify-center py-16 text-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
            <Lock className="w-10 h-10 text-amber-500" />
          </div>
          <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
            <Crown className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="space-y-2 max-w-md">
          <h3 className="text-xl font-semibold text-foreground">
            {featureName} is a Premium Feature
          </h3>
          <p className="text-muted-foreground">
            Unlock access to previous year papers, marking schemes, and sample papers from 2020-2025.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <UPIPayment />
          <p className="text-xs text-muted-foreground">
            Get instant access after payment
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
