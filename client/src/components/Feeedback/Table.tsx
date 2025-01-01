import React from 'react';
import FeedbackModal from './FeedbackModal';
import { formatDate } from '@/lib/formatDate';
import { NEXT_PUBLIC_BACKEND_URL } from '@/config';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';

type Feedback = {
  id: string
  type: string;
  subject: string;
  status: string;
  feedback: string;
  createdAt: string;
};

async function getFeedback() {
  try {
    const res = await fetch(
      `${NEXT_PUBLIC_BACKEND_URL}/feedback?limit=15&skip=0`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}

const Table = async () => {
  const data: Feedback[] = await getFeedback();
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border-collapse border border-gray-200 bg-white text-center">
        {/* Table Head */}
        <thead>
          <tr className="bg-slate-600 text-white [&>*]:border">
            <th>Type</th>
            <th>Date</th>
            <th>Status</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {data?.length === 0 ? (
            <tr className="[&>*]:border">
              <td colSpan={5} className="py-5 text-center">
                <p className="mb-0">No Feedback Available</p>
              </td>
            </tr>
          ) : (
            data?.map((item, index) => (
              <tr key={index} className="">
                <td
                  className={cn(
                    'px-4 py-2 border border-gray-300 text-sm capitalize font-bold',
                    item.type === 'bug'
                      ? 'text-red-600'
                      : item.type === 'idea'
                        ? 'text-yellow-600'
                        : 'text-gray-700'
                  )}
                >
                  {item.type}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                  {formatDate(item.createdAt)}
                </td>
                <td
                  className={cn(
                    'px-4 py-2 border border-gray-300 text-sm capitalize font-bold',
                    item.status === 'Completed'
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  )}
                >
                  {item.status}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                  <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[150px] mx-auto">
                    {item.subject}
                  </p>
                </td>
                <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 flex items-center justify-center gap-2">
                  <FeedbackModal
                    subject={item.subject}
                    feedback={item.feedback}
                  />
                  <Button variant="destructive" size="icon">
                    <Trash2 />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
