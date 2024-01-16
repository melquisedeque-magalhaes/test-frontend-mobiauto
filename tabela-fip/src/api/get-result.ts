import { api } from '@/services/api'
import { Result } from '@/typings/result'

interface GetResult {
  brand: number
  model: number
  year: string
}

export async function getResult({ brand, model, year }: GetResult) {
  const response = await api.get<Result>(
    `/carros/marcas/${brand}/modelos/${model}/anos/${year}`,
  )

  return response.data
}
