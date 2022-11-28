import '../styles/globals.css'
import ProvidersWrapper from './ProvidersWrapper'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body>
        <ProvidersWrapper>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  )
}
