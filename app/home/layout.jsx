import Navbar from './Navbar'

export default function HomeLayout ({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
