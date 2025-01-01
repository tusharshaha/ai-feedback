import FeedbackForm from '@/components/Feeedback/FeedbackForm';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center cus-container py-8">
      <Link href="/feedback" className="ghost-btn ml-auto">
        All Feedback &#8594;
      </Link>
      <FeedbackForm />
    </div>
  );
}
