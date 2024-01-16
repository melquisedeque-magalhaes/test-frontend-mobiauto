import { Result } from '@/typings/result'
import { ReactNode, createContext, useState } from 'react'

type ResultCarContextType = {
  result: Result | null
  setResult: React.Dispatch<React.SetStateAction<Result | null>>
}

interface ResultCarProviderProps {
  children: ReactNode
}

export const ResultCarContext = createContext({} as ResultCarContextType)

export function ResultCarProvider({ children }: ResultCarProviderProps) {
  const [result, setResult] = useState<Result | null>(null)

  return (
    <ResultCarContext.Provider value={{ result, setResult }}>
      {children}
    </ResultCarContext.Provider>
  )
}
