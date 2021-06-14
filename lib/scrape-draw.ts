/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

// export default async function scrapeDraw({draw = '10'}: { draw?: string }) {
export default async function scrapeDraw({draw = 10}: { draw?: number }) {
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
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 800 });
  // await page.goto(url, { waitUntil: 'networkidle0' });
  // return await page.screenshot({ type: 'png' });

  let returnedData;


    const drawData = async (url: string, selector: string) => {
        await page.goto(url, {
            waitUntil: 'load'
        });

        try {
            await page.waitForSelector(selector, { timeout: 2500 })

            returnedData = await page.evaluate((selector) => {

                const programTitle = document.querySelectorAll(selector)[0].innerText
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                const invitations = (document.querySelectorAll(selector)[1].innerText).replace(/\D/gim, '');
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                const dateRound = (document.querySelectorAll(selector)[3].innerText).replace('Date and time of round: ', '')
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                const points = (document.querySelectorAll(selector)[4].innerText).replace(/\D/gim, '');
                const tieBrake = document.querySelectorAll(selector)[5].innerText

                const data = {
                    programTitle,
                    invitations,
                    dateRound,
                    points,
                    tieBrake
                }

                return data;
            }, selector);

            returnedData = {draw, ...returnedData}

            console.log(returnedData)
            return returnedData;

        } catch (error) {
            // console.log("The element didn't appear.")
            returnedData = {
                error: `invalid draw ${draw}`
            }
        }

        // console.log(returnedData)
        return returnedData;
    }

    // await browser.close();

    const url = `https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations-${draw}.html`
    return await drawData(url, '.well p')



}
