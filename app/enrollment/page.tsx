'use client';

import { Suspense } from 'react';
import EnrollmentForm from '@/components/EnrollmentForm';

export default function Enrollment() {
  return (
    <Suspense fallback={<div className="bg-black text-white min-h-screen flex items-center justify-center">Loading...</div>}>
      <EnrollmentForm />
    </Suspense>
  );
}


