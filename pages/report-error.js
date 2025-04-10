import React from 'react';
import Head from 'next/head';
import ReportErrorForm from '../components/ReportErrorForm'; // Adjust path if needed
import styles from '../styles/ReportErrorPage.module.css'; // Create this CSS file
import { useRouter } from 'next/router';

const ReportErrorPage = () => {
  const router = useRouter();
  // Optionally get default URL from query param, e.g., /report-error?url=...
  // Ensure it's treated as a string
  const defaultUrlFromQuery = typeof router.query.url === 'string' ? router.query.url : '';
  const websiteName = "[Your Website Name]"; // REPLACE

  return (
    <div className={styles.container}>
      <Head>
        <title>Report Factual Inaccuracy | {websiteName}</title>
        <meta name="description" content={`Report a factual inaccuracy found on ${websiteName}. Help us maintain accuracy.`}/>
         {/* Prevent indexing of this page if desired */}
         {/* <meta name="robots" content="noindex, nofollow" /> */}
      </Head>

      <h1 className={styles.title}>Report a Factual Inaccuracy</h1>

      <p className={styles.intro}>
        We are committed to accuracy and appreciate your assistance in identifying potential errors.
        Please use the form below to report specific factual inaccuracies you encounter on this website.
        Provide as much clear detail as possible, including the full page URL and any supporting evidence you may have.
      </p>

      {/* Pass the default URL to the form */}
      <ReportErrorForm defaultUrl={defaultUrlFromQuery} />

    </div>
  );
};

export default ReportErrorPage; 