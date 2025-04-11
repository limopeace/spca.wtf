// netlify/functions/report-error.js
// Netlify function for the error report form

const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  // Parse the request body
  let requestBody;
  try {
    requestBody = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid request body' })
    };
  }

  const { pageUrl, incorrectInfo, suggestedCorrection, evidence, contactEmail } = requestBody;

  // --- Server-side Validation (CRUCIAL) --- 
  if (!pageUrl || !incorrectInfo || !suggestedCorrection) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing required fields.' })
    };
  }

  // Add more specific validation if needed (e.g., URL format, max lengths)
  // Example: Basic URL check
  try {
    new URL(pageUrl);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid Page URL format.' })
    };
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
      from: `"SPCA.wtf Reports" <${process.env.EMAIL_FROM_ADDRESS}>`, // Sender address
      to: process.env.REPORT_RECIPIENT_EMAIL, // Your admin email address
      subject: emailSubject,
      text: emailTextBody,
      html: emailHtmlBody,
    });

    // --- Success Response --- 
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Report submitted successfully. Thank you!' })
    };

  } catch (error) {
    console.error('Error sending report email:', error);
    // --- Error Response --- 
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send report due to a server error. Please try again later.' })
    };
  }
}; 