import Navbar from './Navbar'
import ProvidersWrapper from './ProvidersWrapper'
import Test from './Test'
export default function HomeLayout ({ children }) {
  return (
    <ProvidersWrapper>
      <Navbar />
      {children}
    </ProvidersWrapper>
  )
}
