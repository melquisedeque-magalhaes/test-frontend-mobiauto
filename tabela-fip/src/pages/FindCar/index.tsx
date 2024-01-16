import ClipLoader from 'react-spinners/ClipLoader'

import { FormFindCar } from '@/components/FormFindCar'
import { Title } from '@/components/Title'
import { useFindCar } from '@/hook/useFindCard'

import { ContentLoader, SubTitle } from './styles'

export function FindCar() {
  const { brandsResponse } = useFindCar()

  return (
    <main>
      <Title>Tabela Fipe</Title>

      <SubTitle>Consulte o valor de um veiculo de forma gratuita</SubTitle>

      {brandsResponse.isLoading ? (
        <ContentLoader>
          <ClipLoader />
        </ContentLoader>
      ) : (
        <FormFindCar />
      )}
    </main>
  )
}
