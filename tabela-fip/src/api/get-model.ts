import { api } from '@/services/api'
import { Model } from '@/typings/models'

interface GetModels {
  brand: number
}

export async function getModels({ brand }: GetModels) {
  const response = await api.get<Model>(`/carros/marcas/${brand}/modelos`)

  return response.data
}
