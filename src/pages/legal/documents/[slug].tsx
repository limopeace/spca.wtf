import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { FiExternalLink, FiArrowLeft, FiFileText, FiDownload, FiInfo } from 'react-icons/fi';
import { getAllLegalDocumentSlugs, getLegalDocumentBySlug, LegalDocument } from '../../../utils/legalDocumentData';

interface DocumentPageProps {
  document: LegalDocument;
}

export default function LegalDocumentPage({ document }: DocumentPageProps) {
  if (!document) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Document not found</h1>
        <p className="mt-4">
          <Link href="/legal" className="text-primary hover:underline">
            Back to Legal Cases
          </Link>
        </p>
      </div>
    );
  }

  const hasAccessSteps = document.accessInstructions && 
    document.accessInstructions !== document.plainTextLink;

  return (
    <>
      <Head>
        <title>{document.documentName} | SPCA.wtf Legal Documents</title>
        <meta 
          name="description" 
          content={`Access information for ${document.documentName} related to SPCA Chandigarh case ${document.caseNumber}`} 
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
              Key Details Document
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-70 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg max-w-md mx-auto text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold mb-3">Coming Soon!</h2>
          <p className="text-gray-600 mb-4">
            We're working on making detailed legal documents accessible.
            This section will be available by the end of April 2025.
          </p>
          <Link href="/" className="inline-block px-5 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-12 bg-white filter blur-[2px] pointer-events-none">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/legal" 
              className="inline-flex items-center text-sm text-primary hover:text-primary-dark"
            >
              <FiArrowLeft className="mr-2" />
              Back to Legal Cases
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 mb-8">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {document.documentName}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Case Authority</h2>
                  <p className="text-gray-900">{document.caseAuthority}</p>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Case Number</h2>
                  <p className="text-gray-900">{document.caseNumber}</p>
                </div>
              </div>

              {/* Access Instructions Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">How to Access This Document</h2>
                
                <div className="bg-blue-50 rounded-lg p-5 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FiInfo className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        {document.additionalInformation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                  <div className="bg-gray-50 px-4 py-3 border-b">
                    <h3 className="text-sm font-medium text-gray-700">Direct Link</h3>
                  </div>
                  <div className="px-4 py-3">
                    <a 
                      href={document.plainTextLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-primary hover:text-primary-dark"
                    >
                      <FiExternalLink className="mr-2" />
                      {document.plainTextLink}
                    </a>
                  </div>
                </div>
                
                {hasAccessSteps && (
                  <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                      <h3 className="text-sm font-medium text-gray-700">Official Site</h3>
                    </div>
                    <div className="px-4 py-3">
                      <a 
                        href={document.accessInstructions} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-primary hover:text-primary-dark"
                      >
                        <FiExternalLink className="mr-2" />
                        {document.accessInstructions}
                      </a>
                    </div>
                  </div>
                )}

                <div className="bg-yellow-50 rounded-lg p-5">
                  <h3 className="text-sm font-medium text-yellow-800 mb-3">Step-by-Step Access Instructions</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-yellow-700">
                    <li>Visit the official website of the {document.caseAuthority}.</li>
                    <li>Navigate to the "Case Status" or "Judgments/Orders" section.</li>
                    <li>Enter the case number: <strong>{document.caseNumber}</strong>.</li>
                    <li>Select the appropriate year from the dropdown menu.</li>
                    <li>Click on "Search" to find the document.</li>
                    <li>In the results, look for "{document.documentName}".</li>
                    <li>Click on the document title to view or download it.</li>
                  </ol>
                </div>
              </div>

              {/* Document Actions */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={document.plainTextLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    Access Document
                  </a>
                  <Link 
                    href="/report-error" 
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <FiInfo className="mr-2" />
                    Report Access Issues
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Important Notes
            </h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>The document details provided here are for informational purposes only.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>All documents are publicly available through official channels.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>If you encounter any access issues, please report them using our reporting tool.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Documents may be updated or modified by authorities over time.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllLegalDocumentSlugs();
  const paths = slugs.map(slug => ({ params: { slug } }));
  
  return {
    paths,
    fallback: false // Return 404 for paths not returned by getStaticPaths
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const document = getLegalDocumentBySlug(slug);
  
  return {
    props: {
      document
    }
  };
}; 