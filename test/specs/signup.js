const LoginPage = require('../pageobjects/login.page')

describe('Login/Sign Up Form', () => {
    it('should signup with valid credentials', async () => {
        await LoginPage.signUp('testing123@mailnator.com', 'SuperSecretPassword!')
        await expect(LoginPage.popupSignupSuccessMessage).toBeExisting()
        await expect(LoginPage.popupSignupSuccessMessage).toHaveTextContaining('You successfully signed up!')
    })
})
