import { ReactNode } from 'react'
import { StyledTitle } from './styles'

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>
}
