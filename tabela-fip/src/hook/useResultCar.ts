import { useContext } from 'react'

import { ResultCarContext } from '@/context/ResultCarContext'

export function useResultCar() {
  const { result, setResult } = useContext(ResultCarContext)

  return {
    result,
    setResult,
  }
}
