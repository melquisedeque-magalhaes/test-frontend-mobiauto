import ClipLoader from 'react-spinners/ClipLoader'

import { useFindCar } from '@/hook/useFindCard'
import { Button, Content, Option, Select } from './styles'
import { useMemo } from 'react'

export function FormFindCar() {
  const {
    brandsResponse,
    handleSubmit,
    isLoading,
    modelsResponse,
    setBrand,
    setModel,
    setYear,
    yearsResponse,
    brand,
    model,
    year,
  } = useFindCar()

  const isDisabledButton = useMemo(() => {
    return !brand || !model || !year
  }, [brand, model, year])

  return (
    <Content onSubmit={handleSubmit}>
      <Select
        value={brand || 'selected'}
        onChange={(event) => setBrand(event.target.value)}
        required
        name="brand"
      >
        <option value="selected" hidden disabled>
          Marca
        </option>
        {brandsResponse.data?.map((brand) => (
          <Option key={brand.codigo} value={brand.codigo}>
            {brand.nome}
          </Option>
        ))}
      </Select>

      <Select
        value={model || 'selected'}
        onChange={(event) => setModel(event.target.value)}
        disabled={!brand}
        required
        name="model"
      >
        <option value="selected" hidden disabled>
          Modelo
        </option>
        {modelsResponse?.data?.modelos?.map((model) => (
          <Option key={model.codigo} value={model.codigo}>
            {model.nome}
          </Option>
        ))}
      </Select>

      {brand && model && (
        <Select
          value={year || 'selected'}
          onChange={(event) => setYear(event.target.value)}
          disabled={!brand}
          required
          name="year"
        >
          <option value="selected" hidden disabled>
            Ano
          </option>
          {yearsResponse?.data?.map((year) => (
            <Option key={year.codigo} value={year.codigo}>
              {year.nome}
            </Option>
          ))}
        </Select>
      )}

      <Button disabled={isDisabledButton} type="submit">
        {isLoading ? <ClipLoader /> : 'Consultar preço'}
      </Button>
    </Content>
  )
}
