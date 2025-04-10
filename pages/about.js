import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Optional
import Link from 'next/link';
import styles from '../styles/AboutPage.module.css'; 

const AboutPage = () => {
  // --- REPLACE PLACEHOLDERS BELOW --- 
  const websiteName = "[Your Website Name]";
  const yourName = "[Your Name / Pseudonym]";
  const yourRole = "[Your Role/Title, e.g., Lead Investigator, Concerned Citizen, Former Employee]"; // Optional title
  const yourQualifications = "[Briefly explain your relevant background, expertise, or connection to the subject matter. E.g., 'I worked at Company X during the period Y-Z', 'I have researched topic A for B years', 'As a resident of community C, I observed...']";
  const websiteMotivation = "[Clearly state the primary reason for creating this website. What problem does it solve or what perspective does it offer? E.g., 'To consolidate scattered public records about Project Alpha', 'To provide a detailed, evidence-based account of event Beta', 'To document inconsistencies observed in official statements regarding issue Gamma.']";
  const commitmentToAccuracy = `We are committed to presenting information accurately and transparently. Factual claims on this site are supported by citations linking to detailed source information on the <a href="/sources">Sources page</a>. This page explains our methodology for source verification and reliability assessment. We distinguish factual reporting from commentary or analysis, which is presented [<em>Describe visual distinction, e.g., "in italicized blocks with a grey border and an 'Analysis' label"</em>]. While we strive for accuracy, errors may occur. If you identify a factual inaccuracy, please use the <a href="/report-error">Report Error form</a> to notify us.`;
  const contactMethod = `[Provide your preferred method for general inquiries (NOT error reports or media requests). E.g., "via email at contact@[yourdomain].com", "through our contact form [link]", "No direct contact available at this time."]`;
  
  // Optional Photo - uncomment section below and ensure image exists in /public/images
  const includePhoto = false; // Set to true to include photo
  const photoPath = "/images/your-profile-photo.jpg"; 
  const photoAlt = `Photo of ${yourName}`; 
  // --- END OF PLACEHOLDERS --- 

  return (
    <div className={styles.container}>
      <Head>
        <title>About | {websiteName}</title>
        <meta name="description" content={`Learn more about ${yourName} and the purpose and methodology of ${websiteName}.`} />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>About {websiteName}</h1>
        {yourRole && <p className={styles.role}>{yourRole}</p>}
      </header>

      <section className={styles.section}>
        {includePhoto && (
          <div className={styles.photoContainer}>
            <Image
              src={photoPath}
              alt={photoAlt}
              width={180} // Adjust size
              height={180}
              className={styles.photo}
              priority // Optional: Prioritize loading if above the fold
            />
          </div>
        )}
        
        <div className={styles.textContent}> {/* Wrapper for text content */} 
            <h2 id="author">Author & Background</h2>
            <p>
              This website is maintained by {yourName}. {yourQualifications}
            </p>
            
            <h2 id="motivation">Purpose of This Website</h2>
            <p>
              {websiteMotivation}
            </p>
            
            <h2 id="accuracy">Commitment to Accuracy & Transparency</h2>
            {/* Use dangerouslySetInnerHTML for the accuracy statement as it contains links */}
            <p dangerouslySetInnerHTML={{ __html: commitmentToAccuracy }}></p>
            
            <h2 id="contact">Contact Information</h2>
            <p>
               For general inquiries (please use the specific forms for error reporting or media requests), you can reach out {contactMethod}.
            </p>
            <p>
                Please refer to the <Link href="/press-media-guidelines"><a>Press/Media Guidelines</a></Link> for media inquiries.
            </p>
        </div>
      </section>

    </div>
  );
};

export default AboutPage; 