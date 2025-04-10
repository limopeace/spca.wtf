import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>SPCA.wtf | Chandigarh Animal Welfare Transparency Portal</title>
        <meta name="description" content="Access all the documents that show what's really happening at SPCA Chandigarh. Court records, RTI responses, and official communications reveal the truth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="gradient-bg text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-40 relative">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <span className="tag tag-accent mb-4 inline-block">The Evidence Is Here 🔥</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                SPCA Chandigarh <span className="title-gradient">Uncovered</span>
              </h1>
              <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-lg">
                Access all the documents that show what's <span className="text-highlight">really</span> happening at SPCA Chandigarh. Court records, RTI responses, and official communications reveal the truth.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/documents" className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors text-center">
                  See The Documents
                </Link>
                <Link href="/legal" className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors text-center">
                  View Legal Cases
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="w-full max-w-md animate-float">
                <div className="bg-white p-1 rounded-lg shadow-xl transform rotate-3 relative">
                  <img src="/placeholder.jpg" alt="Document preview" className="rounded-md w-full" />
                  <div className="absolute top-0 right-0 transform translate-x-0 sm:translate-x-1/4 -translate-y-1/4">
                    <span className="inline-flex items-center px-2 sm:px-3 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-primary text-white whitespace-normal sm:whitespace-nowrap">
                      47% Mortality Rate Revealed in RTI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#FAFAFA">
            <path d="M0,96L60,80C120,64,240,32,360,21.3C480,11,600,21,720,42.7C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-16 md:mb-24">
            <span className="inline-block py-1 px-3 bg-secondary bg-opacity-20 text-secondary rounded-md text-sm font-medium mb-4">
              Why This Matters
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              The <span className="text-primary">Truth</span> About SPCA Chandigarh
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  After years of documented issues, we're making all the evidence public. This is about accountability and transparency in animal welfare.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  RTI responses reveal that 47% of animals (6,383) brought to the shelter between January 2019 and September 2021 died during treatment. These documents show a pattern of issues including:
                </p>
                
                <ul className="space-y-2 sm:space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Severe overcrowding in kennels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Inadequate veterinary care and oversight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Mismanagement of funds and resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Lack of proper facilities and equipment</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full flex items-center justify-center">
                    <iframe
                      src="https://www.youtube.com/embed/XcFvze7v-V0"
                      title="SPCA Chandigarh Documentary"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full aspect-video"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} SPCA.wtf - Transparency Initiative</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-gray-400 mr-2">For inquiries:</p>
              <a href="mailto:info@spca.wtf" className="text-sm text-white hover:text-primary-light transition-colors">
                info@spca.wtf
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home 