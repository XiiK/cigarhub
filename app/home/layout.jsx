import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'
import ProvidersWrapper from './ProvidersWrapper'

export default function HomeLayout ({ children }) {
  return (
    <ProvidersWrapper>
      <div id='page-home' className='flex'>
        <Navbar />
        <MobileNavbar />
        {children}
      </div>
    </ProvidersWrapper>
  )
}
