const puppeteer = require('puppeteer');

async function checkDesign() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });
  
  try {
    const page = await browser.newPage();
    console.log('Navigating to homepage...');
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
    
    // Take a screenshot of the entire page
    console.log('Taking screenshot...');
    await page.screenshot({
      path: 'homepage-design.png',
      fullPage: true
    });

    // Check for key elements
    const mainContent = await page.$('main');
    if (!mainContent) {
      console.error('❌ Main content section not found');
    } else {
      console.log('✅ Main content section found');
    }

    const header = await page.$('header');
    if (!header) {
      console.error('❌ Header not found');
    } else {
      console.log('✅ Header found');
    }

    const footer = await page.$('footer');
    if (!footer) {
      console.error('❌ Footer not found');
    } else {
      console.log('✅ Footer found');
    }

    console.log('Design check complete! Screenshot saved as homepage-design.png');
  } catch (error) {
    console.error('Error during design check:', error);
  } finally {
    await browser.close();
  }
}

checkDesign(); 