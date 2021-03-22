import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach(()=>{
        LoginPage.open();//page open
    });
        afterEach( ()=> {
            browser.execute ('window.localStorage.clear()');//clear cookies before every test
        });
        // browser.execute ('window.localStorage.clear()');//clear cookies before every test
        // browser.refresh();//refresh no need because added afterEach clear cookies

    it('user logs in with valid data', () => {
        LoginPage.setLogin('fifiti7257@gameqo.com') ;
        LoginPage.setPassword('GZ12345');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();//refresh needed here otherwise test will look for button at user page

    });
    it('submit button is disabled if log in and password are absent',()=>{
        LoginPage.submitButtonIsDisabled();
    });
    it('auth fails if invalid date entered',()=>{
        LoginPage.setLogin('example@example.com') ;
        LoginPage.setPassword('12345');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();

    });
    it('auth fails if log in deleted',()=>{
        LoginPage.setLogin('fifiti7257@gameqo.com') ;
        LoginPage.setPassword('GZ12345');
        LoginPage.setLogin();
        LoginPage.clickSubmitButton();
        LoginPage.errorFieldIsRequired();

    });
    it('auth fails if password deleted',()=>{
        LoginPage.setLogin('fifiti7257@gameqo.com') ;
        LoginPage.setPassword('GZ12345');
        LoginPage.setPassword();
        LoginPage.clickSubmitButton();
        LoginPage.errorFieldIsRequired();

    });

});