import { api } from '@/services/api'
import { Brands } from '@/typings/brands'

export async function getBrands() {
  const response = await api.get<Brands[]>('/carros/marcas')

  return response.data
}
