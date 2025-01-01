import React from 'react';
import FeedbackModal from './FeedbackModal';
import { formatDate } from '@/lib/formatDate';

type TableProps = {
  type: string;
  subject: string;
  status: string;
  feedback: string;
  createdAt: string;
};

const Table = ({ data }: { data: TableProps[] }) => {
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
            <th>Feedback</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {data.length === 0 && (
            <tr className="[&>*]:border">
              <td colSpan={5} className="py-5 text-center">
                <p className="mb-0">No Feedback Available</p>
              </td>
            </tr>
          )}
          {data?.map((item, index) => (
            <tr key={index} className="">
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 capitalize">
                {item.type}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                {formatDate(item.createdAt)}
              </td>
              <td
                className={`px-4 py-2 border border-gray-300 text-sm capitalize font-bold ${
                  item.status === 'Completed'
                    ? 'text-green-600'
                    : 'text-yellow-600'
                }`}
              >
                {item.status}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[150px] mx-auto">
                  {item.subject}
                </p>
              </td>
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                <FeedbackModal
                  subject={item.subject}
                  feedback={item.feedback}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
