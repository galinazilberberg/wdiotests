import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast() { return $('.ant-notification-notice-message');}
    get fieldRequired() { return $('[role="alert"]')}

    open () {
        return super.open('/');
    }
    setLogin (email){
        this.inputUsername.setValue(email);
    }
    setPassword(password){
        this.inputPassword.setValue(password);
    }
    clickSubmitButton(){
        this.buttonSubmit.click();
    }
    submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }
     errorToastAppeared(){
            expect(this.errorToast).toBeDisplayed();
        }
    errorFieldIsRequired(){
        expect(this.fieldRequired).toBeDisplayed();
    }
    errorFieldIsRequired(){
        expect(this.fieldRequired).toBeDisplayed();
    }
    }
export default new LoginPage();


