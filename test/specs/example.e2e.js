import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    });

    it('should be log out and verify by alert message',()=>{
    const btnLogout = $('a[href="/logout]');
    const flashAlert = $('#flash');

    btnLogout.click();

        expect(flashAlert).toHaveTextContaining('You Logged out of the area');
    });
})


