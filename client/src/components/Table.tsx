import React from "react";

type TableProps = {
  type: string,
  subject: string,
  feedback: string,
}

const Table = (data: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
              Type
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
              Status
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
              Date
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700">
              Feedback
            </th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                {item.type}
              </td>
              <td
                className={`px-4 py-2 border border-gray-300 text-sm font-medium ${
                  item.status === "Completed"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {item.status}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                {item.date}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                {item.feedback}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
