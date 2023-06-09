import Page from './page.js';

class ChromePage extends Page{

    get btnUsarSinCuenta() {
        return $('//android.widget.Button[@resource-id="com.android.chrome:id/signin_fre_dismiss_button"]');
    }

    get inputBuscador() {
        return $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]');
    }

    get inputSearchType() {
        return $('//android.widget.EditText[@resource-id="com.android.chrome:id/url_bar"]');
    }

    get resultEbay() {
        return $('//android.widget.TextView[@resource-id="com.android.chrome:id/line_1"]');
    }

    async navegateSearchEbay(){
        await this.btnUsarSinCuenta.click();
        await this.inputBuscador.click();
        await this.inputSearchType.setValue('http://www.ebay.com');
        await this.resultEbay.click();
    }
}

export default new ChromePage();