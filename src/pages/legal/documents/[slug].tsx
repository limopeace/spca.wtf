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

      <div className="py-12 bg-white">
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