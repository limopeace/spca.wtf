# SPCA.wtf Website Puppeteer Tests

This directory contains automated Puppeteer tests for the SPCA.wtf website. These tests check all pages of the website for various issues across different device sizes.

## What the Tests Check

- Page loading and rendering on desktop, tablet, and mobile viewports
- Broken images
- Horizontal scrollbars (responsive design issues)
- Small touch targets on mobile
- Form functionality (especially on the Contact page)
- Console errors
- Link detection
- Basic accessibility issues
- Navigation menu functionality
- Contact form validation and submission

## Running the Tests

1. Make sure your website is running locally:
   ```bash
   cd .. # Go back to the main project directory
   npm run dev # Start the Next.js development server
   ```

2. In a separate terminal, install dependencies and run the tests:
   ```bash
   cd puppeteer-tests
   npm install
   npm test           # Run basic page tests
   npm run test:menu  # Run navigation menu tests
   npm run test:contact # Run contact form tests
   npm run test:all   # Run all tests
   ```

## Test Results

The tests will:
1. Print results to the console
2. Take screenshots of each page on each device size
3. Capture any issues found (like horizontal scrollbars)

All screenshots are saved in the `screenshots` directory, organized by device type and test type.

## Test Descriptions

### Main Page Tests (`puppeteer-test.js`)
These tests check all pages across desktop, tablet, and mobile viewports for various issues.

### Menu Tests (`menu-test.js`)
These tests specifically focus on the navigation menu functionality:
- Desktop navigation menu links
- Mobile menu toggle button
- Mobile menu dropdown
- Navigation between pages via menu links

### Contact Form Tests (`contact-form-test.js`)
These tests focus on the contact form functionality:
- Form field detection and validation
- Empty form submission (validation testing)
- Form field filling
- Checkbox handling
- Form submission (commented out by default)

## Modifying the Tests

The main test files are:
- `puppeteer-test.js` - General page tests
- `menu-test.js` - Navigation menu tests
- `contact-form-test.js` - Contact form tests

You can modify these to:
- Add more pages to test by updating the `pagesToCheck` array
- Change the device sizes in the `devices` array
- Add more checks or modify existing ones
- Change the base URL if testing a deployed version instead of localhost 