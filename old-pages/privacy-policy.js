import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/LegalPage.module.css'; // Reusable style for legal pages

const PrivacyPolicyPage = () => {
  const websiteName = "[Your Website Name]"; // REPLACE
  const websiteUrl = "[Your Website URL]"; // REPLACE (e.g., https://www.yourwebsite.com)
  const privacyContactEmail = "[Your Privacy Contact Email]"; // REPLACE
  const effectiveDate = "2024-07-27"; // REPLACE with the actual effective date
  const lastUpdatedDate = "2024-07-27"; // REPLACE with the date of the last update

  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy | {websiteName}</title>
        <meta name="description" content={`Our privacy policy detailing how ${websiteName} collects, uses, and protects your data.`} />
      </Head>

      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.effectiveDate}>Effective Date: {effectiveDate}</p>
      <p className={styles.lastUpdated}>Last Updated: {lastUpdatedDate}</p>

      <section className={styles.section}>
        <h2 id="introduction">1. Introduction</h2>
        <p>
          Welcome to {websiteName} ("we", "us", "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {websiteUrl} (the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>
        <p>
          We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
        </p>
      </section>

      <section className={styles.section}>
        <h2 id="data-collection">2. What Information Do We Collect?</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
        
        <h3>Personal Data</h3>
        <p>
            Personally identifiable information, such as your name or email address, is only collected when you voluntarily provide it to us, for example, when using the "Report Factual Inaccuracy" form and choosing to provide your email address for follow-up. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.
        </p>

        <h3>Derivative Data (Log Files & Analytics)</h3>
        <p>
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. This also includes data collected through analytics services (like [mention specific services, e.g., Google Analytics, Vercel Analytics, Plausible Analytics] if used) which may include device information, location (country/region), user interactions, and traffic sources.
        </p>
        
        <h3>Cookies and Tracking Technologies</h3>
        <p>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology unless you explicitly consent (e.g., via our cookie banner). Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
        </p>
        <p>For more detailed information on the cookies we use, their purpose, and how you can manage your preferences, please refer to our <Link href="/cookie-policy"><a>Cookie Policy</a></Link>.</p>
         {/* Add other types if applicable, e.g., Data from Mobile Devices, Third-Party Data */} 
      </section>

      <section className={styles.section}>
        <h2 id="data-use">3. How Do We Use Your Information?</h2>
        <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
        <ul>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties (e.g., aggregated site traffic statistics).</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          <li>Maintain the security and operation of our Site (e.g., analyzing log files for errors or security threats).</li>
          <li>Respond to your comments, questions, and reports (e.g., processing submissions from the "Report Factual Inaccuracy" form).</li>
          <li>Comply with legal and regulatory requirements.</li>
          <li>Request feedback and contact you about your use of the Site (only if you provide contact information and the context warrants it).</li>
           {/* Add other specific uses */} 
        </ul>
      </section>

      <section className={styles.section}>
        <h2 id="data-disclosure">4. Disclosure of Your Information</h2>
        <p>We do not sell, trade, or rent your personally identifiable information to others. We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul>
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, hosting services, and website analytics. These may include [List specific providers, e.g., Vercel for hosting, Google Analytics for analytics]. We require these third parties to maintain the confidentiality of your information and use it only for the purposes for which we disclose it to them.</li>
            <li><strong>Aggregated or Anonymized Data:</strong> We may share aggregated or anonymized information, which does not directly identify you, for research or reporting purposes.</li>
             {/* Add other disclosure scenarios like Business Transfers if applicable */} 
        </ul>
      </section>

      <section className={styles.section}>
        <h2 id="data-retention">5. Data Retention</h2>
        <p>
          We will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>
        <ul>
           <li><strong>Log Data:</strong> Server logs containing IP addresses are typically retained for [e.g., 30-90 days] for security and debugging purposes, unless longer retention is required by law or for an active investigation.</li> 
           <li><strong>Analytics Data:</strong> Aggregated or anonymized analytics data may be retained for longer periods for trend analysis. Refer to the privacy policies of our analytics providers ([e.g., Google Analytics] data retention settings).</li>
           <li><strong>Form Submissions (e.g., Error Reports):</strong> Information submitted via forms (including optional email) will be retained as long as necessary to investigate and address the report, typically [e.g., 6-12 months] after resolution, unless required for legal reasons.</li>
        </ul>
         <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
      </section>

      <section className={styles.section}>
        <h2 id="your-rights">6. Your Privacy Rights (GDPR/CCPA etc.)</h2>
        <p>
          Depending on your location, you may have certain rights under applicable data protection laws. These may include the right to:
        </p>
        <ul>
          <li><strong>Request access</strong> to and obtain a copy of your personal information.</li>
          <li><strong>Request correction</strong> of any inaccurate personal information or completion of incomplete information.</li>
          <li><strong>Request erasure</strong> ('right to be forgotten') of your personal information under certain conditions.</li>
          <li><strong>Object to processing</strong> of your personal information under certain conditions.</li>
          <li><strong>Request restriction of processing</strong> of your personal information under certain conditions.</li>
          <li><strong>Request data portability</strong> of your personal information under certain conditions.</li>
          <li><strong>Withdraw consent</strong> at any time where we are relying on consent to process your personal information (e.g., cookie consent).</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the contact details provided below (Section 10). We will consider and act upon any request in accordance with applicable data protection laws. Please note we may need to verify your identity before responding to such requests.
        </p>
        <p>If you are a resident of the European Economic Area (EEA) or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority.</p>
        <p>[Optional: Add specific sections/details for CCPA if applicable, e.g., right to opt-out of sale - clarify you don't sell data].</p>
      </section>

      <section className={styles.section}>
        <h2 id="third-party-links">7. Third-Party Websites & Services</h2>
        <p>
          The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Additionally, we use third-party services for hosting and analytics as mentioned above. Once you have used these links or services to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites or services, you should inform yourself of the privacy policies and practices (if any) of the third party responsible and should take those steps necessary to, in your discretion, protect the privacy of your information.
        </p>
        <p>Key service providers include:</p>
         <ul>
          <li>[e.g., Vercel (Hosting): Link to Vercel Privacy Policy]</li>
          <li>[e.g., Google Analytics: Link to Google Privacy & Terms]</li>
          {/* Add others as needed */} 
        </ul>
      </section>

       <section className={styles.section}>
        <h2 id="security">8. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties.
        </p>
      </section>

       <section className={styles.section}>
        <h2 id="data-breach">9. Data Breach Procedures</h2>
        <p>
          In the event of a data breach involving sensitive personal information that is likely to result in a high risk to the rights and freedoms of individuals, we will take steps to mitigate the breach and notify affected individuals and relevant supervisory authorities as required by applicable law, typically within 72 hours of becoming aware of the breach where feasible.
        </p>
      </section>

      <section className={styles.section}>
        <h2 id="contact">10. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, or wish to exercise your privacy rights, please contact us at:
        </p>
        <p>
          Email: <a href={`mailto:${privacyContactEmail}`}>{privacyContactEmail}</a>
        </p>
        <p>
          [Optional: Add Mailing Address if applicable]<br />
          [Your Name/Organization Name]<br />
          [Street Address]<br />
          [City, State, Zip Code]<br />
          [Country]
        </p>
      </section>

    </div>
  );
};

export default PrivacyPolicyPage; 