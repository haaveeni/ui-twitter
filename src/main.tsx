import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './global.css'
import { Default } from './layouts/Default'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
