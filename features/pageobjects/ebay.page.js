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
        return $('//*[contains(@text,"+ resultados")]');
    }


    async searchPilas(){
        await this.inputSearch.click();
        await this.inputSearch.setValue('Pilas');
        await this.btnSearch.click();
        await this.btnClosed.click();
    }

    async getNumbersInString(string) {
        const tmp = string.split("");
        const map = tmp.map(function(current) {
          if (!isNaN(parseInt(current))) {
            return current;
          }
        });
      
        const numbers = map.filter(function(value) {
          return value != undefined;
        });
      
        return numbers.join("");
      }

    async getResultTotal(){
        const resultText = await this.getResult.getText();
        const getNumber = await this.getNumbersInString(resultText)
        console.log("Esto devuelve el numero de items", getNumber);
    }
}
export default new EbayPage();