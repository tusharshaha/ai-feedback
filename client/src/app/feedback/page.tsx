import { NEXT_PUBLIC_BACKEND_URL } from '@/config';
import Link from 'next/link';
import React from 'react';

const Feedback = async () => {
  const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/feedback`);
  const data = await res.json();
  console.log(data)
  return (
    <div className='min-h-screen cus-container relative'>
      <Link href="/" className="absolute top-[40px] right-[20px] ghost-btn">
        Back to Home &#8594;
      </Link>

      
    </div>
  );
};

export default Feedback;