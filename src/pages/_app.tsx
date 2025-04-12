import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DisclaimerModal from '@/components/layout/DisclaimerModal'
import CookieConsentBanner from '@/components/layout/CookieConsentBanner'
import React, { useState, useEffect } from 'react'
import { Poppins, Space_Grotesk } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
})

function MyApp({ Component, pageProps }: AppProps) {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const accepted = localStorage.getItem('disclaimerAccepted');
    const expiry = localStorage.getItem('disclaimerExpiry');
    const now = new Date().getTime();
    if (accepted && expiry && now < parseInt(expiry)) {
      setDisclaimerAccepted(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    setDisclaimerAccepted(true);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      {!disclaimerAccepted ? (
        <DisclaimerModal onAccept={handleAcceptDisclaimer} />
      ) : (
        <div className={`${poppins.variable} ${spaceGrotesk.variable} font-sans flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
          <CookieConsentBanner />
        </div>
      )}
    </>
  )
}

export default MyApp