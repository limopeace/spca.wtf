import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './CookieConsentBanner.module.css';

// Define cookie categories (adjust as needed for your site)
const COOKIE_CATEGORIES = {
  necessary: { name: 'Strictly Necessary', description: 'Essential for website functionality, cannot be disabled.', immutable: true },
  analytics: { name: 'Analytics Cookies', description: 'Help us understand how visitors interact with the website by collecting information anonymously.' },
  // marketing: { name: 'Marketing Cookies', description: 'Used to track visitors across websites to display relevant ads.' },
};

const COOKIE_CONSENT_KEY = 'cookie_consent_preferences';
const COOKIE_CONSENT_VERSION = 1; // Increment if you change categories/policy significantly

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState(null); // Stores object like { necessary: true, analytics: false }
  // const [showCustomizeModal, setShowCustomizeModal] = useState(false); // State for modal visibility

  // Function to get initial preferences from localStorage or defaults
  const getInitialPreferences = useCallback(() => {
    const storedPrefsString = localStorage.getItem(COOKIE_CONSENT_KEY);
    let initialPrefs = {};
    let needsUpdate = false;

    if (storedPrefsString) {
      try {
        const storedPrefs = JSON.parse(storedPrefsString);
        // Check version and if all current categories exist
        if (storedPrefs.version === COOKIE_CONSENT_VERSION && 
            Object.keys(COOKIE_CATEGORIES).every(cat => storedPrefs.consent.hasOwnProperty(cat))) {
          initialPrefs = storedPrefs.consent;
        } else {
          needsUpdate = true; // Version mismatch or missing categories
        }
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
        needsUpdate = true; // Invalid JSON
      }
    }

    if (!storedPrefsString || needsUpdate) {
        // Set defaults (Necessary true, others false initially)
        Object.keys(COOKIE_CATEGORIES).forEach(cat => {
            initialPrefs[cat] = COOKIE_CATEGORIES[cat].immutable || false; // Default to false unless immutable
        });
        // If defaults are set, user hasn't made a choice yet, so banner should show
        if (!storedPrefsString) setIsVisible(true); 
    } else {
        // Valid preferences found, banner shouldn't show initially
        setIsVisible(false);
    }

    return initialPrefs;
  }, []); // Empty dependency array, this function definition is stable

  useEffect(() => {
    const initialPrefs = getInitialPreferences();
    setPreferences(initialPrefs);

    // ** Apply initial consent **
    applyConsentPreferences(initialPrefs);

  }, [getInitialPreferences]); // Depend on the stable function reference

  // Function to apply the consent (e.g., load scripts)
  const applyConsentPreferences = (currentPrefs) => {
    if (!currentPrefs) return; 

    console.log('Applying Cookie Preferences:', currentPrefs);

    // --- PLACEHOLDER: Implement actual script loading/unloading logic --- 
    // Example: Google Analytics
    if (currentPrefs.analytics) {
      console.log('Analytics consented. Initializing...');
      // window.initializeAnalytics(); // Your function to load GA script
    } else {
      console.log('Analytics not consented.');
      // window.disableAnalytics(); // Your function to unload/disable GA script/cookies
    }

    // Example: Marketing Cookies
    // if (currentPrefs.marketing) {
    //   console.log('Marketing consented. Initializing...');
    //   // window.initializeMarketingScripts();
    // } else {
    //   console.log('Marketing not consented.');
    //   // window.disableMarketingScripts();
    // }
    // --- END PLACEHOLDER --- 
  };

  // Handler for saving preferences
  const savePreferences = (newConsent) => {
    const prefsToSave = {
      version: COOKIE_CONSENT_VERSION,
      timestamp: Date.now(),
      consent: newConsent,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefsToSave));
    setPreferences(newConsent);
    setIsVisible(false);
    // setShowCustomizeModal(false);
    applyConsentPreferences(newConsent); // Re-apply based on new choice
  };

  // Handlers for button clicks
  const handleAcceptAll = () => {
    const allAccepted = { ...preferences }; // Start with current
    Object.keys(COOKIE_CATEGORIES).forEach(cat => {
      allAccepted[cat] = true; // Set all to true
    });
    savePreferences(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = { ...preferences }; // Start with current
    Object.keys(COOKIE_CATEGORIES).forEach(cat => {
      essentialOnly[cat] = COOKIE_CATEGORIES[cat].immutable || false; // Only immutable (necessary) true
    });
    savePreferences(essentialOnly);
  };

  const handleCustomize = () => {
      // In a full implementation, this would open a modal.
      // For now, just log it.
      console.log("Customize button clicked - modal implementation needed.");
      alert("Customization options require a modal implementation (not included in this basic version).");
      // setShowCustomizeModal(true);
  };

  // Don't render if visibility is false or preferences are already loaded
  if (!isVisible || !preferences) {
    return null;
  }

  return (
    <div
        className={styles.banner}
        role="dialog"
        aria-live="polite"
        aria-label="Cookie Consent"
        aria-describedby="cookie-consent-description"
        hidden={!isVisible} // Control visibility via state
    >
      <div className={styles.content} id="cookie-consent-description">
        <p>
          We use cookies to enhance your experience and for analytics. You can accept all cookies, reject non-essential cookies, or customize your preferences. Learn more in our
          {' '}
          <Link href="/cookie-policy"><a>Cookie Policy</a></Link>.
          {/* Ensure /cookie-policy page exists */}
        </p>
      </div>
      <div className={styles.actions}>
         <button
          className={`${styles.button} ${styles.customizeButton}`}
          onClick={handleCustomize}
          aria-label="Customize cookie preferences"
        >
          Customize
        </button>
         <button
          className={`${styles.button} ${styles.rejectButton}`}
          onClick={handleRejectNonEssential}
          aria-label="Reject non-essential cookies"
        >
          Reject Non-Essential
        </button>
        <button
          className={`${styles.button} ${styles.acceptAllButton}`}
          onClick={handleAcceptAll}
          aria-label="Accept all cookies"
        >
          Accept All
        </button>
      </div>

      {/* Placeholder for where the customization modal would be rendered */} 
      {/* {showCustomizeModal && (
        <CookieCustomizeModal
          initialPreferences={preferences}
          onSave={savePreferences} // Pass the save function
          onClose={() => setShowCustomizeModal(false)}
        />
      )} */}
    </div>
  );
};

export default CookieConsentBanner;

// Note: CookieCustomizeModal component would need to be created separately.
// It would typically:
// - Receive initialPreferences and onSave/onClose props.
// - Map over COOKIE_CATEGORIES to display toggles/checkboxes (disabling immutable ones).
// - Maintain its own internal state for changes.
// - Call onSave with the updated preferences object when the user saves.

// Placeholder for a customization modal/feature
const handleCustomize = () => {
    alert('Cookie customization options are not yet implemented. Please accept all or reject non-essential.');
    // In a real implementation, this would open a modal with checkboxes for different cookie categories (e.g., Necessary, Analytics, Marketing)
    // Based on the user's choices in the modal, you would call handleConsent with a specific value like 'custom' and store detailed preferences.
}; 