'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
const Navbar = () => {
  const { data: session } = useSession()
  return (
    <>
      <div>Navbar {session?.user.email}</div>
      <button onClick={() => signOut()}>Sign out</button>
      <h1>fane</h1>
    </>
  )
}

export default Navbar
