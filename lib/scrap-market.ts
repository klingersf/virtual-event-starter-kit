import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export default async function scrapMarket() {
    const options = process.env.AWS_REGION
        ? {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless
        }
        : {
            args: [],
            executablePath:
                process.platform === 'win32'
                    ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
                    : process.platform === 'linux'
                    ? '/usr/bin/google-chrome'
                    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        };
    const browser = await puppeteer.launch(options);
    // const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    const scraper = async (url: any) => {
        await page.goto(url, {waitUntil: "domcontentloaded"});
        const dataResult = await page.evaluate(() => {
            let marketValue;
            let marketVariation;
            let marketChange;

            function getMarketValue() {
                let text = document.querySelector('strong.value').innerText;
                marketValue = text.trim();
            }

            function getMarketVariation() {
                let text = document.querySelectorAll('strong.value')[3].innerText;
                marketVariation = text.trim();
            }

            function getMarketChange() {
                let text = document.querySelector('strong.value').innerText;
                marketChange = text.trim();
            }

            function getData() {
                getMarketValue();
                getMarketVariation();
                getMarketChange();
            }

            getData();
            return {marketValue, marketVariation, marketChange};
        });
        return dataResult;
    }

    const dataScrap = {
        ibov: await scraper("https://statusinvest.com.br/indices/ibovespa"),
        sp500: await scraper("https://statusinvest.com.br/indices/eua/sp-500"),
    }

    console.log(dataScrap)

    return dataScrap;

    await browser.close();

    // const page = await browser.newPage();
    // await page.goto(url, { waitUntil: 'networkidle0' });
    // return await page.screenshot({ type: 'png' });
}