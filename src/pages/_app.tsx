import React from 'react'
import type { AppProps } from 'next/app'
import { Poppins, Space_Grotesk } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={`${poppins.variable} ${spaceGrotesk.variable} font-sans`}>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default App 