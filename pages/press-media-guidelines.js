import React from 'react';
import Head from 'next/head';
import styles from '../styles/LegalPage.module.css'; // Reuse legal page styles

const PressMediaGuidelinesPage = () => {
  const websiteName = "[Your Website Name]";
  const contactEmail = "[Your Contact Email for Media Inquiries]";

  return (
    <div className={styles.container}>
      <Head>
        <title>Press & Media Guidelines | {websiteName}</title>
        <meta name="description" content={`Guidelines for press and media referencing content from ${websiteName}.`} />
      </Head>

      <h1 className={styles.title}>Press & Media Guidelines</h1>
      <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>

      <section className={styles.section}>
        <h2>Introduction</h2>
        <p>
          We welcome interest from members of the press and media. These guidelines outline how content from {websiteName} may be referenced or used in your publications or broadcasts.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Attribution Requirements</h2>
        <p>
          When referencing specific information, data points, or direct quotes from this website, please provide clear attribution to <strong>{websiteName}</strong>.
        </p>
        <p>
          For online publications, we request that the attribution includes a hyperlink back to the specific page URL on {websiteName} where the information was found, or to the homepage ([Your Website URL]) if referencing the site generally.
        </p>
        <p>
          Example Attribution:
          <br />
          <em>"According to data published by {websiteName} ([Link to specific page]), the figures indicate..."</em>
          <br />
          <em>"As reported by {websiteName} ([Link]), the event occurred..."</em>
        </p>
      </section>

      <section className={styles.section}>
        <h2>Use of Images and Multimedia</h2>
        <p>
          Images, diagrams, or other multimedia content published on {websiteName} may have specific copyright or usage restrictions.
        </p>
        <ul>
          <li>Please check the caption or notice accompanying each image for source and permission details.</li>
          <li>Screenshots of the website interface may generally be used for illustrative purposes with attribution.</li>
          <li>For specific permission requests regarding the reuse or reproduction of images or multimedia originating from this site, please contact us at {contactEmail}.</li>
          {/* Add link to Image Usage Policy page if it exists */} 
          <li>See our <a href="/image-usage-policy">Image Usage Policy</a> for more details [Remove or adjust if no policy page].</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Quotes and Interviews</h2>
        <p>
          Direct quotes from the text of the website should be clearly attributed as outlined above.
        </p>
        <p>
          If you would like to request an interview or specific comments regarding the content on this website, please direct your inquiry to {contactEmail}. Please provide details about your publication, the topic of interest, and your deadline.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Accuracy and Context</h2>
        <p>
          We strive for accuracy and provide source documentation where possible (see our <a href="/sources">Sources page</a>). We request that any information taken from {websiteName} be presented accurately and within its original context.
        </p>
        <p>
          Please be mindful of distinguishing between factual reporting presented on the site and any commentary or analysis, as explained on our About page [Link to About page if it exists].
        </p>
      </section>

      <section className={styles.section}>
        <h2>Contact Information</h2>
        <p>
          For all press and media inquiries, please contact:
          <br />
          [Your Name or Title, e.g., Media Relations]
          <br />
          Email: {contactEmail}
        </p>
      </section>

    </div>
  );
};

export default PressMediaGuidelinesPage; 