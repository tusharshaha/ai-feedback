import React from 'react';

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
          <tr className="bg-slate-600 text-white [&>*]:border [&>*]:border-white">
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
              <td colSpan={4} className="py-5 text-center">
                <p className="mb-0">No Feedback Available</p>
              </td>
            </tr>
          )}
          {data?.map((item, index) => (
            <tr key={index} className="">
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                {item.type}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                {item.createdAt}
              </td>
              <td
                className={`px-4 py-2 border border-gray-300 text-sm font-medium ${
                  item.status === 'Completed'
                    ? 'text-green-600'
                    : 'text-yellow-600'
                }`}
              >
                {item.status}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                {item.subject}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                feedback
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
