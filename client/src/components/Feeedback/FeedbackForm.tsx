'use client';

import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { toast } from 'sonner';
import { feedbackFormSchema, FormType } from '@/types';
import { Loader2 } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { NEXT_PUBLIC_BACKEND_URL } from '@/config';
import AIFeedback from './AIFeedback';

const FeedbackForm = () => {
  const [isLoading, startTransition] = useTransition();
  const [data, setData] = useState({} as FormType);

  // feedback types
  const feedbackTypes = ['bug', 'idea', 'other'];

  const form = useForm<FormType>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      subject: '',
      feedback: '',
      type: undefined
    }
  });

  function onSubmit(values: FormType) {
    startTransition(async () => {
      try {
        const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/feedback`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });
        const data = await res.json();
        form.reset({
          subject: '',
          feedback: '',
          type: 'bug'
        });
        if (data.success && data.data) {
          setData(data.data);
        }
        toast.success(data.message);
      } catch {
        toast.error('Something went wrong! try again.');
      }
    });
  }
  return (
    <div className="w-full sm:w-[400px] py-14 px-8 bg-white shadow-lg rounded-md mt-6">
      {/* feedback form  */}
      {data.type ? (
        <AIFeedback
          setData={setData}
          subject={data.subject}
          feedback={data.feedback}
        />
      ) : (
        <>
          <h3 className="text-3xl text-center font-bold mb-6">Feedback Form</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a feeback type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {feedbackTypes.map((type, i) => (
                          <SelectItem
                            key={i}
                            value={type}
                            className="capitalize"
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Feedback subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Feedback description"
                        className="resize-none"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="gradient-bg w-full"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : ''}
                Send Feedback
              </Button>
            </form>
          </Form>
        </>
      )}
    </div>
  );
};

export default FeedbackForm;
