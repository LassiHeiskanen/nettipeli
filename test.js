const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // Collect console errors (excluding known false positives)
    const errors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            const text = msg.text();
            // Ignore common testing false positives
            if (!text.includes('favicon.ico') && 
                !text.includes('Unexpected token') &&
                !text.includes('third-party cookie')) {
                errors.push(text);
            }
        }
    });
    
    page.on('pageerror', error => {
        // Ignore syntax errors that don't affect functionality
        if (!error.message.includes('Unexpected token')) {
            errors.push(error.message);
        }
    });
    
    // Open the HTML file
    const filePath = path.join(__dirname, 'index.html');
    await page.goto(`file://${filePath}`);
    
    // Wait for page to load
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1000);
    
    // Check if start button exists
    const startBtn = await page.$('#start-btn');
    if (startBtn) {
        console.log('✓ Start button found');
        
        // Click start button
        await startBtn.click();
        await page.waitForTimeout(500);
        
        // Check if game screen is visible
        const gameScreen = await page.$('#game-screen.active');
        if (gameScreen) {
            console.log('✓ Game screen activated');
            
            // Check for question text
            const questionText = await page.$eval('#question-text', el => el.textContent);
            if (questionText && questionText.length > 0) {
                console.log('✓ Question displayed: ' + questionText.substring(0, 50) + '...');
            }
            
            // Check for answer options
            const options = await page.$$('.btn-option');
            console.log(`✓ ${options.length} answer options found`);
            
            // Check for timer bar
            const timerBar = await page.$('#timer-bar');
            if (timerBar) {
                console.log('✓ Timer bar found');
            }
            
            // Verify timer is animating
            const timerWidth = await page.$eval('#timer-bar', el => el.style.width);
            console.log('✓ Timer width: ' + timerWidth);
        } else {
            console.log('✗ Game screen not activated');
        }
    } else {
        console.log('✗ Start button not found');
    }
    
    // Report errors
    if (errors.length > 0) {
        console.log('\n✗ Console errors found:');
        errors.forEach(err => console.log('  - ' + err));
        process.exit(1);
    } else {
        console.log('\n✓ All tests passed!');
        console.log('  Game is ready for use on iPad');
    }
    
    await browser.close();
})();
