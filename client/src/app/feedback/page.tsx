import Table from '@/components/Table';
import { NEXT_PUBLIC_BACKEND_URL } from '@/config';
import Link from 'next/link';
import React from 'react';

const Feedback = async () => {
  const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/feedback`);
  const data = await res.json();
  return (
    <div className='min-h-screen cus-container py-8 text-right'>
      <Link href="/" className="ghost-btn">
        Back to Home &#8594;
      </Link>

      <Table data={data.data}/>
    </div>
  );
};

export default Feedback;