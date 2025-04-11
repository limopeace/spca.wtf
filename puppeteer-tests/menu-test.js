const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'screenshots', 'menu-test');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function testMenu() {
  console.log('Starting browser for menu testing...');
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1280, height: 800 }
  });
  
  try {
    const page = await browser.newPage();
    
    // Base URL - change this if needed
    const baseUrl = 'http://localhost:3000';
    
    console.log('Checking navigation menu...');
    await page.goto(baseUrl, { waitUntil: 'networkidle2' });
    
    // Take screenshot of page before interacting with menu
    await page.screenshot({ path: path.join(screenshotsDir, 'before-menu-interaction.png') });
    
    // Find all menu items
    const menuItems = await page.evaluate(() => {
      // Adjust the selector to match your actual menu structure
      const items = Array.from(document.querySelectorAll('header nav a, button.hamburger, button.menuToggle'));
      return items.map(item => ({
        text: item.textContent.trim(),
        href: item.href || null,
        isButton: item.tagName === 'BUTTON',
        rect: {
          x: item.getBoundingClientRect().x,
          y: item.getBoundingClientRect().y,
          width: item.getBoundingClientRect().width,
          height: item.getBoundingClientRect().height
        }
      }));
    });
    
    console.log(`Found ${menuItems.length} menu items:`);
    menuItems.forEach((item, index) => {
      console.log(`${index + 1}. ${item.text} ${item.href ? `(${item.href})` : '(button)'}`);
    });
    
    // Check if mobile menu button exists
    const hasMobileMenuButton = await page.evaluate(() => {
      // Adjust selector to match your mobile menu button
      return !!document.querySelector('button.hamburger, button.menuToggle');
    });
    
    if (hasMobileMenuButton) {
      console.log('Testing mobile menu...');
      
      // Resize to mobile viewport
      await page.setViewport({ width: 375, height: 667 });
      await page.screenshot({ path: path.join(screenshotsDir, 'mobile-viewport.png') });
      
      // Find and click the mobile menu button
      const mobileMenuButton = await page.evaluate(() => {
        // Adjust selector for your mobile menu button
        const button = document.querySelector('button.hamburger, button.menuToggle');
        if (button) {
          const rect = button.getBoundingClientRect();
          return {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          };
        }
        return null;
      });
      
      if (mobileMenuButton) {
        // Click the button
        await page.mouse.click(mobileMenuButton.x, mobileMenuButton.y);
        console.log('Clicked mobile menu button');
        
        // Wait for animation
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));
        
        // Take screenshot with menu open
        await page.screenshot({ path: path.join(screenshotsDir, 'mobile-menu-open.png') });
        
        // Check if mobile menu is visible
        const isMobileMenuVisible = await page.evaluate(() => {
          // Adjust selector for your mobile menu
          const mobileMenu = document.querySelector('nav.mobile-menu, nav.mobileMenu, div.mobileMenu');
          return mobileMenu && window.getComputedStyle(mobileMenu).display !== 'none';
        });
        
        console.log(`Mobile menu visible: ${isMobileMenuVisible}`);
        
        // Find all mobile menu items
        const mobileMenuItems = await page.evaluate(() => {
          // Adjust selector for your mobile menu items
          const items = Array.from(document.querySelectorAll('nav.mobile-menu a, nav.mobileMenu a, div.mobileMenu a'));
          return items.map(item => ({
            text: item.textContent.trim(),
            href: item.href
          }));
        });
        
        console.log(`Found ${mobileMenuItems.length} mobile menu items:`);
        mobileMenuItems.forEach((item, index) => {
          console.log(`${index + 1}. ${item.text} (${item.href})`);
        });
        
        // Click one of the menu items to test navigation
        if (mobileMenuItems.length > 0) {
          const itemToClick = await page.evaluate(() => {
            // Adjust selector for your mobile menu items
            const items = Array.from(document.querySelectorAll('nav.mobile-menu a'));
            if (items.length > 0) {
              // Get the "Documents" link or the first link if not found
              const docsLink = items.find(i => i.textContent.includes('Documents')) || items[0];
              const rect = docsLink.getBoundingClientRect();
              return {
                text: docsLink.textContent.trim(),
                href: docsLink.href,
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2
              };
            }
            return null;
          });
          
          if (itemToClick) {
            console.log(`Clicking menu item: ${itemToClick.text}`);
            await page.mouse.click(itemToClick.x, itemToClick.y);
            
            // Wait for navigation
            await page.waitForNavigation({ waitUntil: 'networkidle2' });
            
            // Take screenshot after navigation
            await page.screenshot({ path: path.join(screenshotsDir, 'after-menu-navigation.png') });
            
            console.log(`Navigated to: ${page.url()}`);
          }
        }
      } else {
        console.log('Mobile menu button not found');
      }
    }
    
    // Test desktop navigation
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(baseUrl, { waitUntil: 'networkidle2' });
    
    // Find and click a desktop menu item
    const desktopMenuItem = await page.evaluate(() => {
      // Adjust selector to match your desktop navigation
      const items = Array.from(document.querySelectorAll('header nav a'));
      if (items.length > 0) {
        // Get the "About" link or the first link if not found
        const aboutLink = items.find(i => i.textContent.includes('About')) || 
                         (items.length > 0 ? items[0] : null);
        if (aboutLink) {
          const rect = aboutLink.getBoundingClientRect();
          return {
            text: aboutLink.textContent.trim(),
            href: aboutLink.href,
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          };
        }
      }
      return null;
    });
    
    if (desktopMenuItem) {
      console.log(`Clicking desktop menu item: ${desktopMenuItem.text}`);
      await page.mouse.click(desktopMenuItem.x, desktopMenuItem.y);
      
      // Wait for navigation
      await page.waitForNavigation({ waitUntil: 'networkidle2' });
      
      // Take screenshot after navigation
      await page.screenshot({ path: path.join(screenshotsDir, 'desktop-navigation.png') });
      
      console.log(`Navigated to: ${page.url()}`);
    } else {
      console.log('Desktop menu items not found');
    }
    
    console.log('Menu testing completed!');
  } catch (error) {
    console.error('An error occurred during menu testing:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
}

// Run the test
testMenu(); 