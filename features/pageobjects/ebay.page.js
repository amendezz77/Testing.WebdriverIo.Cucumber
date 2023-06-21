import Page from './page.js';
class EbayPage extends Page{


    get inputSearch() {
        return $('//android.widget.EditText[@resource-id="kw"]');
    }

    get btnSearch() {
        return $('//android.widget.Button[@text="Buscar"]');
    }

    get btnClosed() {
        return $('~Close');
    }

    get getResult() {
        return $('//*[contains(@text,"resultados")]');
    }


    async searchPilas(){
        await this.inputSearch.click();
        await this.inputSearch.setValue('Pilas');
        await this.btnSearch.click();
        await this.btnClosed.click();
    }

    async getResultTotal(){
        const resultText = await this.getResult.getText();
        console.log("que traeeeeeee", await regexResult)
        const regexResult = new RegExp("\\d");
        console.log("Esto devuelve el numero de items", await resultText.match(regexResult));
    }
}
export default new EbayPage();