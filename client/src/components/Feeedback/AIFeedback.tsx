import React from 'react';
import { FormType } from '@/types';
import { Button } from '../ui/button';
import StreamingResponse from './StreamingResponse';

type ModalProps = {
  feedback: string;
  subject: string;
  setData: React.Dispatch<React.SetStateAction<FormType>>;
};

const AIFeedback = ({ feedback, subject, setData }: ModalProps) => {
  return (
    <div>
      <h3 className="text-3xl text-center font-bold mb-6">AI Response</h3>
      <div className="space-y-4 text-sm">
        <div>
          <p>Subject</p>
          <div className="py-1 px-3 border rounded-md">{subject}</div>
        </div>
        <div>
          <p>Description</p>
          <div className="py-2 px-3 border rounded-md text-xs">
            <StreamingResponse response={feedback} typingSpeed={20}/>
          </div>
        </div>
      </div>
      <Button
        onClick={() => setData({} as FormType)}
        className="gradient-bg w-full mt-4"
      >
        Go Back
      </Button>
    </div>
  );
};

export default AIFeedback;
