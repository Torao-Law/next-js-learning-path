import React from 'react'
import Navbar from '../navbar'
import { useRouter } from 'next/router'

type AppShellProps = {
  children: React.ReactNode
}

const pathName = ['/auth/login', '/auth/register', '/404']
const AppShell = ({ children }: AppShellProps) : React.JSX.Element => {
  const { pathname } = useRouter()

  return (
    <div>
      {!pathName.includes(pathname) && <Navbar />}
      {children}
    </div>
  )
}

export default AppShell