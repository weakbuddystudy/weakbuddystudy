import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Copy, Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import upiQR from "@/assets/upi-qr.jpeg";

const UPIPayment = () => {
  const [copied, setCopied] = useState(false);
  const upiId = "ishushrivastava@pytes";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(upiId);
    setCopied(true);
    toast.success("UPI ID copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="gap-2">
          <ShoppingCart className="w-4 h-4" />
          Buy Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2">
            Support Us
            <Badge variant="secondary" className="text-xs">UPI</Badge>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <img 
            src={upiQR} 
            alt="UPI QR Code" 
            className="w-48 h-48 rounded-lg object-contain bg-white p-2"
          />
          <div 
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
          >
            <span className="text-sm font-mono text-foreground">{upiId}</span>
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Scan with any UPI app
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UPIPayment;
