describe('add item to basket', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
        await browser.url("https://automationteststore.com/")
    });
    it("add specific 'skincare products' to basket & validate cart total", async() => {
        const skincareLinks = await $$("//a[contains(text(),'Skincare')]");
        await skincareLinks[1].click();
        await browser.pause(3000);
        
    });
});