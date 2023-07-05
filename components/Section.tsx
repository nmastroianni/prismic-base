import { FC, HTMLAttributes } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  width: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export const Section: FC<Props> = ({
  className,
  children,
  width,
  ...props
}) => {
  return (
    <section
      className={cn({
        'mx-auto max-w-screen-sm': width === 'sm',
        'mx-auto max-w-screen-md': width === 'md',
        'mx-auto max-w-screen-lg': width === 'lg',
        'mx-auto max-w-screen-xl': width === 'xl',
        'mx-auto max-w-screen-2xl': width === '2xl',
        'w-full': width === 'full',
      })}
      {...props}
    >
      {children}
    </section>
  )
}
