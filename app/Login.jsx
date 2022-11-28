'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const Login = () => {
  const { data: session } = useSession()
  return (
    <h1>{session.user.email}</h1>
  )
}

export default Login
