import {test, chromium, firefox, expect} from "@playwright/test";
import { TIMEOUT } from "dns";
import { link } from "fs";

test(`Test to launch a browser`, async() => {
    const browser = await chromium.launch({headless: false, channel: 'chrome'});
    const browserContext = browser.newContext();
    const page = await (await browserContext).newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const title = await page.title();
    console.log(`Tilte of the page is ${title}`);
    
    await page.locator("input[class='inputLogin']").nth(0).fill("demosalesmanager");
 
    await page.locator("input[type='password']").fill("crmsfa");
    await page.locator("input[type='submit']").click();
    await page.getByText("CRM/SFA").click();
    await page.waitForTimeout(5000);
})