const { expect } = require('chai');
const { App } = require('../src/pages');

//[x] Залогиниться (tester.test7487@gmail.com, qaz321)
//[x] Перейти на страницу My Profile (http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db)
//[x] Нажать кнопку Edit
//[x] Изменить имя на Kate
//[x] Нажать кнопку Edit
//[x] Проверить результат 

//[x] Залогиниться (tester.test7487@gmail.com, qaz321)
//[x] Перейти на страницу My Profile (http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db)
//[x] Нажать кнопку Edit
//[x] Изменить фамилию на Petrova
//[x] Нажать кнопку Edit
//[x] Проверить результат 

//[x] Залогиниться (tester.test7487@gmail.com, qaz321)
//[x] Перейти на страницу My Profile (http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db)
//[x] Нажать кнопку Edit
//[x] Изменить гендр на female
//[x] Нажать кнопку Edit
//[x] Проверить результат 

//[x] Залогиниться (tester.test7487@gmail.com, qaz321)
//[x] Перейти на страницу My Profile (http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db)
//[x] Нажать кнопку Edit
//[x] Изменить дату рождения
//[x] Нажать кнопку Edit

//[x] Залогиниться (tester.test7487@gmail.com, qaz321)
//[x] Перейти на страницу My Profile (http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db)
//[x] Нажать кнопку Edit
//[x] Изменить email (с tester.test7487@gmail.com на tester.test7488@gmail.com)
//[x] Нажать кнопку Edit
//[x] Проверить результат 

//[x] Залогиниться (tester.test7488@gmail.com, qaz321)
//[x] Перейти на страницу My Profile (http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db)
//[x] Нажать кнопку Edit
//[x] Изменить номер телефона (c 3809312345678 на 3809312345677)
//[x] Нажать кнопку Edit
//[x] Проверить результат 

//[x] Залогиниться (tester.test7488@gmail.com, qaz321)
//[x] Перейти на страницу My Profile (http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db)
//[x] Нажать кнопку Edit
//[x] Изменить статус (с врача на пациента)
//[x] Нажать кнопку Edit
//[x] Проверить результат 

const app = new App();

describe ('Change user profile data', function () {
    beforeEach(async function (){
        await browser.setWindowSize(1441, 960);
        await browser.url('/sign-in');

        await app.signInPage.signIn ({
            email: 'tester.test7487@gmail.com', 
            password: 'qaz321',
          });

        await browser.pause(2000);
        await browser.url('/user-profile/9b39f370-c10c-4512-9e24-bce373c799db');
        await browser.pause(2000);
      });  
    
      afterEach(async function (){
        await browser.reloadSession();
      });  

  it('shoud be able change user profile data', async function () {   

    await app.editUserData.editData ({
        name: 'Kate',
        surname: 'Petrova', 
        gender: 'female',
        birthDate: '05/15/1992',
        email:'tester.test7488@gmail.com', 
        phone: '3809312345677',
        status: 'patient',
      });

        await browser.waitUntil(async function() {
            const url = await browser.getUrl();
            return url === 'http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db';
        },
        { timeout:5000 }
        );

       const url = await browser.getUrl(); 
       expect(url).to.be.eql('http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db');
       const checkChange = await $('//span[contains(@class, "styles_name__2vTNE")]');
       expect(await checkChange.getText()).to.equal('Kate Petrova');
    });

 
  xit('shoud be able change gender', async function () {   

      

        const maleFemale = await $('//form/div[5]/span/label/div/div[contains(@class, "selectStyles__control")]');
        const genderSelect = await $('div.selectStyles__option=female');
        const editButton = await $('//form/div[10]/button[text()="Edit"]');

        await maleFemale.waitForDisplayed({ timeout: 5000 });
        await maleFemale.click();
        await genderSelect.waitForDisplayed({ timeout: 5000 });
        await genderSelect.click();
        await editButton.waitForDisplayed({ timeout: 5000 });
        await editButton.click();

        await browser.pause(2000);

        await browser.waitUntil(async function() {
            const url = await browser.getUrl();
            return url === 'http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db';
        },
        { timeout:5000 }
        );

       const url = await browser.getUrl(); 
       expect(url).to.be.eql('http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db');
       const checkChange = await $('//span[contains(@class, "styles_sex__sjUSu")]');
       expect(await checkChange.getText()).to.equal('female');

    });

  xit('shoud be able change birth date', async function () {   

      const userEmailEdit = await $('//input[contains(@name, "email")]');
      const editButton = await $('//form/div[10]/button[text()="Edit"]'); 

      await birthDateField.waitForDisplayed({ timeout: 5000 });
      await birthDateField.click(); 

      browser.keys(['Control', 'a', 'Backspace']);

      await birthDateField.waitForDisplayed({ timeout: 5000 });
      await birthDateField.setValue('05/15/1992');

      await userEmailEdit.waitForDisplayed({ timeout: 5000 });
      await userEmailEdit.click();
      await editButton.waitForDisplayed({ timeout: 5000 });
      await editButton.click();

      await browser.pause(2000);
   
      await browser.waitUntil(async function() {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db';
      },
      { timeout:5000 }
      );

     const url = await browser.getUrl(); 
     expect(url).to.be.eql('http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db');
     const checkChange = await $('//span[contains(@class, "styles_date__2rFkK")]');
     expect(await checkChange.getText()).to.equal('15 May 1992');

  });

  xit('shoud be able change email', async function () {   

    const emailField = await $('input[name="email"]'); 
    const editButton = await $('//form/div[10]/button[text()="Edit"]');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('tester.test7488@gmail.com');
    await editButton.waitForDisplayed({ timeout: 5000 });
    await editButton.click();

    await browser.pause(2000);

    await browser.waitUntil(async function() {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db';
    },
    { timeout:5000 }
    );

   const url = await browser.getUrl(); 
   expect(url).to.be.eql('http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db');
   const checkChange = await $('//div/div[2]/div[3]/div[2]/a[contains(@href, "mailto")]');
   expect(await checkChange.getText()).to.equal('tester.test7488@gmail.com');

   await browser.reloadSession();
});

  xit('shoud be able change phone', async function () {   
  

  const phonelField = await $('input[name="phone"]'); 
  const editButton = await $('//form/div[10]/button[text()="Edit"]');

  await phonelField.waitForDisplayed({ timeout: 5000 });
  await phonelField.setValue('3809312345677');
  await editButton.waitForDisplayed({ timeout: 5000 });
  await editButton.click();
  
  await browser.pause(2000);

  await browser.waitUntil(async function() {
      const url = await browser.getUrl();
      return url === 'http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db';
  },
  { timeout:5000 }
  );

 const url = await browser.getUrl(); 
 expect(url).to.be.eql('http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db');
 const checkChange = await $('//div/div[2]/div[3]/div/a[contains(@href, "tel")]');
 expect(await checkChange.getText()).to.equal('3809312345677');

});

  xit('shoud be able change status', async function () {   

  const statusField = await $('//form/div[9]/span/label/div/div[contains(@class, "selectStyles__control")]');
  const statusSelect = await $('div.selectStyles__option=patient');
  const editButton = await $('//form/div[10]/button[text()="Edit"]');

  await statusField.waitForDisplayed({ timeout: 5000 });
  await statusField.click();
  await statusSelect.waitForDisplayed({ timeout: 5000 });
  await statusSelect.click();
  await editButton.waitForDisplayed({ timeout: 5000 });
  await editButton.click();

  await browser.pause(2000);

  await browser.waitUntil(async function() {
      const url = await browser.getUrl();
      return url === 'http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db';
  },
  { timeout:5000 }
  );

 const url = await browser.getUrl(); 
 expect(url).to.be.eql('http://46.101.234.121/user-profile/9b39f370-c10c-4512-9e24-bce373c799db');
 const checkChange = await $('//div[contains(@class, "styles_card__3sdTL")]');
 expect(await checkChange.getText()).to.equal('patient');

 });
});