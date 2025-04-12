import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Disclaimer: React.FC = () => {
  // TODO: Replace [Current Date - YYYY-MM-DD] with the actual date
  const lastUpdatedDate = '2024-08-01'; // Example date

  return (
    <>
      <Head>
        <title>Disclaimer & Terms of Use | SPCA.wtf</title>
        <meta name="description" content="Disclaimer and Terms of Use for SPCA.wtf explaining our legal relationship and how the site should be used." />
      </Head>

      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer and Terms of Use</h1>
            <p className="text-sm text-gray-500 mb-8"><strong>Last Updated:</strong> {lastUpdatedDate}</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Introduction</h2>
            <p>This website (SPCA.wtf, where "wtf" stands for "Welfare Transparency Framework") is a private initiative dedicated to documenting and raising awareness about animal welfare issues, specifically concerning the Society for Prevention of Cruelty to Animals (SPCA) facility in Chandigarh. The content provided here is for informational purposes only and represents observations, experiences, and documentation of public interest matters related to this specific facility.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">1. Not the Official SPCA</h2>
            <p>This website, SPCA.wtf, is <strong className="underline">NOT</strong> the official website of the SPCA Chandigarh or any other official SPCA branch or governing body. It is an independent public awareness project.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Purpose of the Website</h2>
            <p>The sole purpose of this website is to raise awareness about animal welfare issues, document conditions and practices at the SPCA Chandigarh facility, promote transparency, exercise the constitutional right to freedom of speech and expression (Article 19(1)(a)), and facilitate community engagement for animal welfare improvement.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Disclaimer of Liability (General)</h2>
            <p>The information contained on this website is provided in good faith. While we strive for accuracy, we make no representations or warranties about the completeness, accuracy, reliability, or suitability of the information for any purpose. Any reliance you place on such information is strictly at your own risk.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">4. No Defamation Intended</h2>
            <p>This website does not intend to defame, disparage, or criticize any individual or organization. Content is presented as documentation based on observations, official communications, and publicly available information related to SPCA Chandigarh. Opinions expressed are in good faith and exercise the right to freedom of speech in the public interest regarding animal welfare.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">5. No Legal Liability</h2>
            <p>In no event will we be liable for any loss or damage, including indirect or consequential loss or damage, arising from loss of data or profits, or in connection with the use of this website.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">6. Reporting Animal Cruelty or Emergencies</h2>
            <p>This website is <strong className="underline">NOT</strong> a channel for reporting active animal cruelty cases or emergencies in Chandigarh. For emergencies or to report cruelty, please contact the official SPCA Chandigarh helpline directly at <strong>0172 269 6450</strong> or the relevant local authorities.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">7. Intellectual Property & Fair Use</h2>
            <p>Content on this site, including text, graphics, and data, is the property of the website owner or content providers, protected by copyright laws. Materials from public records or official communications may be reproduced under fair use principles for commentary, criticism, and news reporting in the public interest concerning animal welfare at SPCA Chandigarh.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">8. Privacy</h2>
            <p>This website may collect basic visitor information (like IP addresses for security). This data is used solely for website operation and improvement and will not be sold or shared without consent, except as required by law. See our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for details.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">9. Terms of Use & Restrictions</h2>
            <p>By using this site, you agree to these terms. You may not use this site for unlawful purposes, attempt unauthorized access, or reproduce content without permission.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">10. Right to Information Act</h2>
            <p>Information shared may include content obtained via RTI applications or official communications, shared in the public interest for animal welfare.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">11. Governing Law</h2>
            <p>These terms are governed by the laws of India, with jurisdiction in the courts of Chandigarh.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">12. Changes to Disclaimer</h2>
            <p>This disclaimer may be updated. Continued use signifies acceptance of the revised terms.</p>

            <div className="bg-gray-50 p-6 rounded-lg my-10">
              <p className="font-semibold mb-2">Meaning of "SPCA.wtf"</p>
              <p>The domain name "SPCA.wtf" stands for "SPCA Welfare Transparency Framework" and represents our commitment to documenting and promoting transparency in animal welfare practices.</p>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
            <p>If you have questions or comments about this Disclaimer and Terms of Use, please contact us at:</p>
            <p>Email: <a href="mailto:info@spca.wtf" className="text-primary hover:underline">info@spca.wtf</a></p>

            <hr className="my-10" />
            <p className="text-sm text-gray-500 italic">By using this website, you acknowledge that you have read, understood, and agree to be bound by these Disclaimer and Terms of Use.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer; 