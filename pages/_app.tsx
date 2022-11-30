import React from 'react'

export default function App ({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
      <Component {...pageProps} />
  )
}
