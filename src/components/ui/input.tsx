import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    iconStart?: React.ReactNode;
    iconEnd?: React.ReactNode;
  }
>(({ className, type, iconEnd, iconStart, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
        className
      )}
    >
      {iconStart ? iconStart : null}
      <input
        type={type}
        className={cn(
          'w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
      {iconEnd ? iconEnd : null}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
