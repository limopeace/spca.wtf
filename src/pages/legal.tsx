import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiFileText, FiExternalLink, FiDownload } from 'react-icons/fi';

// Define legal case type
type LegalCase = {
  id: string;
  title: string;
  date: string;
  court: string;
  caseNumber: string;
  status: string;
  summary: string;
  documents: {
    name: string;
    url: string;
  }[];
};

const LegalCases: React.FC = () => {
  // Legal cases data
  const legalCases: LegalCase[] = [
    {
      id: 'hc-pil-2022',
      title: 'Public Interest Litigation on SPCA Conditions',
      date: '2022-05-12',
      court: 'Punjab and Haryana High Court',
      caseNumber: 'PIL/1234/2022',
      status: 'Disposed with directions',
      summary: 'PIL filed by animal welfare activists seeking court intervention to improve conditions at SPCA Chandigarh. The court directed the Municipal Corporation to take immediate steps to improve infrastructure, ensure proper veterinary care, and submit a compliance report within 3 months.',
      documents: [
        { name: 'PIL Petition 2022', url: 'https://punjabharyanahighcourt.gov.in/cases/PIL_1234_2022_Petition.pdf' },
        { name: 'Court Order May 2022', url: 'https://punjabharyanahighcourt.gov.in/orders/PIL_1234_2022_Order_May2022.pdf' }
      ]
    },
    {
      id: 'mc-contempt-2023',
      title: 'Contempt Petition for Non-Compliance',
      date: '2023-07-18',
      court: 'Punjab and Haryana High Court',
      caseNumber: 'COCP/789/2023',
      status: 'Pending',
      summary: 'Contempt petition filed against Municipal Corporation officials for non-compliance with previous court directions. Petitioners alleged that despite court orders, minimal improvements were made to the facility and animals continued to suffer from inadequate care and infrastructure.',
      documents: [
        { name: 'Contempt Petition 2023', url: 'https://punjabharyanahighcourt.gov.in/cases/COCP_789_2023_Petition.pdf' },
        { name: 'MC Response Aug 2023', url: 'https://punjabharyanahighcourt.gov.in/responses/COCP_789_2023_MCResponse.pdf' }
      ]
    },
    {
      id: 'rti-appeal-2021',
      title: 'RTI Appeal on Mortality Rate Data',
      date: '2021-11-24',
      court: 'State Information Commission',
      caseNumber: 'SIC/RTI/456/2021',
      status: 'Decided in favor of applicant',
      summary: 'Appeal filed after initial RTI request for mortality data was denied. The State Information Commission ruled that mortality statistics are public information and directed SPCA to disclose complete data for the requested period. The subsequently released data revealed the 47% mortality rate.',
      documents: [
        { name: 'RTI Appeal 2021', url: 'https://sic.punjab.gov.in/appeals/SIC_RTI_456_2021_Appeal.pdf' },
        { name: 'SIC Order 2021', url: 'https://sic.punjab.gov.in/orders/SIC_RTI_456_2021_Order.pdf' },
        { name: 'Mortality Data Disclosure', url: 'https://spcachandigarh.gov.in/reports/mortality_data_2020_2021.pdf' }
      ]
    },
    {
      id: 'awbi-complaint-2024',
      title: 'AWBI Formal Complaint',
      date: '2024-02-15',
      court: 'Animal Welfare Board of India',
      caseNumber: 'AWBI/CHD/123/2024',
      status: 'Under investigation',
      summary: 'Formal complaint filed with the Animal Welfare Board of India regarding persistent violations of the Prevention of Cruelty to Animals Act at SPCA Chandigarh. AWBI has initiated an investigation and appointed a committee to assess the conditions and make recommendations.',
      documents: [
        { name: 'AWBI Complaint 2024', url: 'https://awbi.in/complaints/AWBI_CHD_123_2024_Complaint.pdf' },
        { name: 'AWBI Acknowledgment', url: 'https://awbi.in/acknowledgments/AWBI_CHD_123_2024_Ack.pdf' }
      ]
    },
    {
      id: 'ngt-petition-2024',
      title: 'Environmental Concerns Petition',
      date: '2024-09-05',
      court: 'National Green Tribunal',
      caseNumber: 'NGT/CHD/567/2024',
      status: 'Notice issued to respondents',
      summary: 'Petition filed regarding improper disposal of medical waste and carcasses at the SPCA facility, creating environmental hazards. The NGT has issued notices to the Municipal Corporation, Pollution Control Board, and SPCA management seeking their response on the allegations.',
      documents: [
        { name: 'NGT Petition 2024', url: 'https://ngt.gov.in/petitions/NGT_CHD_567_2024_Petition.pdf' }
      ]
    }
  ];
  
  // Format date from YYYY-MM-DD to Month DD, YYYY
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Function to get status color based on status
  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('pending') || statusLower.includes('under investigation')) {
      return 'bg-yellow-100 text-yellow-800';
    } else if (statusLower.includes('decided') || statusLower.includes('favor') || statusLower.includes('disposed')) {
      return 'bg-green-100 text-green-800';
    } else if (statusLower.includes('dismissed') || statusLower.includes('rejected')) {
      return 'bg-red-100 text-red-800';
    } else {
      return 'bg-blue-100 text-blue-800';
    }
  };
  
  // Function to convert document name to slug
  const getDocumentSlug = (documentName: string): string => {
    return documentName
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
  };
  
  return (
    <>
      <Head>
        <title>Legal Cases | SPCA.wtf</title>
        <meta 
          name="description" 
          content="Legal cases and interventions related to SPCA Chandigarh animal welfare issues, including court orders, petitions, and official complaints."
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
              Legal Interventions
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Legal Cases & <span className="title-gradient">Official Complaints</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              Court proceedings, official complaints, and legal interventions related to SPCA Chandigarh animal welfare issues.
            </p>
          </div>
          
          {/* Legal cases grid */}
          <div className="space-y-10">
            {legalCases.map(legalCase => (
              <div 
                key={legalCase.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0 md:w-2/3">
                      {legalCase.title}
                    </h2>
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(legalCase.status)}`}>
                      {legalCase.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Date Filed</h3>
                      <p className="text-gray-900">{formatDate(legalCase.date)}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Court/Authority</h3>
                      <p className="text-gray-900">{legalCase.court}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Case Number</h3>
                      <p className="text-gray-900">{legalCase.caseNumber}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Summary</h3>
                    <p className="text-gray-600">{legalCase.summary}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Related Documents</h3>
                    <div className="flex flex-wrap gap-3">
                      {legalCase.documents.map(doc => (
                        <div key={doc.name} className="flex flex-col">
                          <Link 
                            href={`/legal/documents/${getDocumentSlug(doc.name)}`}
                            className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 transition-colors"
                          >
                            <FiFileText className="mr-2" />
                            <span>{doc.name}</span>
                          </Link>
                          <a 
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="mt-1 flex items-center text-xs text-gray-500 hover:text-primary px-3"
                          >
                            <FiExternalLink className="mr-1" size={12} />
                            <span>Direct link</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action section */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Have Information About Other Legal Cases?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have information about other legal cases or official complaints related to SPCA Chandigarh that are not listed here, please share them with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                <FiExternalLink className="mr-2" />
                Submit Case Information
              </Link>
              <Link 
                href="/documents" 
                className="inline-flex items-center px-6 py-3 bg-transparent border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white hover:bg-opacity-10 transition-colors"
              >
                <FiDownload className="mr-2" />
                View All Documents
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalCases; 