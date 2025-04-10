// pages/api/report-error.js

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

  // --- Processing Logic (Example: Send Email) --- 
  // Configure nodemailer (use environment variables for credentials!)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.example.com
    port: process.env.SMTP_PORT || 587, // e.g., 587 or 465
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // your SMTP username
      pass: process.env.SMTP_PASSWORD, // your SMTP password
    },
  });

  const emailSubject = `Factual Inaccuracy Report: ${pageUrl}`;
  const emailTextBody = `
    A factual inaccuracy report has been submitted:

    Page URL: ${pageUrl}
    Reported Error: ${incorrectInfo}
    Suggested Correction: ${suggestedCorrection}
    Supporting Evidence: ${evidence || 'None provided'}
    Submitter Email: ${contactEmail || 'Not provided'}
  `;
  const emailHtmlBody = `
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
  `;

  try {
    await transporter.sendMail({
      from: `"[Your Website Name] Reports" <${process.env.EMAIL_FROM_ADDRESS}>`, // Sender address (e.g., no-reply@yourdomain.com)
      to: process.env.REPORT_RECIPIENT_EMAIL, // Your admin email address
      subject: emailSubject,
      text: emailTextBody,
      html: emailHtmlBody,
    });

    // --- Success Response --- 
    return res.status(200).json({ message: 'Report submitted successfully. Thank you!' });

  } catch (error) {
    console.error('Error sending report email:', error);
    // --- Error Response --- 
    return res.status(500).json({ message: 'Failed to send report due to a server error. Please try again later.' });
  }
} 