import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import { router } from './routes'
import { GlobalStyle } from './styles/globalStyles'
import { queryClient } from './services/reat-query'
import { ResultCarProvider } from './context/ResultCarContext'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ResultCarProvider>
        <RouterProvider router={router} />
      </ResultCarProvider>
    </QueryClientProvider>
  )
}
