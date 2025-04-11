import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const websiteName = "[Your Website Name]"; // REPLACE with your actual website name

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Legal Links Section */}
        <nav className={styles.legalNav} aria-label="Legal Pages">
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/sources">Sources</Link>
          <Link href="/report-error">Report Error</Link>
           {/* Add other relevant links: About, Contact, Press, etc. */} 
           {/* <Link href="/about">About</Link> */}
           {/* <Link href="/press-media-guidelines">Press/Media</Link> */} 
        </nav>

         {/* Copyright Notice Section */}
         <div className={styles.copyrightContainer}>
             <p className={styles.copyright}>
                &copy; {currentYear} {websiteName}. All rights reserved.
             </p>
             {/* Optional: Add a short tagline or mission statement here */}
             {/* <p className={styles.tagline}>Investigating XYZ with documented sources.</p> */}
         </div>

        {/* Optional: Add social media links or other info here */}

      </div>
    </footer>
  );
};

export default Footer; 