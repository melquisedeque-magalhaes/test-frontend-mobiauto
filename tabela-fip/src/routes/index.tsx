import { createBrowserRouter } from 'react-router-dom'

import { FindCar } from '../pages/FindCar'
import { RootLayout } from '../pages/_layouts/RootLayout'
import { ResultCar } from '@/pages/ResultCar'
import { PageNotFound } from '@/pages/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <FindCar />,
      },
      {
        path: '/results',
        element: <ResultCar />,
      },
    ],
  },
])
