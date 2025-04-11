import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/404.module.css';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  
  // Use router for client-side navigation
  const handleHomeClick = (e) => {
    e.preventDefault();
    router.push('/');
  };
  
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
          <a href="/" onClick={handleHomeClick} className={styles.button}>
            Return to Homepage
          </a>
        </div>
      </main>
    </div>
  );
} 