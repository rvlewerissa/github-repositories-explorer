import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='mx-auto max-w-[800px] px-4 py-8 sm:px-6 lg:px-8'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
