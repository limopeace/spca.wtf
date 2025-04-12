import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiX, FiSettings } from 'react-icons/fi';

const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_EXPIRY_DAYS = 365;

type ConsentStatus = 'accepted' | 'rejected' | 'pending' | 'custom';

interface CookieConsent {
  status: ConsentStatus;
  preferences: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean; // Example category
  };
}

const CookieConsentBanner: React.FC = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [currentPreferences, setCurrentPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) {
      try {
        const parsedConsent: CookieConsent = JSON.parse(storedConsent);
        setConsent(parsedConsent);
        setCurrentPreferences(parsedConsent.preferences);
        // If already decided, don't show banner
        if (parsedConsent.status !== 'pending') {
          setShowBanner(false);
        }
      } catch (error) {
        console.error("Error parsing cookie consent:", error);
        localStorage.removeItem(COOKIE_CONSENT_KEY);
        setShowBanner(true); // Show banner if stored data is invalid
      }
    } else {
      // No consent stored, show banner and set initial pending state
      setShowBanner(true);
      setConsent({ status: 'pending', preferences: currentPreferences });
    }
  }, []);

  const saveConsent = (status: ConsentStatus, preferences: CookieConsent['preferences']) => {
    const newConsent: CookieConsent = { status, preferences };
    setConsent(newConsent);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    setShowBanner(false);
    setShowPreferences(false);
    // Here you would typically initialize analytics etc. based on consent
    console.log('Cookie Consent Saved:', newConsent);
  };

  const handleAcceptAll = () => {
    const allAcceptedPrefs = { necessary: true, analytics: true, marketing: true };
    saveConsent('accepted', allAcceptedPrefs);
  };

  const handleRejectAll = () => {
    const necessaryOnlyPrefs = { necessary: true, analytics: false, marketing: false };
    saveConsent('rejected', necessaryOnlyPrefs);
  };

  const handleSavePreferences = () => {
    saveConsent('custom', { ...currentPreferences, necessary: true }); // Ensure necessary is always true
  };

  const handlePreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCurrentPreferences(prev => ({ ...prev, [name]: checked }));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-gray-800 text-white p-4 shadow-lg">
      {!showPreferences ? (
        // Initial Banner View
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <p>We use cookies to enhance your experience. By clicking "Accept All," you agree to our use of cookies. You can change your preferences at any time.</p>
            <Link href="/privacy-policy" className="underline hover:text-gray-300 text-xs">Read our Privacy Policy</Link>
          </div>
          <div className="flex flex-shrink-0 gap-3 mt-3 md:mt-0">
            <button
              onClick={() => setShowPreferences(true)}
              className="px-4 py-2 text-sm rounded-md border border-gray-400 hover:bg-gray-700 flex items-center"
              aria-label="Customize cookie settings"
            >
              <FiSettings className="mr-1" /> Customize
            </button>
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm rounded-md border border-gray-400 hover:bg-gray-700"
              aria-label="Reject non-essential cookies"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm rounded-md bg-primary hover:bg-opacity-90 text-white"
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
          </div>
        </div>
      ) : (
        // Preferences View
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Cookie Preferences</h3>
            <button onClick={() => setShowPreferences(false)} className="p-1 text-gray-400 hover:text-white" aria-label="Close preferences">
              <FiX size={20} />
            </button>
          </div>
          <p className="text-sm mb-4">Manage your cookie settings. Necessary cookies are required for the site to function and cannot be disabled.</p>
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
              <label htmlFor="necessary" className="text-sm font-medium">Necessary Cookies</label>
              <input
                type="checkbox"
                id="necessary"
                name="necessary"
                checked={true} // Always checked and disabled
                disabled
                className="h-4 w-4 text-primary focus:ring-primary border-gray-500 rounded bg-gray-600 cursor-not-allowed"
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
              <label htmlFor="analytics" className="text-sm font-medium">Analytics Cookies</label>
              <input
                type="checkbox"
                id="analytics"
                name="analytics"
                checked={currentPreferences.analytics}
                onChange={handlePreferenceChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-500 rounded bg-gray-600"
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded">
              <label htmlFor="marketing" className="text-sm font-medium">Marketing Cookies</label>
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                checked={currentPreferences.marketing}
                onChange={handlePreferenceChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-500 rounded bg-gray-600"
              />
            </div>
            {/* Add more categories as needed */}
          </div>
          <div className="flex justify-end gap-3">
             <button
              onClick={() => setShowPreferences(false)}
              className="px-4 py-2 text-sm rounded-md border border-gray-400 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 text-sm rounded-md bg-primary hover:bg-opacity-90 text-white"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsentBanner; 