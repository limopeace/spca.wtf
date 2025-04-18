import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiClock, FiFileText, FiExternalLink, FiDownload } from 'react-icons/fi';

const documents = [
  { 
    id: 11, 
    title: 'SPCA Chandigarh Key Details Document (April 2025)', 
    description: 'A comprehensive analysis of the current situation at SPCA Chandigarh, created by concerned citizens to help the public understand the issues.', 
    link: '/whitepaper.pdf',
    featured: true
  },
  { 
    id: 1, 
    title: 'PIL Petition 2022', 
    description: 'Public Interest Litigation filed in 2022 regarding animal welfare issues at SPCA Chandigarh', 
    link: '/documents/PIL_1234_2022_Petition.pdf' 
  },
  { 
    id: 2, 
    title: 'Court Order May 2022', 
    description: 'High Court order related to the PIL filed against SPCA Chandigarh', 
    link: '/documents/PIL_1234_2022_Order_May2022.pdf' 
  },
  { 
    id: 3, 
    title: 'Contempt Petition 2023', 
    description: 'Contempt petition filed due to non-compliance with court orders', 
    link: '/documents/COCP_789_2023_Petition.pdf' 
  },
  { 
    id: 4, 
    title: 'MC Response Aug 2023', 
    description: 'Municipal Corporation response to the contempt petition', 
    link: '/documents/COCP_789_2023_MCResponse.pdf' 
  },
  { 
    id: 5, 
    title: 'RTI Appeal 2021', 
    description: 'RTI appeal filed to obtain information about SPCA operations', 
    link: '/documents/SIC_RTI_456_2021_Appeal.pdf' 
  },
  { 
    id: 6, 
    title: 'SIC Order 2021', 
    description: 'State Information Commission order regarding RTI disclosure', 
    link: '/documents/SIC_RTI_456_2021_Order.pdf' 
  },
  { 
    id: 7, 
    title: 'Mortality Data Disclosure', 
    description: 'Official data showing 47% mortality rate at SPCA Chandigarh', 
    link: '/documents/mortality_data_2020_2021.pdf' 
  },
  { 
    id: 8, 
    title: 'AWBI Complaint 2024', 
    description: 'Complaint filed with Animal Welfare Board of India in 2024', 
    link: '/documents/AWBI_CHD_123_2024_Complaint.pdf' 
  },
  { 
    id: 9, 
    title: 'AWBI Acknowledgment', 
    description: 'Acknowledgment from AWBI regarding the complaint', 
    link: '/documents/AWBI_CHD_123_2024_Ack.pdf' 
  },
  { 
    id: 10, 
    title: 'NGT Petition 2024', 
    description: 'Petition filed with National Green Tribunal regarding environmental issues at SPCA', 
    link: '/documents/NGT_CHD_567_2024_Petition.pdf' 
  },
];

const DocumentsPage = () => {
  // Filter documents to separate featured from regular
  const featuredDocuments = documents.filter(doc => doc.featured);
  const regularDocuments = documents.filter(doc => !doc.featured);

  return (
    <div>
      <Head>
        <title>SPCA Chandigarh Documents | Court Records, RTI Responses & Evidence</title>
        <meta name="description" content="Access official documents about SPCA Chandigarh including court records, RTI responses revealing 47% mortality rates, AWBI complaints, and legal petitions." />
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
              Key Details Document
            </a>
          </div>
        </div>
      </section>
      
      <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Official Documents</h1>
        <p className="text-gray-700 mb-8 max-w-3xl">
          Access official documents related to SPCA Chandigarh, including court records, RTI responses, and other evidence. 
          These documents provide transparency about the ongoing issues and the legal actions being taken.
        </p>

        {/* Coming Soon Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-10 flex items-center">
          <FiClock className="text-blue-500 mr-2 flex-shrink-0" size={20} />
          <div>
            <p className="text-blue-800 font-medium">Document Access Coming Soon</p>
            <p className="text-blue-700 text-sm">We're working hard to bring you all the official documents related to SPCA Chandigarh. This section will be available by the end of April 2025.</p>
          </div>
        </div>

        {/* Featured Documents Section */}
        {featuredDocuments.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="inline-block bg-primary bg-opacity-10 text-primary text-sm font-medium px-2 py-1 rounded mr-2">NEW</span>
              Featured Document
            </h2>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 shadow-sm">
              {featuredDocuments.map((doc) => (
                <div key={doc.id} className="md:flex items-start justify-between">
                  <div className="mb-4 md:mb-0 md:mr-8 md:flex-1">
                    <h3 className="text-lg font-semibold mb-1">{doc.title}</h3>
                    <p className="text-gray-700 mb-4">
                      {doc.description}
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      This citizen-created document is designed to help the public and authorities understand the current situation at SPCA Chandigarh.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <a 
                      href={doc.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors inline-flex items-center justify-center"
                    >
                      View Document
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a 
                      href={doc.link} 
                      download
                      className="bg-white text-primary border border-primary px-4 py-2 rounded-md hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                    >
                      Download
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <h2 className="text-xl font-semibold mb-4">Official Records & Evidence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularDocuments.map((doc) => (
            <div key={doc.id} className="border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-200 flex flex-col">
              <div className="p-5 flex-grow">
                <h2 className="text-lg font-semibold mb-2">{doc.title}</h2>
                <p className="text-gray-700 mb-4 text-sm">{doc.description}</p>
              </div>
              <div className="border-t p-4 bg-gray-50">
                <div className="flex space-x-4">
                  <span className="text-gray-400 cursor-not-allowed font-medium inline-flex items-center">
                    <FiFileText className="mr-1" />
                    View
                    <FiClock className="ml-1 text-yellow-600" size={14} />
                  </span>
                  <span className="text-gray-400 cursor-not-allowed font-medium inline-flex items-center">
                    <FiDownload className="mr-1" />
                    Download
                    <FiClock className="ml-1 text-yellow-600" size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Document Verification</h2>
          <p className="text-gray-700">
            All documents provided on this website are official records obtained through legal channels including RTI requests, court filings, and other official sources.
            The authenticity of these documents can be verified through their respective official sources. The key details document is citizen-created to help understand the situation.
          </p>
        </div>
      </main>
    </div>
  );
};

export default DocumentsPage; 