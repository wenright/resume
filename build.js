const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///' + __dirname + '/index.html', {
    // Allows downloading of Google fonts
    waitUntil: 'networkidle0'
  });
  await page.pdf({path: 'resume.pdf', printBackground: true});

  await browser.close();
})();
