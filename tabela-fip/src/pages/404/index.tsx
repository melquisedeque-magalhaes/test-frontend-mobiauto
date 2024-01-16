import { Title } from '@/components/Title'
import { Link } from 'react-router-dom'
import { Content, TextLink } from './styles'

export function PageNotFound() {
  return (
    <Content>
      <Title>Página não encontrada</Title>

      <TextLink>
        Voltar para o <Link to="/">inicio</Link>
      </TextLink>
    </Content>
  )
}
