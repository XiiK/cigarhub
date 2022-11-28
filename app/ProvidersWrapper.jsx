'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const ProvidersWrapper = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default ProvidersWrapper
