import Page from './page.js';
class LoginPage extends Page{
    /**
     * define selectors using getter methods
     */

    get loginBtn () {
        return $('~Login');
    }

    get inputUsername () {
        return $('~input-email');
    }

    get inputPassword () {
        return $('~input-password');
    }

    get btnSubmit () {
        return $('~button-LOGIN');
    }

    get textLogged () {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickLoginBtn(){
        await this.loginBtn.click();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();

