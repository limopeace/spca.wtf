import React, { useState } from 'react';
import { Packer, Document, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver'; // Assuming file-saver is available or install it: npm install file-saver @types/file-saver
import { FiMail, FiDownload, FiAlertCircle } from 'react-icons/fi';

interface ComplaintSenderProps {
  defaultRecipient: string;
  ccRecipients?: string[];
  subjectTemplate: string;
  bodyTemplate: string;
}

const ComplaintSender: React.FC<ComplaintSenderProps> = ({ 
  defaultRecipient,
  ccRecipients = [],
  subjectTemplate,
  bodyTemplate
}) => {
  const [userEmail, setUserEmail] = useState('');
  const [emailBody, setEmailBody] = useState(bodyTemplate);
  const [subject, setSubject] = useState(subjectTemplate);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleSendEmail = () => {
    if (!userEmail) {
        setShowInstructions(true);
        return;
    }
    const mailtoLink = `mailto:${defaultRecipient}?cc=${ccRecipients.join(',')}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody + '\n\nSent from: ' + userEmail)}`;
    window.open(mailtoLink, '_blank');
    setShowInstructions(true); // Show instructions after clicking send
  };

  const handleDownloadDocx = () => {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({ text: `Subject: ${subject}`, style: "Heading2" }),
          new Paragraph({ text: ' ' }), // Spacer
          new Paragraph({ text: `To: ${defaultRecipient}` }),
          ...(ccRecipients.length > 0 ? [new Paragraph({ text: `CC: ${ccRecipients.join(', ')}` })] : []),
          new Paragraph({ text: ' ' }), // Spacer
          ...emailBody.split('\n').map(line => new Paragraph({ text: line })),
          new Paragraph({ text: ' ' }), // Spacer
          new Paragraph({ text: `Sender Email (Optional): ${userEmail}` })
        ],
      }],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'SPCA_Complaint_Template.docx');
    });
  };

  return (
    <div className="p-6 md:p-8 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 border border-red-200 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Send a Complaint to the Ministry of Health</h2>
      
      <div className="mb-6">
        <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-1">Your Email (Optional - for tracking/reference):</label>
        <input
          type="email"
          id="userEmail"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
            setShowInstructions(false); // Hide instructions when typing
          }}
          placeholder="you@example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="emailBody" className="block text-sm font-medium text-gray-700 mb-1">Complaint Draft (Editable):</label>
        <textarea
          id="emailBody"
          rows={10}
          value={emailBody}
          onChange={(e) => setEmailBody(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
        <p className="text-xs text-gray-500 mt-1">Feel free to modify the text above before sending or downloading.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleSendEmail}
          className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          <FiMail className="-ml-1 mr-2 h-5 w-5" />
          Send via Your Email App
        </button>
        <button
          onClick={handleDownloadDocx}
          className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          <FiDownload className="-ml-1 mr-2 h-5 w-5" />
          Download as .docx
        </button>
      </div>

      {showInstructions && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-800 text-sm">
          <div className="flex items-start">
            <FiAlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium">Important:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Clicking 'Send' opens your <strong>default email application</strong> (like Gmail, Outlook, Apple Mail) with the details pre-filled.</li>
                <li>You must click the final 'Send' button <strong>within your email application</strong> to actually send the complaint.</li>
                <li>Entering your email in the field above is optional and only helps you track if needed; it's not used to send the email from our website.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintSender; 