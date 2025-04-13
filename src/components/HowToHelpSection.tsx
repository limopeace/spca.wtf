import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { FiShare2, FiSend, FiMail, FiAlertCircle, FiGift, FiPhone, FiDownload, FiChevronDown, FiChevronUp, FiExternalLink, FiBriefcase, FiHeart, FiCopy, FiCheck } from 'react-icons/fi';
import ComplaintSender from './ComplaintSender'; // Assuming ComplaintSender is in the same directory

interface HelpAction {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

// Helper component for consistent external links
const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-flex items-center text-primary hover:text-red-700 underline decoration-dotted transition-colors duration-200"
  >
    {children}
    <FiExternalLink className="ml-1 h-3 w-3" />
  </a>
);

// Placeholder for the complaint body - This should be refined
const complaintBodyTemplate = `
To the Concerned Authorities,

I am writing to express my deep concern regarding the conditions and operations at the SPCA Chandigarh, based on information presented on SPCA.wtf.

The evidence indicates serious issues including:
- Inadequate veterinary care and potentially high mortality rates.
- Severe overcrowding and poor facility conditions.
- Possible mismanagement of resources intended for animal welfare.

Please investigate these urgent matters and take immediate action to ensure the well-being of the animals under the care of SPCA Chandigarh and uphold transparency in its operations.

I request an update on the steps being taken to address these concerns.

Sincerely,

A Concerned Citizen
(Optional: Add your name/contact below if you wish)
`;

const HowToHelpSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Function to copy email template to clipboard
  const copyToClipboard = (templateId: string, content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopiedTemplate(templateId);
      setTimeout(() => setCopiedTemplate(null), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  // Define Email Templates directly here
  const emailTemplates: EmailTemplate[] = [
    {
      id: 'maneka-meet',
      recipient: 'gandhim@nic.in',
      ccRecipients: ['meet@petaindia.org', 'asharmeet02@gmail.com'],
      title: 'Email to Smt. Maneka Gandhi & Meet Ashar (PETA)',
      description: 'A joint appeal to prominent animal welfare advocates Smt. Maneka Gandhi and Meet Ashar (PETA) requesting intervention and assistance.',
      subject: 'Joint Appeal: Urgent Intervention Needed for SPCA Chandigarh Animal Welfare Crisis',
      body: `Respected Smt. Maneka Gandhi and Shri Meet Ashar,\n\nI am writing to both of you as India's foremost animal welfare advocates to request your urgent intervention in the ongoing crisis at SPCA Chandigarh. The situation documented at spca.wtf reveals systemic animal welfare violations that require the attention and authority that you both uniquely possess.\n\nAs leaders in animal welfare advocacy with significant influence and expertise, your joint intervention could be transformative in addressing the following critical issues:\n\n1. **Severe Medical Neglect:**\n   - Documented evidence shows animals with treatable conditions receiving inadequate or no medical care\n   - Historical mortality rates approximately 47%, far exceeding acceptable standards for animal shelters\n   - Reports of untreated wounds, infections, and preventable diseases spreading through the facility\n   - Inadequate veterinary staffing and apparent lack of proper medical protocols\n\n2. **Inhumane Housing Conditions:**\n   - Extreme overcrowding with multiple animals confined in spaces designed for fewer\n   - Poor sanitation with inadequate waste management systems\n   - Insufficient protection from weather extremes\n   - Lack of proper segregation for sick, injured, or vulnerable animals\n\n3. **Governance and Oversight Failures:**\n   - Apparent lack of professional standards and accountability mechanisms\n   - Local authorities failing to enforce basic animal welfare standards\n   - Resistance to external assessment and recommendations for improvement\n   - Unclear lines of responsibility among governing authorities\n\nYour combined influence could help in several crucial ways:\n\n1. **Immediate Intervention:**\n   - Directing PETA India resources toward an independent investigation\n   - Leveraging your political and administrative connections to ensure proper oversight\n   - Arranging for qualified veterinary assessment of current animal care protocols\n\n2. **Media Attention and Public Awareness:**\n   - Your advocacy would significantly amplify public awareness of these issues\n   - Media coverage following your involvement would create necessary pressure for change\n   - Your public statements would lend crucial credibility to citizen concerns\n\n3. **Administrative Reform:**\n   - Guidance on implementing proper governance structures\n   - Assistance in establishing transparent reporting and accountability mechanisms\n   - Support for developing standard operating procedures aligned with best practices\n\n4. **Legal Interventions:**\n   - Expert assessment on potential violations of animal welfare laws\n   - Guidance on appropriate legal remedies to address systemic failures\n   - Support for citizen advocates seeking legal recourse\n\nI have attached/will attach photographic evidence documenting the conditions. Additional documentation is available at spca.wtf, where comprehensive evidence has been compiled by concerned citizens.\n\nThe animals at SPCA Chandigarh urgently need the advocacy that only influential voices like yours can provide. Your intervention represents perhaps their best hope for meaningful change.\n\nI would be grateful for any form of support you can offer, and am available to provide any additional information you might require.\n\nWith deep respect for your commitment to animal welfare,\n\nA Concerned Citizen\n[Your Name/Contact - Optional]`,
    },
    {
      id: 'governor',
      recipient: 'admr-chd@nic.in',
      title: 'Email to Chandigarh Governor',
      description: 'A formal request to the Governor of Chandigarh demanding oversight and investigation into SPCA Chandigarh.',
      subject: 'Urgent Call for Investigation & Oversight: Systemic Failures at SPCA Chandigarh',
      body: `Honorable Governor,\n\nI am writing as a concerned citizen to demand immediate administrative intervention regarding the deplorable situation at the SPCA Chandigarh shelter. Substantial evidence documented publicly (available at spca.wtf) demonstrates severe systemic failures impacting animal welfare, requiring your urgent attention and executive action.\n\nThe current state of SPCA Chandigarh represents a profound failure of ethical governance and oversight. Specific areas of grave concern include:\n\n1. **Catastrophic Mortality Rates:** Official records previously indicated mortality rates reaching as high as 47%, representing thousands of animal deaths. This unprecedented rate cannot be explained by natural causes and points directly to severe deficiencies in care protocols, disease management, and veterinary oversight. Animals are reportedly dying in unsanitary, overcrowded conditions without adequate medical attention.\n\n2. **Inhumane Living Conditions:** Documented evidence shows animals housed in severely overcrowded kennels with inadequate space, ventilation, and sanitation. Multiple animals are often crammed into spaces designed for fewer, with accumulated excrement, inadequate drainage, and limited protection from elements. These conditions violate basic animal welfare standards and likely constitute legally actionable neglect.\n\n3. **Medical Neglect:** Reports indicate critically inadequate veterinary staffing and medical protocols. Animals with treatable conditions often receive delayed care or no treatment whatsoever. The veterinary infrastructure appears woefully inadequate for the volume of animals, with shortages of essential medicines, equipment, and qualified personnel.\n\n4. **Systemic Mismanagement:** There appears to be a pattern of financial irregularities, negligent record-keeping, and an institutional culture that has normalized substandard care. The persistent nature of these issues suggests entrenched systemic problems rather than isolated incidents.\n\nAs the highest administrative authority in Chandigarh, your office must take immediate and decisive action. I formally request:\n\n1. **Immediate Formation of an Independent Investigative Committee:** This multi-disciplinary committee should include:\n   - Senior veterinary experts with no prior association with SPCA Chandigarh\n   - Financial auditors to trace the allocation and utilization of funds\n   - Legal experts specializing in animal welfare law\n   - Representatives from reputable animal welfare organizations\n   \n2. **Urgent Staff Accountability Measures:**\n   - Immediate suspension and investigation of the veterinary staff demonstrably responsible for negligent care\n   - Comprehensive assessment of all medical protocols and staffing adequacy\n   - Review of hiring practices and qualifications verification for medical personnel\n\n3. **Transparent Public Engagement:**\n   - Establishment of mandatory monthly public meetings with SPCA administration\n   - Publication of complete mortality statistics, medical protocols, and financial expenditures\n   - Creation of a citizen oversight committee with regular access to facilities\n\n4. **Formal Inquiry into Administrative Accountability:**\n   - Full investigation into which public servants were responsible for oversight failures\n   - Determination of whether criminal negligence charges are warranted\n   - Examination of potential dereliction of duty by administrative officials\n\nI remind you that failure to address these issues may constitute a violation of the Prevention of Cruelty to Animals Act and other applicable legislation. The situation at SPCA Chandigarh cannot be allowed to continue, as it represents both an ethical failure and potentially criminal neglect of duties by public officials.\n\nI await your substantive response detailing the specific measures your office will implement to address this crisis of governance.\n\nRespectfully,\nA Concerned Citizen of Chandigarh\n[Optional: Your Name/Contact]`,
    },
    {
      id: 'commissioner',
      recipient: 'comm-mcc-chd@nic.in',
      title: 'Email to Municipal Commissioner',
      description: 'A demand for the Municipal Commissioner to enforce accountability and transform SPCA operations with specific action items.',
      subject: 'Demand for Immediate Intervention: Critical Failures at SPCA Chandigarh Require Municipal Action',
      body: `Dear Municipal Commissioner,\n\nI am writing to demand immediate intervention regarding the deeply troubling conditions at SPCA Chandigarh, which falls directly under municipal oversight and receives significant public funding through your office. Documentation available at spca.wtf reveals multiple areas requiring urgent municipal response.\n\nThe Municipal Corporation holds direct responsibility for ensuring SPCA's proper functioning, as it is both a significant funder and the administrative authority with oversight powers. The current situation demonstrates a profound failure of municipal governance that must be addressed immediately. Specific concerns include:\n\n1. **Facility Infrastructure Collapse:**\n   - Kennel facilities reportedly lack basic drainage, resulting in animals standing in accumulated excrement\n   - Broken fencing and inadequate containment creating unsafe conditions for animals and staff\n   - Deteriorated roofing exposing animals to extreme weather conditions\n   - Non-functional quarantine facilities contributing to disease spread\n   - Inadequate water supply and waste management systems creating unsanitary conditions\n\n2. **Operational Dysfunction:**\n   - Critical understaffing across essential positions, particularly veterinary and animal care personnel\n   - Absence of standardized intake, treatment, and care protocols\n   - Negligent record-keeping making it impossible to track individual animal care\n   - Reports of animals receiving no medical assessment for days after intake\n   - Alarming incidence of preventable diseases due to poor vaccination and prophylactic care\n\n3. **Financial Mismanagement:**\n   - Questions surrounding appropriate utilization of municipal grants\n   - Apparent prioritization of administrative expenses over direct animal care\n   - Inadequate expenditure on essential medicines and supplies\n   - Reports of funds designated for facility improvements being diverted or unutilized\n\n4. **Catastrophic Animal Welfare Outcomes:**\n   - Previously documented mortality rates far exceeding acceptable standards\n   - Reports of untreated injuries and illnesses\n   - Chronic stress and suffering due to overcrowding and inadequate care\n   - Systemic failure to meet basic animal welfare standards\n\nAs Municipal Commissioner, you have both the authority and responsibility to take immediate corrective action. I formally request the following specific interventions:\n\n1. **Immediate Infrastructure Assessment and Emergency Repairs:**\n   - Dispatch municipal engineers within 72 hours to assess critical infrastructure deficiencies\n   - Allocate emergency funds for urgent repairs to drainage, containment, and sanitation systems\n   - Engage municipal sanitation services to address immediate hygiene concerns\n\n2. **Staff Accountability and Reconstitution:**\n   - Immediate suspension and investigation of veterinary staff demonstrably negligent in duties\n   - Appointment of qualified interim veterinary team from municipal resources\n   - Comprehensive review of all hiring practices and staff qualifications\n   - Implementation of mandatory training programs for all animal care staff\n\n3. **Financial Accountability Measures:**\n   - Freeze all discretionary spending pending comprehensive audit\n   - Detailed accounting of all municipal funds allocated to SPCA over the past three years\n   - Implementation of transparent financial reporting mechanisms\n   - Development of line-item budgeting with specific allocations for animal care essentials\n\n4. **Transparency and Public Oversight:**\n   - Establishment of monthly public meetings with mandatory attendance by senior SPCA staff\n   - Publication of comprehensive monthly statistics on intake, treatment, and outcomes\n   - Formation of a citizen oversight committee with regular facility access\n   - Development of clear performance metrics with consequences for non-compliance\n\n5. **Administrative Accountability:**\n   - Formal inquiry into which municipal officials failed in their oversight duties\n   - Investigation into potential violations of municipal regulations and bylaws\n   - Establishment of clear lines of responsibility for ongoing SPCA oversight\n\nThe current situation at SPCA Chandigarh reflects poorly on municipal governance and requires immediate intervention. I urge you to treat this as an urgent municipal priority requiring your personal attention.\n\nPlease respond with a specific timeline for implementing these measures. The animals of Chandigarh cannot continue to suffer due to administrative inaction.\n\nSincerely,\nA Concerned Resident\n[Optional: Your Name/Contact]`,
    },
    {
      id: 'maneka',
      recipient: 'gandhim@nic.in',
      title: 'Email to Smt. Maneka Gandhi',
      description: 'A detailed request for intervention from renowned animal welfare advocate Smt. Maneka Gandhi with specific concerns and requests.',
      subject: 'Urgent Appeal for Intervention: Systemic Animal Welfare Crisis at SPCA Chandigarh',
      body: `Respected Smt. Maneka Gandhi,\n\nI am writing to you with deep concern regarding the ongoing crisis at SPCA Chandigarh, seeking your invaluable intervention as India's foremost animal welfare advocate. The situation demands attention from someone with your authority, expertise, and commitment to animal welfare.\n\nAs documented comprehensively on spca.wtf, the conditions at SPCA Chandigarh appear to constitute a systemic failure of animal welfare governance. Your decades of experience in animal welfare reform make you uniquely positioned to help address this crisis. The specific issues include:\n\n1. **Catastrophic Animal Care Failures:**\n   - Historical mortality rates of approximately 47% represent thousands of preventable animal deaths\n   - Documented cases of animals with treatable conditions receiving delayed or no treatment\n   - Reports of severe, untreated mange, infected wounds, and preventable diseases\n   - Critical lack of isolation protocols resulting in disease transmission among shelter populations\n   - Inadequate nutrition and hydration protocols, particularly for vulnerable animals\n\n2. **Institutional Governance Breakdown:**\n   - Apparent lack of qualified veterinary oversight and professional standards\n   - Absence of comprehensive intake, treatment, and outcome protocols\n   - Insufficient accountability mechanisms for medical staff and administration\n   - Reports of resistant attitude toward implementing welfare improvements\n   - Lack of transparency in operations and outcome reporting\n\n3. **Facility Inadequacies:**\n   - Severe overcrowding with animals housed in spaces far below minimum welfare standards\n   - Insufficient sanitation infrastructure leading to chronically unsanitary conditions\n   - Inadequate protection from weather extremes and environmental stressors\n   - Reported absence of proper enrichment and exercise provisions\n   - Substandard medical facilities lacking essential equipment and supplies\n\n4. **Systemic Oversight Failures:**\n   - Local authorities appear to have failed in their statutory duty to ensure proper shelter operations\n   - Reported resistance to external assessment and criticism\n   - Lack of implementation of standard operating procedures recommended by national guidelines\n   - Unclear lines of accountability and responsibility among governing authorities\n\nYour intervention could be transformative in several ways:\n\n1. **Expert Assessment and Recommendation:**\n   - Your organization could provide expert assessment of current conditions and protocols\n   - Development of specific, implementable recommendations for immediate and long-term reforms\n   - Provision of standard operating procedure templates based on best practices\n\n2. **Advocacy with Key Officials:**\n   - Your direct communication with local authorities would lend crucial weight to reform demands\n   - Potential to facilitate dialogue between citizen advocates and resistant officials\n   - Ability to elevate the issue to higher administrative levels if local response is inadequate\n\n3. **Implementation Support:**\n   - Guidance on establishing proper oversight committees with appropriate expertise\n   - Assistance in identifying qualified veterinary and administrative personnel\n   - Sharing of proven protocols from successfully reformed shelters across India\n   - Support for establishing transparent public engagement and reporting mechanisms\n\n4. **Accountability Measures:**\n   - Advocacy for formal investigation into officials responsible for oversight failures\n   - Support for necessary administrative or structural changes to governance\n   - Guidance on implementing proper public accountability mechanisms\n\nWe understand that this represents a significant request on your time and resources, but the scale of suffering at SPCA Chandigarh appears to warrant intervention at the highest levels of animal welfare advocacy.\n\nI would be grateful for any form of support you might provide, whether through direct intervention, delegation to your organization's representatives, or guidance to local advocates.\n\nWith profound respect for your lifelong commitment to animal welfare,\n\nA Concerned Animal Advocate\n[Optional: Your Name/Contact]`,
    },
  ];

  // Define Email Template type (if not already defined globally)
  interface EmailTemplate {
    id: string;
    recipient: string;
    ccRecipients?: string[];
    title: string;
    description: string;
    subject: string;
    body: string;
  }

  const googleDriveLink = "https://drive.google.com/drive/folders/12yzHCoecLxzM13fxPGfUz0OWCjLHFZG8?usp=sharing";
  
  const helpActions: HelpAction[] = [
    {
      id: 'share',
      title: 'Spread the Word & Raise Awareness',
      icon: FiShare2,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>Sharing information is crucial. Let more people know!</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Share this website: <ExtLink href="https://spca.wtf">spca.wtf</ExtLink></li>
            <li>Share the video documentary: <ExtLink href="https://www.youtube.com/watch?v=XxhV9bmgInM">Watch on YouTube</ExtLink></li>
            <li>Inform Media/Press contacts you may have.</li>
            <li>
              Use Social Media (Tag officials):
              <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                <li>Meet Ashar (PETA): <ExtLink href="https://x.com/asharmeet02">@asharmeet02</ExtLink></li>
                <li>Maneka Gandhi: <ExtLink href="https://x.com/Manekagandhibjp">@Manekagandhibjp</ExtLink></li>
                <li>PMO India: <ExtLink href="https://x.com/PMOIndia">@PMOIndia</ExtLink> or <ExtLink href="https://twitter.com/narendramodi">@narendramodi</ExtLink></li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'contact',
      title: 'Contact Officials & Demand Action',
      icon: FiSend,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>Reach out directly to authorities to demand accountability:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Email Maneka Gandhi: <a href="mailto:gandhim@nic.in" className="text-primary hover:underline">gandhim@nic.in</a></li>
            <li>Email Chandigarh Governor: <a href="mailto:admr-chd@nic.in" className="text-primary hover:underline">admr-chd@nic.in</a></li>
            <li>Email MC Commissioner: <a href="mailto:comm-mcc-chd@nic.in" className="text-primary hover:underline">comm-mcc-chd@nic.in</a></li>
            <li>Involve PM Office: File grievances/RTIs at <ExtLink href="https://pgportal.gov.in/">pgportal.gov.in</ExtLink></li>
            <li>You can find sample email templates in the section below.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'sample-emails',
      title: 'Use Sample Email Templates',
      icon: FiMail,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">Use these pre-drafted emails as a starting point. Remember to personalize them!</p>
          {emailTemplates.map((template) => (
            <div key={template.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{template.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="font-medium mr-1">To:</span> 
                    <span>{template.recipient}</span>
                  </div>
                  {template.ccRecipients && (
                    <div className="flex items-center">
                      <span className="font-medium mr-1">CC:</span> 
                      <span>{template.ccRecipients.join(', ')}</span>
                    </div>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  <span className="font-medium">Subject:</span> {template.subject}
                </p>
                <div className="bg-gray-50 p-2 sm:p-3 rounded-md mb-3 max-h-[500px] sm:max-h-[600px] overflow-y-auto whitespace-pre-line text-gray-700 text-xs">
                  {template.body}
                </div>
                <div className="mt-3 p-2 sm:p-3 bg-blue-50 border border-blue-100 rounded-md text-xs text-blue-700">
                  <p className="font-medium mb-1">Note:</p>
                  <p>Consider attaching photographic evidence. Images of shelter conditions can be downloaded from:</p>
                  <p className="break-words"><ExtLink href={googleDriveLink}>{googleDriveLink}</ExtLink></p>
                  <p className="mt-1">You can copy the link text: <code className="bg-blue-100 px-1 rounded break-all">{googleDriveLink}</code></p>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`mailto:${template.recipient}${template.ccRecipients ? '?cc=' + template.ccRecipients.join(',') : ''}${template.ccRecipients ? '&subject=' : '?subject='}${encodeURIComponent(template.subject)}&body=${encodeURIComponent(template.body + '\n\n[Optional: Add your name/contact and mention attached images from: ' + googleDriveLink + ']')}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full sm:w-auto"
                  >
                    <FiSend className="mr-1.5 h-3 w-3" />
                    Open in Email App
                  </a>
                  <button
                    onClick={() => copyToClipboard(
                      template.id, 
                      `To: ${template.recipient}${template.ccRecipients ? '\nCC: ' + template.ccRecipients.join(', ') : ''}\nSubject: ${template.subject}\n\n${template.body}\n\n[Optional: Add your name/contact and mention attached images from: ${googleDriveLink}]`
                    )}
                    className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full sm:w-auto transition-all duration-200"
                  >
                    {copiedTemplate === template.id ? (
                      <>
                        <FiCheck className="mr-1.5 h-3 w-3 text-green-500" />
                        <span className="text-green-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="mr-1.5 h-3 w-3" />
                        Copy Email
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'donate',
      title: 'Donate (In-Kind Preferred)',
      icon: FiGift,
      content: (
        <div className="space-y-4 text-gray-700">
          <p className="font-medium">Important Note on Donations:</p>
          <p>While you can donate cash directly at the SPCA, past issues raise concerns about fund utilization. We recommend donating items <span className="font-semibold">in-kind</span> to ensure they directly benefit the animals.</p>
          <p className="font-medium">How to Donate Medicines:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Contact SPCA's usual supplier, Ramal Pet Store: <ExtLink href="https://g.co/kgs/RmFzszT">View on Map</ExtLink></li>
            <li>Ask them to coordinate with the SPCA supervisor for required medicines.</li>
            <li>Pay the store directly for the medicines.</li>
            <li>Request acknowledgment from the supervisor via WhatsApp (<a href="tel:+919877264370" className="text-primary hover:underline">+91 98772 64370</a> or <a href="tel:+916239587317" className="text-primary hover:underline">+91 62395 87317</a>) or Landline (<a href="tel:01722696450" className="text-primary hover:underline">0172 2696450</a>).</li>
          </ul>
          <p className="font-medium">Other In-Kind Donations:</p>
          <p>Consider donating specific food items for different animals (birds, cats, dogs, puppies). Coordinate delivery/needs with the supervisor numbers above.</p>
        </div>
      ),
    },
  ];

  return (
    <section id="how-to-help" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-primary bg-opacity-20 text-primary rounded-full text-sm font-medium mb-3">
            Make An Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How You Can Help</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Your action can make a real difference in the lives of these animals. Here are concrete steps you can take today:</p>
          
          <div className="flex justify-center mt-8 mb-2">
            <div className="flex items-center space-x-2 text-primary bg-primary bg-opacity-10 px-4 py-2 rounded-full">
              <FiHeart className="w-5 h-5" />
              <span className="font-medium">Every action counts, no matter how small!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
            <p className="text-center text-gray-700">
              Select any of the options below to expand and learn how you can contribute.
              The more people who participate, the stronger our collective voice becomes.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {helpActions.map((action) => (
            <div key={action.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
              <button
                onClick={() => toggleAccordion(action.id)}
                className="w-full flex justify-between items-center p-4 md:p-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50 transition-colors duration-200 hover:bg-gray-50"
                aria-expanded={openAccordion === action.id}
                aria-controls={`content-${action.id}`}
              >
                <span className="flex items-center">
                  <action.icon className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{action.title}</span>
                </span>
                {openAccordion === action.id ? (
                  <FiChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <div
                id={`content-${action.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === action.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={openAccordion !== action.id}
              >
                <div className="p-4 md:p-6 border-t border-gray-200">
                  {action.content}
                </div>
              </div>
            </div>
          ))}
        </div>
         <p className="text-center text-gray-500 text-sm mt-8">
           Don't see what you're looking for? Check our <Link href="/faq" className="text-primary hover:underline">FAQ</Link> or <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>.
         </p>
      </div>
    </section>
  );
};

export default HowToHelpSection; 