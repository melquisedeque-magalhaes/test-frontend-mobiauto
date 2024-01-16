import { FormEvent, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { useResultCar } from './useResultCar'
import { getBrands } from '@/api/get-brands'
import { getModels } from '@/api/get-model'
import { getYears } from '@/api/get-year'
import { getResult } from '@/api/get-result'

export function useFindCar() {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { setResult } = useResultCar()

  const navigate = useNavigate()

  const brandsResponse = useQuery({
    queryKey: ['get-brands'],
    queryFn: getBrands,
  })

  const modelsResponse = useQuery({
    queryKey: ['get-models', brand],
    queryFn: () =>
      getModels({
        brand: Number(brand),
      }),
    enabled: !!brand,
  })

  const yearsResponse = useQuery({
    queryKey: ['get-years', brand, model],
    queryFn: () =>
      getYears({
        brand: Number(brand),
        model: Number(model),
      }),
    enabled: !!brand && !!model,
  })

  const resultResponse = useQuery({
    queryKey: ['get-years', brand, model, year],
    queryFn: () =>
      getResult({
        brand: Number(brand),
        model: Number(model),
        year,
      }),
    enabled: false,
  })

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      setIsLoading(true)

      const fetch = await resultResponse.refetch()

      if (!fetch.isLoading && fetch.data) {
        setResult(fetch.data)

        navigate('/results')
      }
    } catch (err) {
      console.log('err', err)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    handleSubmit,
    yearsResponse,
    modelsResponse,
    brandsResponse,
    setBrand,
    setModel,
    setYear,
    isLoading,
    brand,
    year,
    model,
  }
}
