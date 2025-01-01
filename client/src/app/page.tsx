import FeedbackForm from '@/components/feedback-form';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center cus-container relative">
      <Link href="/feedback" className="absolute top-[40px] right-[20px] ghost-btn">
        All Feedback &#8594;
      </Link>
      <FeedbackForm />
    </div>
  );
}
