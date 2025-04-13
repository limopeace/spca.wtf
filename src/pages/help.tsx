import React from 'react'
import Head from 'next/head'
import HowToHelpSection from '../components/HowToHelpSection'

const HelpPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>How You Can Help | SPCA.wtf | Chandigarh Animal Welfare Transparency Portal</title>
        <meta name="description" content="Learn how you can help improve animal welfare at SPCA Chandigarh through various actions, from sharing information to contacting officials." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How You Can Help
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Your action can make a real difference in improving animal welfare at SPCA Chandigarh. 
              Here are concrete steps you can take today.
            </p>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <HowToHelpSection />
    </>
  )
}

export default HelpPage 