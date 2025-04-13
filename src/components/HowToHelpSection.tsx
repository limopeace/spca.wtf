import React, { useState } from 'react';
import Link from 'next/link';
import { FiShare2, FiSend, FiMail, FiAlertCircle, FiGift, FiPhone, FiDownload, FiChevronDown, FiChevronUp, FiExternalLink, FiBriefcase, FiHeart } from 'react-icons/fi';
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

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

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
            <li>Need help drafting? <Link href="/sample-emails" className="text-primary hover:underline">Download Sample Emails</Link></li>
          </ul>
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
    {
      id: 'complaint',
      title: 'File an Official Complaint',
      icon: FiMail,
      content: (
        <ComplaintSender
          defaultRecipient="gandhim@nic.in"
          ccRecipients={['admr-chd@nic.in', 'comm-mcc-chd@nic.in', 'AsharM@petaindia.org']} 
          subjectTemplate="Urgent Complaint Regarding Animal Welfare Issues at SPCA Chandigarh"
          bodyTemplate={complaintBodyTemplate}
        />
      ),
    },
    {
      id: 'legal',
      title: 'Support Upcoming Legal Action',
      icon: FiBriefcase,
      content: (
        <div className="space-y-4 text-gray-700">
          <p className="font-medium">We are preparing to file a petition in court soon to compel systemic changes at SPCA Chandigarh.</p>
          <p>This public initiative requires significant effort and resources, especially legal fees. We plan to crowdfund this effort through a partner NGO shortly.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Join the Petition:</span> Email us at <a href="mailto:info@spca.wtf" className="text-primary hover:underline">info@spca.wtf</a> to express your interest in joining or supporting the legal petition.
            </li>
            <li>
              <span className="font-semibold">Legal Professionals:</span> If you are a lawyer willing to offer pro-bono assistance or advice, please reach out to <a href="mailto:info@spca.wtf" className="text-primary hover:underline">info@spca.wtf</a>. Your expertise would be invaluable.
            </li>
            <li>
              <span className="font-semibold">Crowdfunding:</span> Stay tuned for details on how to contribute financially once the crowdfunding campaign is launched.
            </li>
          </ul>
          <p>Your support in this crucial next step is vital!</p>
        </div>
      ),
    },
  ];

  return (
    <section id="how-to-help" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How You Can Help</h2>
          <p className="text-lg text-gray-600">Your action can make a difference. Here are concrete steps:</p>
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