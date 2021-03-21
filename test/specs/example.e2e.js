import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('fifiti7257@gameqo.com') ;
        LoginPage.setPassword('GZ12345');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });
});


