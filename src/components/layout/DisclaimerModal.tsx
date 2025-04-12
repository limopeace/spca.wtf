import React, { useState, useEffect } from 'react';

interface DisclaimerModalProps {
  onAccept: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onAccept }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('disclaimerAccepted');
    const expiry = localStorage.getItem('disclaimerExpiry');
    const now = new Date().getTime();

    if (!accepted || (expiry && now > parseInt(expiry))) {
      setIsOpen(true);
    } else {
      onAccept(); // Call onAccept immediately if already accepted and not expired
    }
  }, [onAccept]);

  const handleAccept = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    localStorage.setItem('disclaimerAccepted', 'true');
    localStorage.setItem('disclaimerExpiry', expiryDate.getTime().toString());
    setIsOpen(false);
    onAccept();
  };

  const handleDecline = () => {
    // Optional: Redirect or inform user they cannot proceed
    alert('You must accept the disclaimer to use this site.');
    // Alternatively, redirect to a different page or disable functionality
    // window.location.href = '/goodbye';
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-description"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <h2 id="disclaimer-title" className="text-2xl font-bold text-gray-900 mb-4">Disclaimer and Terms of Use</h2>
        <div id="disclaimer-description" className="prose prose-sm max-w-none text-gray-600 mb-6 space-y-3">
          <p><strong>Introduction:</strong> This website (SPCA.wtf, where "wtf" stands for "Welfare Transparency Framework") is a private initiative dedicated to documenting and raising awareness about animal welfare issues, specifically concerning the Society for Prevention of Cruelty to Animals (SPCA) facility in Chandigarh. The content provided here is for informational purposes only and represents observations, experiences, and documentation of public interest matters related to this specific facility.</p>
          
          <p><strong>1. Not the Official SPCA:</strong> This website, SPCA.wtf, is <strong className="underline">NOT</strong> the official website of the SPCA Chandigarh or any other official SPCA branch or governing body. It is an independent public awareness project.</p>

          <p><strong>2. Purpose of the Website:</strong> The sole purpose of this website is to raise awareness about animal welfare issues, document conditions and practices at the SPCA Chandigarh facility, promote transparency, exercise the constitutional right to freedom of speech and expression (Article 19(1)(a)), and facilitate community engagement for animal welfare improvement.</p>
          
          <p><strong>3. Disclaimer of Liability (General):</strong> The information contained on this website is provided in good faith. While we strive for accuracy, we make no representations or warranties about the completeness, accuracy, reliability, or suitability of the information for any purpose. Any reliance you place on such information is strictly at your own risk.</p>
          
          <p><strong>4. No Defamation Intended:</strong> This website does not intend to defame, disparage, or criticize any individual or organization. Content is presented as documentation based on observations, official communications, and publicly available information related to SPCA Chandigarh. Opinions expressed are in good faith and exercise the right to freedom of speech in the public interest regarding animal welfare.</p>

          <p><strong>5. No Legal Liability:</strong> In no event will we be liable for any loss or damage, including indirect or consequential loss or damage, arising from loss of data or profits, or in connection with the use of this website.</p>

          <p><strong>6. Reporting Animal Cruelty or Emergencies:</strong> This website is <strong className="underline">NOT</strong> a channel for reporting active animal cruelty cases or emergencies in Chandigarh. For emergencies or to report cruelty, please contact the official SPCA Chandigarh helpline directly at <strong>0172 269 6450</strong> or the relevant local authorities.</p>

          <p><strong>7. Intellectual Property & Fair Use:</strong> Content on this site, including text, graphics, and data, is the property of the website owner or content providers, protected by copyright laws. Materials from public records or official communications may be reproduced under fair use principles for commentary, criticism, and news reporting in the public interest concerning animal welfare at SPCA Chandigarh.</p>
          
          <p><strong>8. Privacy:</strong> This website may collect basic visitor information (like IP addresses for security). This data is used solely for website operation and improvement and will not be sold or shared without consent, except as required by law. See our Privacy Policy for details.</p>

          <p><strong>9. Terms of Use & Restrictions:</strong> By using this site, you agree to these terms. You may not use this site for unlawful purposes, attempt unauthorized access, or reproduce content without permission.</p>

          <p><strong>10. Right to Information Act:</strong> Information shared may include content obtained via RTI applications or official communications, shared in the public interest for animal welfare.</p>
          
          <p><strong>11. Governing Law:</strong> These terms are governed by the laws of India, with jurisdiction in the courts of Chandigarh.</p>

          <p><strong>12. Changes to Disclaimer:</strong> This disclaimer may be updated. Continued use signifies acceptance of the revised terms.</p>

          <p className="font-semibold mt-4">By clicking "Accept and Continue," you acknowledge that you have read, understood, and agree to be bound by these Disclaimer and Terms of Use.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200">
          <button 
            onClick={handleDecline}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="px-4 py-2 rounded-md border border-transparent text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Accept and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal; 