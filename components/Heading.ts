import React, { HTMLAttributes } from 'react'
import { Petrona } from 'next/font/google'

const serif = Petrona({ subsets: ['latin'] })

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

export const Heading: React.FC<Props> = ({
  as: Component,
  children,
  className,
  size,
}) => {
  const HeadingComponent = Component
  switch (size) {
    case '7xl':
      className = `headingStyles text-5xl lg:text-6xl xl:text-7xl ${className}`
      break
    case '6xl':
      className = `headingStyles text-4xl lg:text-5xl xl:text-6xl ${className}`
      break
    case '5xl':
      className = `headingStyles text-3xl lg:text-4xl xl:text-5xl ${className}`
      break
    case '4xl':
      className = `headingStyles text-2xl lg:text-3xl xl:text-4xl ${className}`
      break
    case '3xl':
      className = `headingStyles text-xl lg:text-2xl xl:text-3xl ${className}`
      break
    case '2xl':
      className = `headingStyles text-lg lg:text-xl xl:text-2xl ${className}`
      break
    case 'xl':
      className = `headingStyles text-base lg:text-lg xl:text-xl ${className}`
      break
  }
  className += ` ${serif.className}`
  return React.createElement(HeadingComponent, { className }, children)
}
