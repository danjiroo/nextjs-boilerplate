import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center md:flex-row">
      <div className="w-full h-1/4 bg-primary md:w-1/4 md:h-full lg:w-1/2 transition-all"></div>
      <div className="w-full h-3/4 flex justify-center md:w-3/4 md:h-full md:items-center lg:w-1/2 transition-all">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
