import { useResultCar } from '@/hook/useResultCar'
import { Title } from '@/components/Title'

import { Content, Text, Tooltip } from './styles'

export function ResultCar() {
  const { result } = useResultCar()

  return (
    <Content>
      <Title>
        Tabela Fipe: Preço {result?.Marca} {result?.Modelo} {result?.AnoModelo}
      </Title>

      <Tooltip>{result?.Valor}</Tooltip>

      <Text>Este e o preço de compra do veiculo</Text>
    </Content>
  )
}
