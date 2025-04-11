import React, { useState, useEffect } from 'react';
import styles from './ReportErrorForm.module.css';

const ReportErrorForm = ({ defaultUrl = '' }) => {
  const [formData, setFormData] = useState({
    pageUrl: '',
    incorrectInfo: '',
    suggestedCorrection: '',
    evidence: '',
    contactEmail: '', // Optional
  });
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'
  const [message, setMessage] = useState('');
  const [isStatic, setIsStatic] = useState(false);

  // Pre-fill URL if provided (e.g., from query parameter or parent)
  useEffect(() => {
    if (defaultUrl) {
      setFormData(prevData => ({ ...prevData, pageUrl: defaultUrl }));
    }
    // Try to get current page URL if none provided (runs client-side only)
    else if (typeof window !== 'undefined' && !formData.pageUrl) {
         setFormData(prevData => ({ ...prevData, pageUrl: window.location.href }));
    }
    
    // Check if we're running in static export mode
    if (typeof window !== 'undefined') {
      // If we're in production and output is 'export', we're in static mode
      const netlifyContext = window.netlifyIdentity?.context?.deployContext || '';
      setIsStatic(netlifyContext === 'production' || netlifyContext === 'deploy-preview');
    }
  }, [defaultUrl]); // Rerun if defaultUrl prop changes


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    // Basic client-side validation (complement server-side validation)
    if (!formData.pageUrl || !formData.incorrectInfo || !formData.suggestedCorrection) {
        setStatus('error');
        setMessage('Please fill in all required fields (*).');
        return;
    }

    // --- Actual submission logic --- 
    try {
      // Always use Netlify function in production/static export
      const endpoint = '/.netlify/functions/report-error';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit report.');
      }

      // Success
      console.log('Form Data Submitted:', formData);
      setStatus('success');
      setMessage(result.message || 'Thank you for your report! We will review the information submitted.');
      // Reset form after successful submission
      setFormData({ 
        pageUrl: defaultUrl || (typeof window !== 'undefined' ? window.location.href : ''), 
        incorrectInfo: '', 
        suggestedCorrection: '', 
        evidence: '', 
        contactEmail: '' 
      });

    } catch (error) {
      console.error('Form Submission Error:', error);
      setStatus('error');
      setMessage(error.message || 'An error occurred while submitting the report. Please try again later.');
    }
    // --- End submission logic --- 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {/* Static mode warning for local testing */}
      {process.env.NODE_ENV === 'development' && (
        <div className={styles.warningMessage}>
          <p><strong>Note:</strong> Form submissions in local development will be sent to Netlify functions.</p>
        </div>
      )}
      
      {/* Status Message Area */} 
      <div className={styles.statusMessageContainer}>
        {message && (
            <div className={status === 'success' ? styles.successMessage : styles.errorMessage} role="alert">
            {message}
            </div>
        )}
      </div>

      {/* Form Fields */}
      <div className={styles.formGroup}>
        <label htmlFor="pageUrl" className={styles.label}>
          Page URL <span className={styles.requiredAsterisk}>*</span>
        </label>
        <input
          type="url"
          id="pageUrl"
          name="pageUrl"
          value={formData.pageUrl}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="https://..."
          aria-describedby="pageUrlInstructions"
        />
        <p id="pageUrlInstructions" className={styles.instructions}>The full web address of the page containing the error.</p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="incorrectInfo" className={styles.label}>
          Incorrect Information <span className={styles.requiredAsterisk}>*</span>
        </label>
        <textarea
          id="incorrectInfo"
          name="incorrectInfo"
          value={formData.incorrectInfo}
          onChange={handleChange}
          required
          className={styles.textarea}
          placeholder="Describe the specific information you believe is incorrect."
          rows={4}
          aria-describedby="incorrectInfoInstructions"
        />
         <p id="incorrectInfoInstructions" className={styles.instructions}>Please be specific about the text or data that is wrong.</p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="suggestedCorrection" className={styles.label}>
          Suggested Correction <span className={styles.requiredAsterisk}>*</span>
        </label>
        <textarea
          id="suggestedCorrection"
          name="suggestedCorrection"
          value={formData.suggestedCorrection}
          onChange={handleChange}
          required
          className={styles.textarea}
          placeholder="What do you believe the correct information is?"
          rows={4}
          aria-describedby="suggestedCorrectionInstructions"
        />
        <p id="suggestedCorrectionInstructions" className={styles.instructions}>Provide the accurate information as you understand it.</p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="evidence" className={styles.label}>
          Supporting Evidence (Optional)
        </label>
        <textarea
          id="evidence"
          name="evidence"
          value={formData.evidence}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Provide links to documents, websites, or explain your reasoning/source(s)."
          rows={3}
          aria-describedby="evidenceInstructions"
        />
        <p id="evidenceInstructions" className={styles.instructions}>Helps us verify the correction. Please do not submit confidential information.</p>
      </div>

       <div className={styles.formGroup}>
        <label htmlFor="contactEmail" className={styles.label}>
          Your Email (Optional)
        </label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          className={styles.input}
          placeholder="your.email@example.com"
          aria-describedby="contactEmailInstructions"
        />
         <p id="contactEmailInstructions" className={styles.instructions}>Provide your email only if you are willing to be contacted for clarification (we may not follow up).</p>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting Report...' : 'Submit Report'}
      </button>
    </form>
  );
};

export default ReportErrorForm; 