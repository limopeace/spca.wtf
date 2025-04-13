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

I am writing as a concerned citizen to demand immediate administrative intervention regarding the deplorable situation at the SPCA Chandigarh shelter. Substantial evidence documented publicly (available at spca.wtf) demonstrates severe systemic failures impacting animal welfare, requiring your urgent attention and executive action.

The current state of SPCA Chandigarh represents a profound failure of ethical governance and oversight. Specific areas of grave concern include:

1. **Catastrophic Mortality Rates:** Official records previously indicated mortality rates reaching as high as 47%, representing thousands of animal deaths. This unprecedented rate cannot be explained by natural causes and points directly to severe deficiencies in care protocols, disease management, and veterinary oversight. Animals are reportedly dying in unsanitary, overcrowded conditions without adequate medical attention.

2. **Inhumane Living Conditions:** Documented evidence shows animals housed in severely overcrowded kennels with inadequate space, ventilation, and sanitation. Multiple animals are often crammed into spaces designed for fewer, with accumulated excrement, inadequate drainage, and limited protection from elements. These conditions violate basic animal welfare standards and likely constitute legally actionable neglect.

3. **Medical Neglect:** Reports indicate critically inadequate veterinary staffing and medical protocols. Animals with treatable conditions often receive delayed care or no treatment whatsoever. The veterinary infrastructure appears woefully inadequate for the volume of animals, with shortages of essential medicines, equipment, and qualified personnel.

4. **Systemic Mismanagement:** There appears to be a pattern of financial irregularities, negligent record-keeping, and an institutional culture that has normalized substandard care. The persistent nature of these issues suggests entrenched systemic problems rather than isolated incidents.

As the highest administrative authority in Chandigarh, your office must take immediate and decisive action. I formally request:

1. **Immediate Formation of an Independent Investigative Committee:** This multi-disciplinary committee should include:
   - Senior veterinary experts with no prior association with SPCA Chandigarh
   - Financial auditors to trace the allocation and utilization of funds
   - Legal experts specializing in animal welfare law
   - Representatives from reputable animal welfare organizations
   
2. **Urgent Staff Accountability Measures:**
   - Immediate suspension and investigation of the veterinary staff demonstrably responsible for negligent care
   - Comprehensive assessment of all medical protocols and staffing adequacy
   - Review of hiring practices and qualifications verification for medical personnel

3. **Transparent Public Engagement:**
   - Establishment of mandatory monthly public meetings with SPCA administration
   - Publication of complete mortality statistics, medical protocols, and financial expenditures
   - Creation of a citizen oversight committee with regular access to facilities

4. **Formal Inquiry into Administrative Accountability:**
   - Full investigation into which public servants were responsible for oversight failures
   - Determination of whether criminal negligence charges are warranted
   - Examination of potential dereliction of duty by administrative officials

I remind you that failure to address these issues may constitute a violation of the Prevention of Cruelty to Animals Act and other applicable legislation. The situation at SPCA Chandigarh cannot be allowed to continue, as it represents both an ethical failure and potentially criminal neglect of duties by public officials.

I await your substantive response detailing the specific measures your office will implement to address this crisis of governance.

Respectfully,
A Concerned Citizen of Chandigarh
[Optional: Your Name/Contact]`,
    },
    {
      id: 'commissioner',
      recipient: 'comm-mcc-chd@nic.in',
      title: 'Email to Municipal Commissioner',
      description: 'A demand for the Municipal Commissioner to enforce accountability and transform SPCA operations with specific action items.',
      subject: 'Demand for Immediate Intervention: Critical Failures at SPCA Chandigarh Require Municipal Action',
      body: `Dear Municipal Commissioner,

I am writing to demand immediate intervention regarding the deeply troubling conditions at SPCA Chandigarh, which falls directly under municipal oversight and receives significant public funding through your office. Documentation available at spca.wtf reveals multiple areas requiring urgent municipal response.

The Municipal Corporation holds direct responsibility for ensuring SPCA's proper functioning, as it is both a significant funder and the administrative authority with oversight powers. The current situation demonstrates a profound failure of municipal governance that must be addressed immediately. Specific concerns include:

1. **Facility Infrastructure Collapse:**
   - Kennel facilities reportedly lack basic drainage, resulting in animals standing in accumulated excrement
   - Broken fencing and inadequate containment creating unsafe conditions for animals and staff
   - Deteriorated roofing exposing animals to extreme weather conditions
   - Non-functional quarantine facilities contributing to disease spread
   - Inadequate water supply and waste management systems creating unsanitary conditions

2. **Operational Dysfunction:**
   - Critical understaffing across essential positions, particularly veterinary and animal care personnel
   - Absence of standardized intake, treatment, and care protocols
   - Negligent record-keeping making it impossible to track individual animal care
   - Reports of animals receiving no medical assessment for days after intake
   - Alarming incidence of preventable diseases due to poor vaccination and prophylactic care

3. **Financial Mismanagement:**
   - Questions surrounding appropriate utilization of municipal grants
   - Apparent prioritization of administrative expenses over direct animal care
   - Inadequate expenditure on essential medicines and supplies
   - Reports of funds designated for facility improvements being diverted or unutilized

4. **Catastrophic Animal Welfare Outcomes:**
   - Previously documented mortality rates far exceeding acceptable standards
   - Reports of untreated injuries and illnesses
   - Chronic stress and suffering due to overcrowding and inadequate care
   - Systemic failure to meet basic animal welfare standards

As Municipal Commissioner, you have both the authority and responsibility to take immediate corrective action. I formally request the following specific interventions:

1. **Immediate Infrastructure Assessment and Emergency Repairs:**
   - Dispatch municipal engineers within 72 hours to assess critical infrastructure deficiencies
   - Allocate emergency funds for urgent repairs to drainage, containment, and sanitation systems
   - Engage municipal sanitation services to address immediate hygiene concerns

2. **Staff Accountability and Reconstitution:**
   - Immediate suspension and investigation of veterinary staff demonstrably negligent in duties
   - Appointment of qualified interim veterinary team from municipal resources
   - Comprehensive review of all hiring practices and staff qualifications
   - Implementation of mandatory training programs for all animal care staff

3. **Financial Accountability Measures:**
   - Freeze all discretionary spending pending comprehensive audit
   - Detailed accounting of all municipal funds allocated to SPCA over the past three years
   - Implementation of transparent financial reporting mechanisms
   - Development of line-item budgeting with specific allocations for animal care essentials

4. **Transparency and Public Oversight:**
   - Establishment of monthly public meetings with mandatory attendance by senior SPCA staff
   - Publication of comprehensive monthly statistics on intake, treatment, and outcomes
   - Formation of a citizen oversight committee with regular facility access
   - Development of clear performance metrics with consequences for non-compliance

5. **Administrative Accountability:**
   - Formal inquiry into which municipal officials failed in their oversight duties
   - Investigation into potential violations of municipal regulations and bylaws
   - Establishment of clear lines of responsibility for ongoing SPCA oversight

The current situation at SPCA Chandigarh reflects poorly on municipal governance and requires immediate intervention. I urge you to treat this as an urgent municipal priority requiring your personal attention.

Please respond with a specific timeline for implementing these measures. The animals of Chandigarh cannot continue to suffer due to administrative inaction.

Sincerely,
A Concerned Resident
[Optional: Your Name/Contact]`,
    },
    {
      id: 'maneka',
      recipient: 'gandhim@nic.in',
      title: 'Email to Smt. Maneka Gandhi',
      description: 'A detailed request for intervention from renowned animal welfare advocate Smt. Maneka Gandhi with specific concerns and requests.',
      subject: 'Urgent Appeal for Intervention: Systemic Animal Welfare Crisis at SPCA Chandigarh',
      body: `Respected Smt. Maneka Gandhi,

I am writing to you with deep concern regarding the ongoing crisis at SPCA Chandigarh, seeking your invaluable intervention as India's foremost animal welfare advocate. The situation demands attention from someone with your authority, expertise, and commitment to animal welfare.

As documented comprehensively on spca.wtf, the conditions at SPCA Chandigarh appear to constitute a systemic failure of animal welfare governance. Your decades of experience in animal welfare reform make you uniquely positioned to help address this crisis. The specific issues include:

1. **Catastrophic Animal Care Failures:**
   - Historical mortality rates of approximately 47% represent thousands of preventable animal deaths
   - Documented cases of animals with treatable conditions receiving delayed or no treatment
   - Reports of severe, untreated mange, infected wounds, and preventable diseases
   - Critical lack of isolation protocols resulting in disease transmission among shelter populations
   - Inadequate nutrition and hydration protocols, particularly for vulnerable animals

2. **Institutional Governance Breakdown:**
   - Apparent lack of qualified veterinary oversight and professional standards
   - Absence of comprehensive intake, treatment, and outcome protocols
   - Insufficient accountability mechanisms for medical staff and administration
   - Reports of resistant attitude toward implementing welfare improvements
   - Lack of transparency in operations and outcome reporting

3. **Facility Inadequacies:**
   - Severe overcrowding with animals housed in spaces far below minimum welfare standards
   - Insufficient sanitation infrastructure leading to chronically unsanitary conditions
   - Inadequate protection from weather extremes and environmental stressors
   - Reported absence of proper enrichment and exercise provisions
   - Substandard medical facilities lacking essential equipment and supplies

4. **Systemic Oversight Failures:**
   - Local authorities appear to have failed in their statutory duty to ensure proper shelter operations
   - Reported resistance to external assessment and criticism
   - Lack of implementation of standard operating procedures recommended by national guidelines
   - Unclear lines of accountability and responsibility among governing authorities

Your intervention could be transformative in several ways:

1. **Expert Assessment and Recommendation:**
   - Your organization could provide expert assessment of current conditions and protocols
   - Development of specific, implementable recommendations for immediate and long-term reforms
   - Provision of standard operating procedure templates based on best practices

2. **Advocacy with Key Officials:**
   - Your direct communication with local authorities would lend crucial weight to reform demands
   - Potential to facilitate dialogue between citizen advocates and resistant officials
   - Ability to elevate the issue to higher administrative levels if local response is inadequate

3. **Implementation Support:**
   - Guidance on establishing proper oversight committees with appropriate expertise
   - Assistance in identifying qualified veterinary and administrative personnel
   - Sharing of proven protocols from successfully reformed shelters across India
   - Support for establishing transparent public engagement and reporting mechanisms

4. **Accountability Measures:**
   - Advocacy for formal investigation into officials responsible for oversight failures
   - Support for necessary administrative or structural changes to governance
   - Guidance on implementing proper public accountability mechanisms

We understand that this represents a significant request on your time and resources, but the scale of suffering at SPCA Chandigarh appears to warrant intervention at the highest levels of animal welfare advocacy.

I would be grateful for any form of support you might provide, whether through direct intervention, delegation to your organization's representatives, or guidance to local advocates.

With profound respect for your lifelong commitment to animal welfare,

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
              <li>Include visual evidence by downloading and attaching images of the shelter conditions from <a href="https://drive.google.com/drive/folders/12yzHCoecLxzM13fxPGfUz0OWCjLHFZG8?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline">this Google Drive folder</a>.</li>
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