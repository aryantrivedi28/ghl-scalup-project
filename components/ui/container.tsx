// components/ui/container.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

function Container({ className, size = 'lg', ...props }: ContainerProps) {
  const sizes = {
    sm: 'max-w-4xl',
    md: 'max-w-6xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  }
  
  return (
    <div
      className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    />
  )
}

export { Container }