const {Button, Input} = require('../elements') 

class EditUserData {
    constructor() {
        this.editProfilButton = new Button ('//button[contains(@class, "styles_edit")]');
        this.userName = new Input ('//input[contains(@placeholder, "Name")]');
        this.userSurname = new Input ('//input[contains(@placeholder, "Surname")]');
        this.birthDateField = new Input ('//input[contains(@name, "birthdate")]'); 
        this.emailField = new Input ('input[name="email"]'); 
        this.phonelField = new Input ('input[name="phone"]'); 

        this.genderSelect = new Button ('//form/div[5]/span/label/div/div[contains(@class, "selectStyles__control")]');
        this.statusField = new Button ('//form/div[9]/span/label/div/div[contains(@class, "selectStyles__control")]');

        this.ddlOption = new Button ('div.selectStyles__option=TEXT_TO_REPLACE');

        this.editButton = new Button ('//form/div[10]/button[text()="Edit"]');
    }

    async editData({name, surname, gender, birthDate, email, phone, status}) {
        await this.editProfilButton.click();
        await this.userName.setValue(name);
        await this.userSurname.setValue(surname);
        await this.genderSelect.click(); 
        await this.ddlOption.clickByText(gender);
        await this.birthDateField.clearInput();
        await this.birthDateField.setValue(birthDate);
        await this.phonelField.setValue(phone);
        await this.emailField.setValue(email);
        await this.statusField.click()
        await this.ddlOption.clickByText(status)
        await this.editButton.click();
    }
}

module.exports = { EditUserData };