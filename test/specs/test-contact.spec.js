describe('Web Driver University -Contact Page', () => {
    
    beforeEach(async() => {
        await browser.maximizeWindow();
    });

    it('valid submission -submit all information', async() => {

        await browser.url('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        //firstname
        //lastname
        //email address
        //message
        //submit button
    });

    it('invalid submission -dont submit all information', () => {
        //firstname
        //lastname
        //email address
        //message
        //submit button
    });
});