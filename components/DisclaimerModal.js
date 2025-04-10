import React, { useState, useEffect } from 'react';
import styles from './DisclaimerModal.module.css';

const DISCLAIMER_KEY = 'disclaimerAccepted';
const EXPIRATION_DAYS = 30;

const DisclaimerModal = ({ onAccept }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    // Trigger onAccept if already accepted and valid (moved check inside condition)
    // This ensures onAccept is called consistently if the modal condition is met
    // This effect runs only once on mount due to the empty dependency array
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

  if (!isOpen) {
    return null; // Don't render anything if modal shouldn't be shown
  }

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-content"
    >
      <div className={styles.modal}>
        <h2 id="disclaimer-title" className={styles.title}>
          Disclaimer and Terms of Use
        </h2>
        <div id="disclaimer-content" className={styles.content}>
          {/* --- IMPORTANT: REPLACE THIS WITH YOUR FULL LEGAL DISCLAIMER TEXT --- */}
          <p>
            Welcome to [Your Website Name]. Please read these terms and conditions carefully before using our service.
          </p>
          <p>
            <strong>Acceptance of Terms:</strong> By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
          </p>
          <p>
            <strong>Content Accuracy:</strong> This website provides information based on various sources, including documents, electronic communications, interviews, and personal observations. While we strive for accuracy and transparency (see our <a href="/sources" target="_blank" rel="noopener noreferrer">Sources page</a> for methodology), the information presented may contain interpretations, commentary, and potentially factual inaccuracies or omissions. The content is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            <strong>No Liability:</strong> In no event shall [Your Website Name], its owners, authors, or contributors be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use this website or any errors or omissions in the content thereof.
          </p>
          <p>
            <strong>Modifications:</strong> We reserve the right to change these conditions from time to time as we see fit, and your continued use of the site will signify your acceptance of any adjustment to these terms. You are therefore advised to re-read this statement on a regular basis.
          </p>
           <p>
            <strong>Governing Law:</strong> Any claim relating to [Your Website Name]'s website shall be governed by the laws of [Your Jurisdiction - e.g., State of California, Country] without regard to its conflict of law provisions.
          </p>
          <p>
             <strong>User Conduct:</strong> You agree to use the website only for lawful purposes. You are prohibited from posting on or transmitting through the website any material that is harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, fraudulent, racially, ethnically, or otherwise objectionable.
          </p>
          <p><strong>By clicking "Accept", you acknowledge that you have read, understood, and agree to these terms.</strong></p>
          {/* --- END OF DISCLAIMER TEXT --- */}
        </div>
        <div className={styles.actions}>
          <button
            className={`${styles.button} ${styles.declineButton}`}
            onClick={handleDecline}
            aria-label="Decline Terms of Use and Disclaimer"
          >
            Decline
          </button>
          <button
            className={`${styles.button} ${styles.acceptButton}`}
            onClick={handleAccept}
            aria-label="Accept Terms of Use and Disclaimer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal; 