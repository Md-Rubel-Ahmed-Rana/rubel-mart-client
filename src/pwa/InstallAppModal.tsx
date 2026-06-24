"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Smartphone, Zap, ShieldCheck } from "lucide-react";
import { usePwaInstall } from "../hooks/usePwaInstall";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const InstallAppModal = ({ open, onOpenChange }: Props) => {
  const { installApp } = usePwaInstall();

  const handleInstall = async () => {
    await installApp();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Install My Portfolio App
          </DialogTitle>

          <DialogDescription>
            Get the full app experience — faster, smoother, and always one tap
            away.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-500" />
            <p className="text-sm">Lightning fast performance</p>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <p className="text-sm">Works offline like a real app</p>
          </div>

          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-blue-500" />
            <p className="text-sm">Install on your home screen</p>
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Maybe later
          </Button>

          <Button onClick={handleInstall} className="gap-2">
            Install App
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InstallAppModal;
