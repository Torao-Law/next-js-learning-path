import React from 'react'
import Navbar from '../navbar'

type AppShellProps = {
  children: React.ReactNode
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default AppShell