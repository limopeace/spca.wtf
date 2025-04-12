import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
  // TODO: Replace [Current Date - YYYY-MM-DD] with the actual date
  const lastUpdatedDate = '2024-08-01'; // Example date

  return (
    <>
      <Head>
        <title>Privacy Policy | SPCA.wtf</title>
        <meta name="description" content="Privacy Policy for SPCA.wtf explaining how user data is collected, used, and protected." />
      </Head>

      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy for SPCA.wtf</h1>
            <p className="text-sm text-gray-500 mb-8"><strong>Last Updated:</strong> {lastUpdatedDate}</p>

            <p>Welcome to SPCA.wtf. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

            <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">1. Collection of Your Information</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Log and Usage Data:</strong> Our servers automatically collect standard log information when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site. This information is used for website security, analysis, and operational purposes.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies and other tracking technologies (like web beacons) to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site. We will request your consent for non-essential cookies via a consent banner.</li>
              <li><strong>Information Provided by You:</strong> We collect information you voluntarily provide to us when you contact us via email (e.g., info@spca.wtf) for inquiries or to report inaccuracies. This may include your name, email address, the content of your message, and any attachments you provide.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Use of Your Information</h2>
            <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Operate and maintain the security of our Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Respond to your comments, questions, and requests, including reports of inaccuracies.</li>
              <li>Compile anonymous statistical data and analysis for internal use.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>
            <p>We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for analysis or other uses.</p>
            <p>Specifically, we may disclose your information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, hosting services, and security monitoring. (e.g., Netlify for hosting).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Security</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">5. Data Retention</h2>
            <p>We will retain your information only for as long as is necessary for the purposes set out in this privacy policy.</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Log Data:</strong> Server logs are typically retained for a limited period (e.g., 30-90 days) for security and analysis purposes, unless longer retention is required by law.</li>
              <li><strong>Email Communications:</strong> Emails sent to info@spca.wtf may be retained as necessary to address your inquiry, investigate reports, or comply with record-keeping requirements.</li>
              <li><strong>Cookie Consent:</strong> Your cookie consent preferences are stored locally on your device and expire according to your choices or browser settings.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">6. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: info@spca.wtf.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">7. Policy for Children</h2>
            <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">8. Third-Party Websites & Services</h2>
            <p>The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties.</p>
            <p>We currently use Netlify for hosting. You can review Netlify's privacy policy <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">9. Data Breach Procedures</h2>
            <p>In the event of a data breach that is likely to result in a risk to the rights and freedoms of individuals, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where feasible. If the breach is likely to result in a high risk to your rights and freedoms, we will also communicate the breach to you without undue delay, unless certain conditions apply (e.g., the data was encrypted, or subsequent measures have rendered the risk unlikely).</p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>Email: <a href="mailto:info@spca.wtf" className="text-primary hover:underline">info@spca.wtf</a></p>

            <hr className="my-10" />
            <p className="text-sm text-gray-500 italic">This policy is intended to comply with general data protection principles and regulations like GDPR. It may need adjustments based on specific legal counsel and operational details.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy; 