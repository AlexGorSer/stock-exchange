import { createRoot } from 'react-dom/client'
import { App } from './app'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './shared/config/ChakraConfig'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
)
