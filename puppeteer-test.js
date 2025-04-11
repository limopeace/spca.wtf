const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

// Define different device viewports
const devices = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 }
];

async function checkPages() {
  console.log('Starting browser...');
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
    defaultViewport: null, // We'll set this per test
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    // List of all pages to check
    const pagesToCheck = [
      { name: 'Home', path: '/' },
      { name: 'Documents', path: '/documents' },
      { name: 'Legal', path: '/legal' },
      { name: 'Contact', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Timeline', path: '/timeline' }
    ];
    
    // Base URL - change this if needed
    const baseUrl = 'http://localhost:3000';
    
    console.log('Starting page checks...');
    
    // Check each page on each device size
    for (const device of devices) {
      console.log(`\n--- Testing on ${device.name} (${device.width}x${device.height}) ---\n`);
      
      // Create device-specific directory
      const deviceDir = path.join(screenshotsDir, device.name);
      if (!fs.existsSync(deviceDir)) {
        fs.mkdirSync(deviceDir);
      }
      
      const page = await browser.newPage();
      
      // Set viewport for this device
      await page.setViewport({
        width: device.width,
        height: device.height
      });
      
      // Set up console error logging
      page.on('console', msg => {
        if (msg.type() === 'error') {
          console.log(`Console error: ${msg.text()}`);
        }
      });
      
      // Check each page
      for (const pageInfo of pagesToCheck) {
        console.log(`Checking ${pageInfo.name} page on ${device.name}...`);
        
        // Navigate to page
        const url = `${baseUrl}${pageInfo.path}`;
        await page.goto(url, { waitUntil: 'networkidle2' });
        
        // Take screenshot
        const screenshotPath = path.join(deviceDir, `${pageInfo.name.toLowerCase()}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`Screenshot saved to ${screenshotPath}`);
        
        // Basic accessibility checks
        console.log(`Running checks for ${pageInfo.name} page...`);
        
        // Check for page title
        const title = await page.title();
        console.log(`Page title: ${title}`);
        
        // Check if page has h1
        const h1Count = await page.$$eval('h1', (elements) => elements.length);
        console.log(`H1 tags: ${h1Count}`);
        
        // Check for broken images
        const brokenImages = await page.evaluate(() => {
          const images = Array.from(document.images);
          return images
            .filter(img => !img.complete || img.naturalWidth === 0)
            .map(img => img.src);
        });
        
        if (brokenImages.length) {
          console.log(`Found ${brokenImages.length} broken images:`);
          brokenImages.forEach(src => console.log(`  ${src}`));
        } else {
          console.log('No broken images found');
        }
        
        // Check all links on the page
        const links = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('a'))
            .map(a => ({ href: a.href, text: a.textContent.trim() }))
            .filter(link => link.href && !link.href.startsWith('javascript:') && !link.href.includes('#'));
        });
        
        console.log(`Found ${links.length} links on the page`);
        
        // Check for forms
        const forms = await page.$$('form');
        console.log(`Found ${forms.length} forms on the page`);
        
        // If it's the contact page, let's test the form
        if (pageInfo.name === 'Contact' && forms.length > 0) {
          console.log('Testing contact form...');
          try {
            // Fill out the form - adjust selectors as needed for your form
            await page.type('input[name="name"]', 'Test User');
            await page.type('input[name="email"]', 'test@example.com');
            await page.type('textarea[name="message"]', 'This is a test message from Puppeteer');
            
            // Take a screenshot of the filled form
            await page.screenshot({ path: path.join(deviceDir, 'contact_form_filled.png') });
            
            // Don't actually submit the form in this test
            console.log('Form filled successfully (not submitted)');
          } catch (error) {
            console.error('Error filling contact form:', error.message);
          }
        }
        
        // Check for horizontal scrollbar (indicates responsive issues)
        const hasHorizontalScrollbar = await page.evaluate(() => {
          return document.body.scrollWidth > window.innerWidth;
        });
        
        if (hasHorizontalScrollbar) {
          console.log('⚠️ ISSUE: Page has horizontal scrollbar - potential responsive design issue');
          await page.screenshot({ path: path.join(deviceDir, `${pageInfo.name.toLowerCase()}_scrollbar_issue.png`) });
        } else {
          console.log('✅ No horizontal scrollbar detected');
        }
        
        // Check for too small touch targets (mobile UX)
        if (device.name === 'mobile') {
          const smallTouchTargets = await page.evaluate(() => {
            const interactiveElements = Array.from(document.querySelectorAll('a, button, input, select, textarea'));
            return interactiveElements
              .filter(el => {
                const rect = el.getBoundingClientRect();
                return (rect.width < 44 || rect.height < 44); // 44px is Apple's recommendation
              })
              .map(el => ({
                tagName: el.tagName,
                id: el.id,
                className: el.className,
                text: el.textContent?.trim() || '[no text]',
                width: el.getBoundingClientRect().width,
                height: el.getBoundingClientRect().height
              }));
          });
          
          if (smallTouchTargets.length > 0) {
            console.log(`⚠️ ISSUE: Found ${smallTouchTargets.length} elements with touch targets smaller than 44x44px`);
            console.log(smallTouchTargets);
          } else {
            console.log('✅ All touch targets have appropriate size');
          }
        }
        
        console.log(`Finished checking ${pageInfo.name} page on ${device.name}.\n`);
      }
      
      await page.close();
    }
    
    console.log('All pages checked successfully on all devices!');
  } catch (error) {
    console.error('An error occurred during testing:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
}

// Run the test
checkPages(); 