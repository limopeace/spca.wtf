import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/404.module.css';

export default function Custom404() {
  const [isStatic, setIsStatic] = useState(true);
  
  // Detect if we're in static export mode (client-side only)
  useEffect(() => {
    setIsStatic(process.env.NODE_ENV === 'production');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Page Not Found | SPCA.wtf</title>
        <meta name="description" content="The page you're looking for cannot be found." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.description}>
          Sorry, the page you're looking for cannot be found.
        </p>
        <div className={styles.actions}>
          {isStatic ? (
            // For production/static export use regular anchor tag
            <a href="/" className={styles.button}>Return to Homepage</a>
          ) : (
            // For development use Next.js Link
            <Link href="/" className={styles.button}>Return to Homepage</Link>
          )}
        </div>
      </main>
    </div>
  );
} 