'use client';

import { ProtectedRoute } from '@/hoc/ProtectedRoute';

const Home: React.FC = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      One moment...
    </div>
  );
};

export default ProtectedRoute(Home);
