Detailed Implementation Prompts
1. Disclaimer Modal Implementation
Create a React component called DisclaimerModal that displays the full legal disclaimer when a user first visits the website. The modal should:
- Appear automatically on first visit
- Be impossible to bypass without accepting the terms
- Store acceptance in localStorage with a 30-day expiration
- Include a complete version of the disclaimer text
- Have clearly labeled "Accept" and "Decline" buttons
- Be accessible for screen readers and keyboard navigation
- Block all interaction with the website until accepted
- Look professional and match the website's design system

Include instructions for importing and adding this component to the main App.js or _app.js file.
2. Documentation and Source Citation System
Design a system for properly documenting and citing sources for all claims made on the website. Create:

1. A React component for displaying cited information that includes:
   - The claim or statement
   - The source type (email, document, observation, etc.)
   - Date of the source
   - Any reference numbers or identifiers
   - A visual indicator of source reliability

2. A consistent format for reference notations throughout the site

3. A centralized "Sources" page that lists all references used on the website with:
   - Full citation details
   - Explanation of verification methods
   - Clarification of which content is factual reporting vs. commentary

Also include guidelines for maintaining this documentation system as new content is added.
3. Complete Privacy Policy
Create a comprehensive privacy policy page for the website that covers:

1. What user data is collected (IP addresses, cookies, etc.)
2. How this data is used and stored
3. Data retention periods and deletion policies
4. Visitor rights regarding their data
5. Use of third-party services and their data practices
6. Contact information for privacy-related inquiries
7. Process for handling data breaches
8. Updates to the privacy policy

The policy should comply with current data protection regulations while being written in clear, understandable language. Include implementation instructions for adding this to the website navigation.
Brief Prompts for Additional Recommendations
4. Cookie Consent Banner
Create a GDPR-compliant cookie consent banner with options to accept all, reject non-essential, or customize cookie preferences.
5. Copyright Footer
Design a copyright footer that includes the copyright notice, website name, year, and links to legal pages.
6. Report Inaccuracies Feature
Build a form allowing users to report factual inaccuracies, with fields for the page URL, incorrect information, suggested correction, and supporting evidence.
7. Fact vs. Opinion Visual System
Create a visual system (colors, icons, formatting) to clearly distinguish between factual reporting and personal commentary throughout the website.
8. About Section
Design an About page that transparently explains who you are, your qualifications, motivation for the website, and commitment to accuracy.
9. Photo Usage Notice
Create a component for displaying images with an integrated notice about photo origins, permissions, and usage policy.
10. Press/Media Guidelines
Develop a page outlining how media organizations may use or reference content from your website, including attribution requirements.
11. Content Review System
Build an administrative dashboard for tracking content reviews, with dates, changes made, and verification methods used.
12. Mobile Responsiveness
Ensure all components, especially legal notices and disclaimers, are fully readable and functional on mobile devices of all sizes.
13. HTTPS Implementation
Configure the website server to use HTTPS with proper SSL certification and security headers.
14. Accessibility Compliance
Implement WCAG 2.1 AA compliance throughout the site, with special attention to legal notices and important documents.