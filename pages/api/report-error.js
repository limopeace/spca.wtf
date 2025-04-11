// pages/api/report-error.js
// This file serves as a local development proxy to the Netlify function

// Basic Next.js API route handler for the error report form
// IMPORTANT: Implement proper validation, error handling, and actual processing (e.g., email sending, DB saving)

// Example: Using nodemailer to send an email (requires installation: npm install nodemailer)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { pageUrl, incorrectInfo, suggestedCorrection, evidence, contactEmail } = req.body;

  // --- Server-side Validation (CRUCIAL) --- 
  if (!pageUrl || !incorrectInfo || !suggestedCorrection) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  // Add more specific validation if needed (e.g., URL format, max lengths)
  // Example: Basic URL check
  try {
    new URL(pageUrl);
  } catch (error) {
    return res.status(400).json({ message: 'Invalid Page URL format.' });
  }

  try {
    // In local development, log the data instead of sending an email
    console.log('Report error form submission:', {
      pageUrl,
      incorrectInfo,
      suggestedCorrection,
      evidence: evidence || 'None provided',
      contactEmail: contactEmail || 'Not provided'
    });
    
    // For local testing only - skip actual email sending
    if (process.env.NODE_ENV === 'development') {
      console.log('Email would be sent in production environment');
      return res.status(200).json({ message: 'Report received successfully (development mode)' });
    }
    
    // In production, this code won't be reached as Netlify functions will handle it
    // But keeping it for completeness
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"SPCA.wtf Reports" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: process.env.REPORT_RECIPIENT_EMAIL,
      subject: `Factual Inaccuracy Report: ${pageUrl}`,
      text: `
        A factual inaccuracy report has been submitted:

        Page URL: ${pageUrl}
        Reported Error: ${incorrectInfo}
        Suggested Correction: ${suggestedCorrection}
        Supporting Evidence: ${evidence || 'None provided'}
        Submitter Email: ${contactEmail || 'Not provided'}
      `,
      html: `
        <h2>Factual Inaccuracy Report</h2>
        <p><strong>Page URL:</strong> <a href="${pageUrl}">${pageUrl}</a></p>
        <p><strong>Reported Error:</strong></p>
        <pre>${incorrectInfo}</pre>
        <p><strong>Suggested Correction:</strong></p>
        <pre>${suggestedCorrection}</pre>
        <p><strong>Supporting Evidence:</strong></p>
        <pre>${evidence || '<em>None provided</em>'}</pre>
        <hr>
        <p><strong>Submitter Email:</strong> ${contactEmail || '<em>Not provided</em>'}</p>
      `
    });

    return res.status(200).json({ message: 'Report submitted successfully. Thank you!' });
  } catch (error) {
    console.error('Error handling report:', error);
    return res.status(500).json({ message: 'Failed to send report due to a server error. Please try again later.' });
  }
} 