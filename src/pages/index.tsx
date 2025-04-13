import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Slideshow from '../components/Slideshow'
import HowToHelpSection from '../components/HowToHelpSection'

const Home: React.FC = () => {
  // Define the images for the carousel
  const slideshowImages = [
    {
      src: '/sourceDocs/slideshow/1.png',
      alt: 'SPCA Slideshow Image 1',
      caption: 'Current conditions at SPCA Chandigarh shelter facilities'
    },
    {
      src: '/sourceDocs/slideshow/2.png',
      alt: 'SPCA Slideshow Image 2',
      caption: 'Documentation of animal welfare concerns'
    },
    {
      src: '/sourceDocs/slideshow/3.png',
      alt: 'SPCA Slideshow Image 3',
      caption: 'Evidence of neglect at SPCA facilities'
    },
    {
      src: '/sourceDocs/slideshow/4.png',
      alt: 'SPCA Slideshow Image 4',
      caption: 'Photographic evidence of shelter conditions'
    },
    {
      src: '/sourceDocs/slideshow/5.png',
      alt: 'SPCA Slideshow Image 5',
      caption: 'Documentation from inside the shelter'
    },
    {
      src: '/sourceDocs/slideshow/6.png',
      alt: 'SPCA Slideshow Image 6',
      caption: 'Animal welfare investigation findings'
    },
    {
      src: '/sourceDocs/slideshow/7.png',
      alt: 'SPCA Slideshow Image 7',
      caption: 'Evidence of improper animal housing'
    },
    {
      src: '/sourceDocs/slideshow/8.png',
      alt: 'SPCA Slideshow Image 8',
      caption: 'SPCA facility photographic evidence'
    }
  ];

  return (
    <>
      <Head>
        <title>SPCA.wtf | Chandigarh Animal Welfare Transparency Portal</title>
        <meta name="description" content="Access all the documents that show what's really happening at SPCA Chandigarh. Court records, RTI responses, and official communications reveal the truth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Disclaimer Banner - Gen Z Style */}
      <section className="bg-yellow-100 py-4 border-t border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="text-yellow-600 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-yellow-800">
                  <span className="font-bold">Heads up!</span> This is <span className="underline">not</span> the official SPCA Chandigarh website.
                </p>
                <p className="text-sm text-yellow-700 max-w-2xl">
                  This is SPCA Chandigarh's animal welfare transparency portal that puts critical issues on display. 
                  Created by the public, for the public—serving citizens of all ages and backgrounds in Chandigarh. 
                  <span className="italic ml-1">SPCA.wtf stands for "Welfare Transparency Framework"</span> – documenting what's happening so everyone can see the full picture and drive positive change.
                </p>
              </div>
            </div>
            <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-200 text-yellow-800 rounded-md hover:bg-yellow-300 transition-colors text-sm font-medium whitespace-nowrap">
              Key Details Document
            </a>
          </div>
        </div>
      </section>

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
                <Link href="/#how-to-help" className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-opacity-90 transition-colors text-center animate-pulse">
                  How You Can Help →
                </Link>
                <Link href="/about#supporters" className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-opacity-90 transition-colors text-center">
                  See Our Impact
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="w-full max-w-md animate-float">
                <Slideshow />
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

      {/* Why This Matters Section with Video */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 bg-secondary bg-opacity-20 text-secondary rounded-md text-sm font-medium mb-4">
              Why This Matters
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              The <span className="text-primary">Truth</span> About SPCA Chandigarh
            </h2>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Updated Text Content with more engaging copy and CTAs */}
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                This transparency initiative goes beyond just sharing information—it's about <span className="font-semibold">creating real change</span> in how we care for the most vulnerable animals in our community.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Our evidence-based documentation reveals systemic issues that require immediate attention:
              </p>
              
              <ul className="space-y-3 sm:space-y-4 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span><span className="font-medium">Inadequate Medical Care:</span> Critical shortages in veterinary staff and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span><span className="font-medium">Overcrowded Facilities:</span> Animals housed in stressful, unsanitary conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span><span className="font-medium">Resource Mismanagement:</span> Funds not properly allocated to animal welfare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span><span className="font-medium">Transparency Issues:</span> Public records show discrepancies in reporting</span>
                </li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary mb-5">
                <p className="font-medium text-gray-800">
                  By bringing these issues to light, we can work together toward:
                </p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Better accountability in animal welfare governance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Improved standards of care for all animals
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Community-driven solutions to animal welfare challenges
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/documents" className="px-5 py-2 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors text-sm">
                  Review the Evidence
                </Link>
                <Link href="/faq" className="px-5 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors text-sm">
                  How You Can Help
                </Link>
              </div>
            </div>
            
            {/* Video Content - Portrait Mode */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-xs mx-auto">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative" style={{ paddingBottom: '177.77%', /* 9:16 aspect ratio */ height: 0 }}>
                    <iframe
                      src="https://www.youtube.com/embed/XxhV9bmgInM"
                      title="SPCA Chandigarh Documentary"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ 
                        margin: '0 auto',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent CTA for How You Can Help */}
      <section className="py-12 bg-gradient-to-r from-purple-600 via-primary to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#dottedPattern)"></path>
          </svg>
          <defs>
            <pattern id="dottedPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="white" />
            </pattern>
          </defs>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 bg-white bg-opacity-20 text-white rounded-full text-sm font-semibold mb-4">
              Take Action Now
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Make a <span className="underline decoration-yellow-300 decoration-4">Difference</span>?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white text-opacity-90">
              Your voice matters. Join hundreds of concerned citizens advocating for better animal welfare standards at SPCA Chandigarh.
            </p>
            <a href="#how-to-help" className="inline-block px-8 py-4 text-lg font-bold text-primary bg-white rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 animate-pulse">
              See How You Can Help →
            </a>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <HowToHelpSection />

      {/* SPCA Infographic Section - moved to bottom of page */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 bg-primary bg-opacity-20 text-primary rounded-md text-sm font-medium mb-3">
              Organization Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">SPCA Overview & Key Issues</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Understanding the organizational overview, key stakeholders, and systemic issues within SPCA Chandigarh</p>
          </div>
          
          {/* Mobile view - Download button only */}
          <div className="md:hidden bg-white rounded-lg shadow-sm overflow-hidden p-6 max-w-sm mx-auto text-center">
            <div className="border border-gray-200 rounded-md p-4 mb-4 flex items-center justify-center bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 2v5a2 2 0 002 2h5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">SPCA Organization Infographic</h3>
            <p className="text-gray-600 text-sm mb-4">
              This infographic shows SPCA Chandigarh's organizational structure, key stakeholders, funding flow, and highlights critical animal welfare issues. 
              PDF documents may not display properly on some mobile devices. Please download for the best viewing experience.
            </p>
            <a 
              href="/spca-infographic.pdf" 
              download 
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Infographic
            </a>
            <a 
              href="/spca-infographic.pdf" 
              target="_blank"
              rel="noopener noreferrer" 
              className="w-full mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in New Tab
            </a>
          </div>
          
          {/* Desktop view - embedded PDF */}
          <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="relative" style={{ paddingBottom: '125%' /* 4:5 aspect ratio */ }}>
              <embed 
                src="/spca-infographic.pdf#toolbar=0&navpanes=0" 
                type="application/pdf" 
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <div className="p-4 text-center border-t border-gray-100">
              <a 
                href="/spca-infographic.pdf" 
                download 
                className="inline-flex items-center justify-center px-5 py-2 border border-primary text-primary bg-white rounded-md hover:bg-primary hover:text-white transition-colors font-medium text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home 