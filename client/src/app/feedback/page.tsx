import Table from '@/components/Feeedback/Table';
import Link from 'next/link';
import React from 'react';


const Feedback = async () => {
  
  return (
    <div className="min-h-screen cus-container py-8 text-right">
      <Link href="/" className="ghost-btn">
        Back to Home &#8594;
      </Link>

      <Table />
    </div>
  );
};

export default Feedback;
