import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';
import { DialogDescription } from '@radix-ui/react-dialog';
import OrderedList from './OrderList';

type ModalProps = {
  feedback: string;
  subject: string;
};

const FeedbackModal = ({ feedback, subject }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Eye />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[300px] max-h-[400px] overflow-y-auto sm:w-[525px] sm:h-auto">
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <div>
            <p>Subject</p>
            <div className="py-1 px-3 border rounded-md">{subject}</div>
          </div>
          <div>
            <p>Description</p>
            <div className="py-2 px-3 border rounded-md text-xs">
              <OrderedList response={feedback} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;
