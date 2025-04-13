import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiDownload, FiArrowLeft } from 'react-icons/fi'
import { saveAs } from 'file-saver'
import { Packer, Document, Paragraph } from 'docx'

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
      description: 'A formal request to the Governor of Chandigarh demanding oversight and investigation into SPCA Chandigarh.',
      subject: 'Urgent Call for Investigation & Oversight: Systemic Failures at SPCA Chandigarh',
      body: `Honorable Governor,

I am writing as a concerned citizen to demand immediate administrative intervention regarding the alarming situation at the SPCA Chandigarh shelter. Evidence documented publicly (e.g., via spca.wtf) strongly suggests systemic failures impacting animal welfare, requiring your urgent attention.

Key areas of concern include:

1.  **Shockingly High Mortality Rates:** Official records previously indicated mortality rates reaching as high as 47%. This points to severe deficiencies in care, disease management, or veterinary protocols.
2.  **Inhumane Housing Conditions:** Reports and photographic evidence suggest persistent severe overcrowding, inadequate sanitation, and potentially unsafe enclosure conditions, contributing to stress and disease spread.
3.  **Insufficient Veterinary Care:** Concerns exist regarding the availability and quality of veterinary staffing, timely treatment, and appropriate medical protocols for the number of animals housed.
4.  **Lack of Transparency & Accountability:** There appears to be a pattern of insufficient transparency regarding operations, finances, and animal outcomes, hindering public trust and effective oversight.

As the head administrator of Chandigarh, your office holds the ultimate responsibility for ensuring institutions operating within the UT adhere to ethical standards and legal requirements for animal welfare. The current situation appears to represent a significant failure in governance.

I implore you to initiate:

1.  **A Comprehensive, Independent Investigation:** To thoroughly examine the shelter's operations, finances, veterinary practices, and adherence to animal welfare laws (like the Prevention of Cruelty to Animals Act).
2.  **Immediate Corrective Actions:** Based on findings, enforce necessary changes to leadership, staffing, protocols, and facilities.
3.  **Establishment of Robust Oversight:** Implement a permanent, transparent oversight mechanism involving qualified veterinarians and independent animal welfare experts.

Failure to act decisively perpetuates animal suffering and undermines public confidence. The citizens and animals of Chandigarh deserve an SPCA that operates with compassion, competence, and transparency.

I await information on the concrete steps your office will take to address this crisis.

Sincerely,
A Concerned Citizen of Chandigarh
[Optional: Your Name/Contact]`,
    },
    {
      id: 'commissioner',
      recipient: 'comm-mcc-chd@nic.in',
      title: 'Email to Municipal Commissioner',
      description: 'A request demanding the Municipal Commissioner enforce accountability and improve SPCA infrastructure/operations.',
      subject: 'Demand for Accountability: Operational & Infrastructure Failures at SPCA Chandigarh',
      body: `Dear Municipal Commissioner,

I am writing to express profound concern regarding the operational management and infrastructure conditions at SPCA Chandigarh, an institution significantly reliant on Municipal Corporation oversight and resources.

Publicly available information (e.g., via spca.wtf) highlights critical failures demanding your immediate attention:

1.  **Dilapidated Infrastructure:** Reports suggest inadequate maintenance of kennels, drainage issues, and potentially insufficient space, contributing to unsanitary conditions and disease.
2.  **Operational Deficiencies:** Concerns include inadequate staffing levels (both veterinary and support staff), poor record-keeping practices, and a lack of standardized protocols for animal intake, care, and disease control.
3.  **Resource Allocation:** Questions exist regarding the effective utilization of funds allocated by the MC and other sources for direct animal care versus administrative overhead.
4.  **High Mortality & Disease:** The previously reported high mortality figures strongly suggest underlying operational failures in sanitation, quarantine procedures, and veterinary response.

As the Municipal Commissioner, your office has a direct role in ensuring the SPCA operates effectively and utilizes public resources responsibly. The current state appears unacceptable.

I urge the Municipal Corporation to:

1.  **Conduct an Urgent Audit:** Review SPCA's operational procedures, facility maintenance logs, staffing levels, and financial expenditures related to animal care.
2.  **Enforce Compliance:** Ensure the SPCA adheres to all relevant municipal bylaws and national animal welfare standards (PCA Act, ABC Rules).
3.  **Mandate Infrastructure Improvements:** Allocate necessary resources and demand immediate action to repair and upgrade facilities to meet basic humane standards.
4.  **Improve Management Oversight:** Implement stricter reporting requirements and performance metrics for the SPCA management team.

The well-being of animals at the SPCA and the responsible use of municipal resources are at stake. We expect swift action to rectify these failures.

Sincerely,
A Concerned Resident
[Optional: Your Name/Contact]`,
    },
    {
      id: 'maneka',
      recipient: 'gandhim@nic.in',
      title: 'Email to Smt. Maneka Gandhi',
      description: 'A request for intervention and guidance from renowned animal welfare advocate Smt. Maneka Gandhi.',
      subject: 'Urgent Plea for Intervention: Animal Welfare Crisis at SPCA Chandigarh',
      body: `Respected Smt. Maneka Gandhi,

I am writing to you with deep distress regarding the critical situation at the SPCA shelter in Chandigarh, hoping for your invaluable guidance and intervention.

As a leading voice for animal welfare in India, your attention to this matter could be instrumental. Publicly available evidence (collated at spca.wtf and other sources) reveals a deeply troubling picture:

*   **Alarming Mortality Statistics:** Past RTI data indicated nearly half the animals admitted did not survive, suggesting systemic failures in care.
*   **Deplorable Conditions:** Persistent issues of severe overcrowding, poor sanitation, and inadequate veterinary support have been reported.
*   **Systemic Issues:** There are indications of potential mismanagement, lack of standard operating procedures, and insufficient oversight contributing to these problems.
*   **Specific Incidents:** [Optional: Mention a specific incident or timeline event if known, e.g., "Concerns were heightened following the events reported around [Date/Event from timeline.json or complaints.pdf]..."].

We understand the complexities of shelter management, but the scale and persistence of these reported issues point towards a crisis requiring external pressure and expert guidance.

Your intervention could significantly aid efforts to:

1.  **Amplify the Call for Accountability:** Drawing national attention can compel local authorities to act decisively.
2.  **Share Best Practices:** Your expertise could guide the implementation of humane and effective shelter management protocols.
3.  **Advocate for Stronger Oversight:** Support the establishment of independent monitoring mechanisms.

We, the concerned citizens and animal welfare advocates of Chandigarh, are struggling to bring about meaningful change against apparent institutional inertia. Your support, in any form you deem appropriate, would provide immense strength to this cause.

Thank you for your lifelong dedication to animal welfare and for considering this urgent plea.

With deepest respect,
A Concerned Animal Advocate
[Optional: Your Name/Contact]`,
    },
  ];

  const handleDownloadDocx = (template: EmailTemplate) => {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({ text: `To: ${template.recipient}` }),
          new Paragraph({ text: `Subject: ${template.subject}` }),
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