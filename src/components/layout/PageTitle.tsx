import { cn } from '@/lib/utils'
import React from 'react'

type PageTitleProps = {
  children: React.ReactNode
  className?: string
}

export function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h1 className={cn('text-2xl font-semibold tracking-tight', className)}>
      {children}
    </h1>
  )
}