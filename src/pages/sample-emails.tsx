import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiDownload, FiArrowLeft } from 'react-icons/fi'
import { saveAs } from 'file-saver'
import { Packer, Document, Paragraph, TextRun } from 'docx'

type EmailTemplate = {
  id: string;
  recipient: string;
  title: string;
  description: string;
  subject: string;
  body: string;
}

const SampleEmailsPage: React.FC = () => {
  const emailTemplates: EmailTemplate[] = [
    {
      id: 'governor',
      recipient: 'admr-chd@nic.in',
      title: 'Email to Chandigarh Governor',
      description: 'A formal request to the Governor of Chandigarh to address animal welfare concerns at SPCA.',
      subject: 'Urgent Request to Address Animal Welfare Issues at SPCA Chandigarh',
      body: `Dear Sir/Madam,

I am writing to bring to your attention the serious concerns regarding animal welfare at the SPCA Chandigarh shelter. As documented on spca.wtf and through other public sources, there appear to be significant issues that need immediate attention:

1. Documented evidence indicates a mortality rate of approximately 47% (6,383 animals) between January 2019 and September 2021.
2. Severe overcrowding in kennels creating unsanitary and stressful conditions for animals.
3. Inadequate veterinary care due to staffing shortages and resource constraints.

As the administrative head of Chandigarh, your intervention is crucial to ensure proper governance and accountability at SPCA Chandigarh. I respectfully request the following actions:

1. A formal investigation into the reported issues at SPCA Chandigarh.
2. Implementation of proper oversight mechanisms.
3. Ensuring adequate resources are allocated for animal care.

This matter requires urgent attention as it concerns the welfare of thousands of vulnerable animals in our community.

Thank you for your consideration. I look forward to seeing positive changes in this important animal welfare institution.

Sincerely,
[Your Name]`,
    },
    {
      id: 'commissioner',
      recipient: 'comm-mcc-chd@nic.in',
      title: 'Email to Municipal Commissioner',
      description: 'A request to the Municipal Commissioner to improve SPCA administration and facilities.',
      subject: 'Request for Intervention: Improving SPCA Chandigarh Operations',
      body: `Dear Sir/Madam,

I am writing to express my concern regarding the operations and animal care standards at SPCA Chandigarh, which falls under the purview of the Municipal Corporation.

Based on documented evidence available at spca.wtf, there appear to be several critical issues requiring immediate attention:

1. Inadequate infrastructure and maintenance of animal housing facilities.
2. Apparent lack of proper medical protocols leading to concerning mortality rates.
3. Insufficient staffing and resource allocation for proper animal care.

As Municipal Commissioner, your intervention could significantly improve the situation through:

1. Conducting an audit of the SPCA's current operations and facilities.
2. Establishing a committee to develop and implement improved animal care protocols.
3. Increasing transparency in the management of funds allocated to animal welfare.
4. Setting up regular inspections to ensure compliance with animal welfare standards.

These issues impact not just animal welfare but also public health and the city's commitment to compassionate governance.

I respectfully request your prompt attention to these matters. The animals of Chandigarh deserve better care and protection.

Sincerely,
[Your Name]`,
    },
    {
      id: 'maneka',
      recipient: 'gandhim@nic.in',
      title: 'Email to Maneka Gandhi',
      description: 'A request to animal welfare advocate and former minister Maneka Gandhi for support.',
      subject: 'Seeking Support for SPCA Chandigarh Animal Welfare Crisis',
      body: `Respected Smt. Maneka Gandhi,

I am writing to seek your valuable support and intervention regarding serious animal welfare concerns at SPCA Chandigarh.

As a prominent advocate for animal rights and welfare in India, your influence could be pivotal in addressing the following documented issues:

1. RTI responses reveal that 47% of animals (6,383) brought to the shelter between January 2019 and September 2021 died during treatment.
2. Severe overcrowding in kennels.
3. Inadequate veterinary care and oversight.
4. Apparent mismanagement of funds and resources.

These issues have been extensively documented at spca.wtf, with supporting evidence including RTI responses, photographs, and official communications.

Given your extensive experience with animal welfare organizations and your influence in policy matters, your intervention could:

1. Bring national attention to this local issue.
2. Provide expert guidance on implementing proper animal care standards.
3. Help establish accountability mechanisms.

I humbly request your support in any capacity possible - whether through direct communication with local authorities, public statements, or guidance to local animal welfare advocates.

Thank you for your consideration and for your lifelong dedication to animal welfare in India.

Respectfully,
[Your Name]`,
    },
  ];

  const handleDownloadDocx = (template: EmailTemplate) => {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: `To: ${template.recipient}`,
            style: "Heading2"
          }),
          new Paragraph({
            text: `Subject: ${template.subject}`,
            style: "Heading2"
          }),
          new Paragraph({ text: ' ' }), // Spacer
          ...template.body.split('\n').map(line => new Paragraph({ text: line })),
        ],
      }],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, `SPCA_Email_Template_${template.id}.docx`);
    });
  };

  return (
    <>
      <Head>
        <title>Sample Email Templates | SPCA.wtf</title>
        <meta name="description" content="Pre-drafted email templates to help you advocate for better animal welfare at SPCA Chandigarh. Download and customize these templates to contact officials." />
      </Head>

      <div className="py-12 md:py-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/#how-to-help" className="inline-flex items-center text-gray-600 hover:text-primary transition-colors">
              <FiArrowLeft className="mr-2" /> Back to How You Can Help
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2">Sample Email Templates</h1>
            <p className="text-lg text-gray-600 mb-6">
              Use these pre-drafted emails to contact officials about SPCA Chandigarh issues. Download, customize with your information, and send.
            </p>
          </div>

          <div className="space-y-6">
            {emailTemplates.map((template) => (
              <div key={template.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{template.title}</h2>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-4">
                    <div className="mb-2">
                      <span className="font-medium text-gray-700">To:</span> {template.recipient}
                    </div>
                    <div className="mb-2">
                      <span className="font-medium text-gray-700">Subject:</span> {template.subject}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-[300px] overflow-y-auto whitespace-pre-line text-gray-700 text-sm">
                    {template.body}
                  </div>
                  
                  <button
                    onClick={() => handleDownloadDocx(template)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <FiDownload className="mr-2" />
                    Download as Word Document
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-800 mb-3">Tips for Effective Communication</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Personalize the template by adding your name and any personal observations.</li>
              <li>Keep your tone respectful but firm in your concerns.</li>
              <li>Add specific details if you have first-hand knowledge of issues.</li>
              <li>Follow up if you don't receive a response within 2 weeks.</li>
              <li>Forward responses to <a href="mailto:info@spca.wtf" className="underline">info@spca.wtf</a> to help track official actions.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleEmailsPage; 