import { api } from '@/services/api'
import { Year } from '@/typings/year'

interface GetModels {
  brand: number
  model: number
}

export async function getYears({ brand, model }: GetModels) {
  const response = await api.get<Year[]>(
    `/carros/marcas/${brand}/modelos/${model}/anos`,
  )

  return response.data
}
