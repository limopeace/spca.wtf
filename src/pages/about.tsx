import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiInfo, FiMail, FiPhone, FiMapPin, FiHeart, FiAlertCircle, FiAlertTriangle } from 'react-icons/fi';
import Slideshow from '../components/Slideshow';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | SPCA.wtf</title>
        <meta 
          name="description" 
          content="Learn more about SPCA Chandigarh and our mission to document and improve animal welfare practices."
        />
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
                  We're just keeping it 💯 about what's happening at SPCA Chandigarh specifically. 
                  This is a public awareness vibe for citizens and officials to see the full picture.
                  Social media coming soon! <span className="text-xs">(No cap)</span>
                </p>
              </div>
            </div>
            <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-200 text-yellow-800 rounded-md hover:bg-yellow-300 transition-colors text-sm font-medium whitespace-nowrap">
              Read Our Whitepaper
            </a>
          </div>
        </div>
      </section>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-primary bg-opacity-20 text-primary rounded-md text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Understanding SPCA <span className="title-gradient">Chandigarh</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              A resource dedicated to transparency and documentation of animal welfare practices at SPCA Chandigarh.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiMail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Contact Email</h3>
                      <p className="text-gray-600">info@spca.wtf</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Use this email for inquiries and evidence submission.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiInfo className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Important Note</h3>
                        <p className="text-gray-600 mb-4">
                          For reporting issues or submitting evidence related to SPCA Chandigarh, please email us at <strong>info@spca.wtf</strong>.
                        </p>
                        <p className="text-gray-600">
                          For animal emergencies in Chandigarh, please contact the SPCA helpline directly using the phone number above.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* About content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p>
                    SPCA.wtf is an independent documentation project focused on tracking and reporting on the practices, operations, and governance of the SPCA Chandigarh facility. We are not affiliated with the official SPCA organization.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Why We Exist</h3>
                  <p>
                    Our platform was created to provide transparency around animal welfare practices at SPCA Chandigarh. We collect, verify, and publish information about:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Operational policies and their implementation</li>
                    <li>Animal treatment practices and standards</li>
                    <li>Governance and oversight mechanisms</li>
                    <li>Legal cases and regulatory compliance</li>
                    <li>Public concerns and documented incidents</li>
                  </ul>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FiAlertCircle className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-blue-800">How You Can Help</h3>
                        <p className="text-blue-700 mt-2">
                          If you have reliable information, documentation, or evidence related to practices at SPCA Chandigarh that you believe should be documented, please reach out to us at <strong>info@spca.wtf</strong>.
                        </p>
                        <p className="text-blue-700 mt-2">
                          We verify all submissions for accuracy before publishing and protect the identities of those who wish to remain anonymous.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Report Inaccuracies Section */}
                  <div className="bg-orange-50 p-6 rounded-lg mb-8 mt-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FiAlertTriangle className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-orange-800">Report Inaccuracies</h3>
                        <p className="text-orange-700 mt-2">
                          Notice something incorrect on this site? Help us maintain accuracy. Please email <strong>info@spca.wtf</strong> with the following details:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-sm text-orange-700">
                          <li>The URL of the page with the inaccuracy.</li>
                          <li>The specific incorrect information.</li>
                          <li>Your suggested correction.</li>
                          <li>Any supporting evidence or sources (if available).</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Our Commitment</h3>
                  <p>
                    We are committed to factual reporting and maintaining a comprehensive timeline of events, policies, and practices at SPCA Chandigarh. Our goal is to contribute to improved animal welfare standards through transparency and public accountability.
                  </p>
                  
                  <div className="flex items-center justify-center mt-10 mb-6">
                    <FiHeart className="h-8 w-8 text-primary mr-4" />
                    <p className="text-lg font-medium">
                      Together, we can advocate for the ethical treatment of animals in Chandigarh.
                    </p>
                  </div>
                  
                  <div className="text-center mt-8">
                    <Link href="/documents" className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors">
                      View Our Documents
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Evidence Gallery Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-secondary bg-opacity-20 text-secondary rounded-md text-sm font-medium mb-4">
              Photo Evidence
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visual Documentation
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Browse through our photographic evidence documenting conditions at SPCA Chandigarh
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Slideshow fullWidth={true} rotate={false} />
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">
              These images were collected during official visits and inspections of the SPCA Chandigarh facilities.
              They represent actual conditions documented by our team and concerned citizens.
            </p>
            <Link href="/documents" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors">
              View More Evidence
            </Link>
          </div>
        </div>
      </div>

      {/* Supporters & Public Awareness Section */}
      <div id="supporters" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-white bg-opacity-20 text-white rounded-md text-sm font-medium mb-4">
              Growing Movement
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Public Awareness Progress
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white text-opacity-90">
              We're grateful to the influencers and platforms helping spread awareness about our initiative
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram Influencer Card - @kashish_verma1864 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border border-white border-opacity-20 hover:transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
                    <div className="h-full w-full rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 text-white">
                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">Kashish Verma</h3>
                    <a href="https://www.instagram.com/kashish_verma1864/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                      @kashish_verma1864
                    </a>
                  </div>
                </div>
                <p className="text-white text-opacity-80 mb-4">
                  Thank you for helping spread awareness about SPCA Chandigarh conditions and amplifying our mission for better animal welfare.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="bg-purple-500 bg-opacity-30 text-white text-sm px-3 py-1 rounded-full">Instagram Influencer</span>
                  <a href="https://www.instagram.com/kashish_verma1864/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors text-sm">
                    Visit Profile →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Instagram Account - @chdanimalwelfare */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border border-white border-opacity-20 hover:transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
                    <div className="h-full w-full rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 text-white">
                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">Chandigarh Animal Welfare</h3>
                    <a href="https://www.instagram.com/chdanimalwelfare/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                      @chdanimalwelfare
                    </a>
                  </div>
                </div>
                <p className="text-white text-opacity-80 mb-4">
                  Thank you for your dedicated support in raising awareness about animal welfare issues in Chandigarh and helping our initiative reach a wider audience.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="bg-purple-500 bg-opacity-30 text-white text-sm px-3 py-1 rounded-full">Animal Welfare Advocate</span>
                  <a href="https://www.instagram.com/chdanimalwelfare/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors text-sm">
                    Visit Profile →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Instagram Account - @bullu_bow_wow */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border border-white border-opacity-20 hover:transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
                    <div className="h-full w-full rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 text-white">
                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">Bullu Bow Wow</h3>
                    <a href="https://www.instagram.com/bullu_bow_wow/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                      @bullu_bow_wow
                    </a>
                  </div>
                </div>
                <p className="text-white text-opacity-80 mb-4">
                  Thank you for your support in spreading awareness about SPCA Chandigarh conditions and contributing to our mission for better animal welfare standards.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="bg-purple-500 bg-opacity-30 text-white text-sm px-3 py-1 rounded-full">Pet Community</span>
                  <a href="https://www.instagram.com/bullu_bow_wow/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors text-sm">
                    Visit Profile →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Instagram Account - @ruchi__2830 */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border border-white border-opacity-20 hover:transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5">
                    <div className="h-full w-full rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 text-white">
                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">Ruchi</h3>
                    <a href="https://www.instagram.com/ruchi__2830/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                      @ruchi__2830
                    </a>
                  </div>
                </div>
                <p className="text-white text-opacity-80 mb-4">
                  Thank you for your valuable contribution in raising awareness about animal welfare issues at SPCA Chandigarh and supporting our transparency initiative.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="bg-purple-500 bg-opacity-30 text-white text-sm px-3 py-1 rounded-full">Animal Welfare Supporter</span>
                  <a href="https://www.instagram.com/ruchi__2830/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors text-sm">
                    Visit Profile →
                  </a>
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white text-opacity-90 mb-6 max-w-3xl mx-auto">
              Public awareness is a critical part of our initiative. By spreading information about SPCA Chandigarh conditions, we can drive real change and ensure better standards for animal welfare.
            </p>
            <Link href="/help" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-opacity-90 transition-colors">
              Join Our Efforts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 