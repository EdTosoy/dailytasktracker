import React, { Suspense } from 'react';

//  EXAMPLE

//NOTE :use react lazy with suspense to reduce the initial bundle size
// const EmployeeCard = React.lazy(() => import('./components/EmployeeCard'));
export const App: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    {/* <EmployeeCard name="ED" /> */}
  </Suspense>
);
