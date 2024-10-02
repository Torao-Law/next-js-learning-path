import AppShell from '@/components/layouts/appShell'
import '@/styles/globals.scss'
import '@/styles/style.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  )
}
