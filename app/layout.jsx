import '../styles/globals.css'
export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>CigarHub</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
