'use client';

import { Button } from '@/components/ui/button';
import { ProtectedRoute } from '@/hoc/ProtectedRoute';

const Home: React.FC = () => {
  return (
    <div>
      <Button>Test Button</Button>
    </div>
  );
};

export default ProtectedRoute(Home);
