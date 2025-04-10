import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import styles from '../styles/LegalPage.module.css';

export default function Disclaimer() {
  useEffect(() => {
    // Scroll to the top when page loads
    window.scrollTo(0, 0);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Disclaimer | SPCA Chandigarh Documentation</title>
        <meta name="description" content="Disclaimer for SPCA Chandigarh Documentation website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Disclaimer</h1>

        <section className={styles.section}>
          <h2>Introduction</h2>
          <p>
            This website is a private initiative dedicated to documenting and raising awareness about animal welfare issues, 
            specifically concerning the Society for Prevention of Cruelty to Animals (SPCA) Chandigarh. The content provided 
            here is for informational purposes only and represents personal observations, experiences, and documentation of 
            public interest matters.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Purpose of the Website</h2>
          <p>The sole purpose of this website is to:</p>
          <ul>
            <li>Raise awareness about animal welfare issues</li>
            <li>Document the conditions at animal welfare facilities</li>
            <li>Promote transparency in public institutions</li>
            <li>Exercise the constitutional right to freedom of speech and expression</li>
            <li>Facilitate community engagement for animal welfare improvement</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Disclaimer of Liability</h2>
          <h3>General Disclaimer</h3>
          <p>
            The information contained on this website is provided in good faith and for general informational purposes only. 
            While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, 
            express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the 
            website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          
          <h3>No Defamation Intended</h3>
          <p>
            This website does not intend to defame, disparage, or criticize any individual or organization. All content is 
            presented as factual documentation based on personal observations, official communications, and publicly available 
            information. Any opinions expressed are done so in good faith and in the exercise of the right to freedom of speech.
          </p>
          
          <h3>Constitutional Rights</h3>
          <p>This website exercises the following constitutional rights:</p>
          <ul>
            <li>Right to freedom of speech and expression under Article 19(1)(a) of the Constitution of India</li>
            <li>Right to information as recognized by the Supreme Court of India as part of Article 19(1)(a)</li>
            <li>Right to criticize public institutions in the interest of public welfare</li>
          </ul>
          
          <h3>No Legal Liability</h3>
          <p>
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or 
            damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, 
            the use of this website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Right to Information Act Disclosure</h2>
          <p>
            The information shared on this website includes content that may have been obtained through Right to Information Act 
            applications or through official communications with public authorities. Such information is shared in public interest 
            and for the welfare of animals.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact Information</h2>
          <p>
            If you have any questions or concerns about the content of this website, please contact us at [Your Contact Email].
          </p>
        </section>

        <section className={styles.section}>
          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably 
            submit to the exclusive jurisdiction of the courts in Chandigarh, India.
          </p>
        </section>

        <p className={styles.lastUpdated}>Last Updated: {currentDate}</p>
      </main>

      <Footer />
    </div>
  );
} 