import { Outlet } from 'react-router-dom'

import { Container } from './styles'

export function RootLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}
