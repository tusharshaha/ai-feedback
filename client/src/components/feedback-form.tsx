'use client';

import React, { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { feedbackFormSchema } from '@/types';
import { Loader2 } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { NEXT_PUBLIC_BACKEND_URL } from '@/config';

const FeedbackForm = () => {
  const [isLoading, startTransition] = useTransition();

  // feedback types
  const feedbackTypes = ['bug', 'idea', 'other'];

  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      subject: '',
      feedback: "",
      type: "bug"
    }
  });

  function onSubmit(values: z.infer<typeof feedbackFormSchema>) {
    startTransition(async () => {
      try {
        const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/feedback`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });
        const data = await res.json();
        form.reset({
          subject: "",
          feedback: "",
          type:"bug"
        });
        console.log(data);
      } catch {
        toast.error('Something went wrong! try again.');
      }
    });
  }
  return (
    <div className="w-[400px] py-14 px-8 bg-white shadow-lg rounded-md">
      <h3 className="text-3xl text-center font-bold mb-6">Feedback Form</h3>
      {/* feedback form  */}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a feeback type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {feedbackTypes.map((type, i) => (
                      <SelectItem key={i} value={type} className="capitalize">
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
    </div>
  );
};

export default FeedbackForm;
