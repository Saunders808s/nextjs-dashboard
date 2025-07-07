import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ClerkProvider } from '@clerk/clerk-react'

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_c2V0dGxlZC1sZWVjaC00Ny5jbGVyay5hY2NvdW50cy5kZXYk'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp
