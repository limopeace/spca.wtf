import React, { useState, useEffect } from 'react';
import styles from './DisclaimerModal.module.css';

const DISCLAIMER_KEY = 'disclaimerAccepted';
const EXPIRATION_DAYS = 30;

const DisclaimerModal = ({ onAccept }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const acceptanceData = localStorage.getItem(DISCLAIMER_KEY);
    if (acceptanceData) {
      try {
        const { timestamp } = JSON.parse(acceptanceData);
        const expirationTime = timestamp + EXPIRATION_DAYS * 24 * 60 * 60 * 1000;
        if (Date.now() < expirationTime) {
          // Already accepted and not expired
          setIsOpen(false);
          if (onAccept) onAccept(); // Notify parent component
        } else {
          // Expired, show modal again
          localStorage.removeItem(DISCLAIMER_KEY);
          setIsOpen(true);
        }
      } catch (error) {
        // Handle potential JSON parsing errors or invalid data
        console.error("Error parsing disclaimer acceptance data:", error);
        localStorage.removeItem(DISCLAIMER_KEY);
        setIsOpen(true);
      }
    } else {
      // First visit or no acceptance recorded
      setIsOpen(true);
    }
  }, [onAccept]); // Include onAccept in dependencies

  const handleAccept = () => {
    const acceptanceData = {
      accepted: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(DISCLAIMER_KEY, JSON.stringify(acceptanceData));
    setIsOpen(false);
    if (onAccept) onAccept(); // Notify parent component
  };

  const handleDecline = () => {
    // To enforce acceptance, we simply don't close the modal or store acceptance.
    // An alert informs the user why they cannot proceed.
    console.warn('Disclaimer declined. Acceptance is required to use this site.');
    alert('You must accept the Terms of Use and Disclaimer to proceed.');
    // Do not call setIsOpen(false) here.
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isOpen) {
    return null; // Don't render anything if modal shouldn't be shown
  }

  return (
    <div
      className={`${styles.overlay} ${isExpanded ? styles.expanded : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-content"
    >
      <div className={`${styles.modal} ${isExpanded ? styles.expandedModal : ''}`}>
        <div className={styles.header}>
          <h2 id="disclaimer-title" className={styles.title}>
            Disclaimer and Terms of Use
          </h2>
          <button 
            className={styles.expandButton} 
            onClick={toggleExpand}
            aria-label={isExpanded ? "Minimize disclaimer" : "Expand disclaimer"}
          >
            {isExpanded ? '↓' : '↑'}
          </button>
        </div>

        {isExpanded ? (
          <div id="disclaimer-content" className={styles.content}>
            <h3>Introduction</h3>
            <p>
              This website is a private initiative dedicated to documenting and raising awareness about animal welfare issues, specifically concerning the Society for Prevention of Cruelty to Animals (SPCA) Chandigarh. The content provided here is for informational purposes only and represents personal observations, experiences, and documentation of public interest matters.
            </p>
            
            <h3>Purpose of the Website</h3>
            <p>The sole purpose of this website is to:</p>
            <ul>
              <li>Raise awareness about animal welfare issues</li>
              <li>Document the conditions at animal welfare facilities</li>
              <li>Promote transparency in public institutions</li>
              <li>Exercise the constitutional right to freedom of speech and expression</li>
              <li>Facilitate community engagement for animal welfare improvement</li>
            </ul>
            
            <h3>Disclaimer of Liability</h3>
            <p>
              The information contained on this website is provided in good faith and for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
            <p>
              This website does not intend to defame, disparage, or criticize any individual or organization. All content is presented as factual documentation based on personal observations, official communications, and publicly available information.
            </p>
            
            <h3>Privacy Policy</h3>
            <p>
              This website may collect certain personal information from visitors, such as IP addresses, browser types, and timestamps. This information is used solely for improving the user experience and website security.
            </p>
            
            <p><strong>By clicking "Accept", you acknowledge that you have read, understood, and agree to these terms.</strong></p>
          </div>
        ) : (
          <div className={styles.summaryContent}>
            <p>
              By accepting, you acknowledge this is a private initiative for animal welfare documentation and awareness, not affiliated with SPCA Chandigarh. All information is provided in good faith for public interest. 
              <a href="#" onClick={(e) => { e.preventDefault(); toggleExpand(); }} className={styles.readMoreLink}>Read full disclaimer</a>
            </p>
          </div>
        )}
        
        <div className={styles.actions}>
          <button
            className={`${styles.button} ${styles.acceptButton}`}
            onClick={handleAccept}
            aria-label="Accept Terms of Use and Disclaimer"
          >
            Accept
          </button>
          <div className={styles.scrollHint}>
            <span className={styles.scrollText}>Scroll down to explore</span>
            <div className={styles.scrollIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal; 