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
          <Link href="/terms-of-use"><a>Terms of Use</a></Link>
          <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
          <Link href="/cookie-policy"><a>Cookie Policy</a></Link>
          <Link href="/disclaimer"><a>Disclaimer</a></Link>
          <Link href="/sources"><a>Sources</a></Link>
          <Link href="/report-error"><a>Report Error</a></Link>
           {/* Add other relevant links: About, Contact, Press, etc. */} 
           {/* <Link href="/about"><a>About</a></Link> */}
           {/* <Link href="/press-media-guidelines"><a>Press/Media</a></Link> */} 
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