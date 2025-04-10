import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import styles from '../styles/LegalPage.module.css';

export default function CookiePolicy() {
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
        <title>Cookie Policy | SPCA Chandigarh Documentation</title>
        <meta name="description" content="Cookie Policy for SPCA Chandigarh Documentation website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cookie Policy</h1>

        <section className={styles.section}>
          <h2>Introduction</h2>
          <p>
            This Cookie Policy explains how SPCA Chandigarh Documentation ("we", "us", or "our") uses cookies and similar 
            technologies to recognize you when you visit our website. It explains what these technologies are and why we use 
            them, as well as your rights to control our use of them.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies 
            are widely used by website owners in order to make their websites work, or to work more efficiently, as well as 
            to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, SPCA Chandigarh Documentation) are called "first-party cookies". 
            Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable 
            third-party features or functionality to be provided on or through the website (e.g., advertising, interactive 
            content, and analytics). The parties that set these third-party cookies can recognize your computer both when it 
            visits the website in question and also when it visits certain other websites.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why We Use Cookies</h2>
          <p>
            We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order 
            for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also 
            enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third 
            parties serve cookies through our Website for analytics and other purposes.
          </p>
          <p>The specific types of cookies served through our Website and the purposes they perform are described below:</p>
        </section>

        <section className={styles.section}>
          <h2>Types of Cookies We Use</h2>
          
          <h3>Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our website and to use some of 
            its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, 
            you cannot refuse them without impacting how our website functions.
          </p>
          
          <h3>Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. 
            However, without these cookies, certain functionality may become unavailable.
          </p>
          
          <h3>Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our website is being 
            used or how effective our marketing campaigns are, or to help us customize our website for you.
          </p>
          
          <h3>Targeting Cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the 
            same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases 
            selecting advertisements that are based on your interests.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How Can You Control Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking 
            on the appropriate opt-out links provided in the cookie banner on our website.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
            you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
          <p>
            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, 
            including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> 
            or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Changes to Our Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use 
            or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to 
            stay informed about our use of cookies and related technologies.
          </p>
          <p>
            The date at the bottom of this Cookie Policy indicates when it was last updated.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at [Your Contact Email].
          </p>
        </section>

        <p className={styles.lastUpdated}>Last Updated: {currentDate}</p>
      </main>

      <Footer />
    </div>
  );
} 