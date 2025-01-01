import Table from '@/components/Feeedback/Table';
import { NEXT_PUBLIC_BACKEND_URL } from '@/config';
import Link from 'next/link';
import React from 'react';

async function getFeedback() {
  try {
    const res = await fetch(
      `${NEXT_PUBLIC_BACKEND_URL}/feedback?limit=15&skip=0`,
      { next: { revalidate: 10 } }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const Feedback = async () => {
  const data = await getFeedback();
  return (
    <div className="min-h-screen cus-container py-8 text-right">
      <Link href="/" className="ghost-btn">
        Back to Home &#8594;
      </Link>

      <Table data={data?.data} />
    </div>
  );
};

export default Feedback;
