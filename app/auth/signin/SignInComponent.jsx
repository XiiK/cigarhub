'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
const SignInComponent = ({ providers }) => {
  const callbackUrl = (process.env.VERCEL_URL || 'http://localhost:3000') + '/home'
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl })}>Sign in with {providers.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default SignInComponent
