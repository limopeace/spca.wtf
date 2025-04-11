const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'screenshots', 'contact-form');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function testContactForm() {
  console.log('Starting browser for contact form testing...');
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1280, height: 800 }
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to the contact page
    const contactUrl = 'http://localhost:3000/contact';
    console.log(`Navigating to ${contactUrl}...`);
    await page.goto(contactUrl, { waitUntil: 'networkidle2' });
    
    // Take screenshot of contact page
    await page.screenshot({ path: path.join(screenshotsDir, 'contact-page.png') });
    
    // Find all form fields
    const formFields = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input, textarea, select'));
      return inputs.map(input => ({
        name: input.name,
        id: input.id,
        type: input.type,
        isRequired: input.required,
        placeholder: input.placeholder || null
      }));
    });
    
    console.log(`Found ${formFields.length} form fields:`);
    formFields.forEach((field, index) => {
      console.log(`${index + 1}. ${field.name} (${field.type})${field.isRequired ? ' - required' : ''}`);
    });
    
    // Test empty form submission
    console.log('Testing empty form submission...');
    
    // Look for the submit button
    const submitButton = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button[type="submit"], input[type="submit"]'));
      if (buttons.length > 0) {
        const button = buttons[0];
        const rect = button.getBoundingClientRect();
        return {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height / 2,
          text: button.textContent.trim()
        };
      }
      return null;
    });
    
    if (submitButton) {
      console.log(`Found submit button: "${submitButton.text}"`);
      await page.mouse.click(submitButton.x, submitButton.y);
      
      // Wait a bit for validation errors to appear
      await page.waitForTimeout(500);
      
      // Take screenshot of validation errors
      await page.screenshot({ path: path.join(screenshotsDir, 'empty-form-validation.png') });
      
      // Check for validation error messages
      const validationErrors = await page.evaluate(() => {
        // This selector might need to be adjusted based on your site's error message format
        const errors = Array.from(document.querySelectorAll('.error, .field-error, [role="alert"]'));
        return errors.map(error => error.textContent.trim());
      });
      
      if (validationErrors.length > 0) {
        console.log(`Found ${validationErrors.length} validation errors:`);
        validationErrors.forEach((error, index) => {
          console.log(`${index + 1}. ${error}`);
        });
      } else {
        console.log('No validation errors found - form may have been submitted or validation is not working correctly');
      }
    } else {
      console.log('Submit button not found');
    }
    
    // Test form with valid data
    console.log('Testing form with valid data...');
    
    // Clear the form (refresh the page)
    await page.reload({ waitUntil: 'networkidle2' });
    
    // Fill in the form fields
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      subject: 'Puppeteer Test',
      message: 'This is a test message sent by Puppeteer.',
    };
    
    // Fill each field
    for (const [field, value] of Object.entries(formData)) {
      // Try different selectors
      await page.evaluate((field, value) => {
        // Try by name
        const inputByName = document.querySelector(`input[name="${field}"], textarea[name="${field}"], select[name="${field}"]`);
        if (inputByName) {
          if (inputByName.tagName === 'SELECT') {
            inputByName.value = value;
          } else {
            inputByName.value = value;
          }
          return true;
        }
        
        // Try by id
        const inputById = document.getElementById(field);
        if (inputById) {
          if (inputById.tagName === 'SELECT') {
            inputById.value = value;
          } else {
            inputById.value = value;
          }
          return true;
        }
        
        // Try by placeholder
        const inputByPlaceholder = document.querySelector(`input[placeholder*="${field}"], textarea[placeholder*="${field}"]`);
        if (inputByPlaceholder) {
          inputByPlaceholder.value = value;
          return true;
        }
        
        return false;
      }, field, value);
    }
    
    // Take screenshot of filled form
    await page.screenshot({ path: path.join(screenshotsDir, 'filled-form.png') });
    
    // Find and click checkboxes if they exist
    await page.evaluate(() => {
      // Try to find any checkboxes like "I agree to terms" or "Subscribe to newsletter"
      const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
      checkboxes.forEach(checkbox => {
        // Check all boxes except "anonymous" if it exists
        if (!checkbox.name.includes('anonym')) {
          checkbox.checked = true;
        }
      });
    });
    
    // Take screenshot after checking boxes
    await page.screenshot({ path: path.join(screenshotsDir, 'form-with-checkboxes.png') });
    
    // Submit the form (if we proceed with actual submission)
    console.log('Form filled successfully. (Not submitting to avoid actual form submission)');
    
    // If you want to actually submit:
    /*
    if (submitButton) {
      console.log('Submitting form...');
      await page.mouse.click(submitButton.x, submitButton.y);
      
      // Wait for submission response
      await page.waitForTimeout(2000);
      
      // Take screenshot of result
      await page.screenshot({ path: path.join(screenshotsDir, 'form-submission-result.png') });
      
      // Check for success message
      const successMessage = await page.evaluate(() => {
        // Adjust selector for your success message
        const message = document.querySelector('.success-message, .alert-success');
        return message ? message.textContent.trim() : null;
      });
      
      if (successMessage) {
        console.log(`Success message found: "${successMessage}"`);
      } else {
        console.log('No success message found');
      }
    }
    */
    
    console.log('Contact form testing completed!');
  } catch (error) {
    console.error('An error occurred during contact form testing:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
}

// Run the test
testContactForm(); 