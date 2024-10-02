import React from 'react'
import Navbar from '../navbar'
import { useRouter } from 'next/router'

type AppShellProps = {
  children: React.ReactNode
}

const pathName = ['/auth/login', '/auth/register']
const AppShell = ({ children }: AppShellProps) => {
  const { pathname } = useRouter()

  return (
    <div>
      {!pathName.includes(pathname) && <Navbar />}
      {children}
    </div>
  )
}

export default AppShell