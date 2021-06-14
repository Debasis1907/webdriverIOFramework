const expectChai = require('chai').expect
const loginPage = require('../pageobjects/loginPage')
const shopPage = require('../pageobjects/shopPage')
const billingPage = require('../pageobjects/billingPage')
const fs = require('fs')
let data = JSON.parse(fs.readFileSync('test/testData/TestData.json'))

describe('ECommerce Application',() => {
    //credentials.forEach()
    it('End to End Test',() => {
        //var products = ["Blackberry","Nokia Edge"]
        browser.url('/loginpagePractise/')
        browser.maximizeWindow()
        browser.pause(2500)
        console.log(data.credentials[0].username)
        console.log(data.credentials[0].password)
        loginPage.Login(data.credentials[0].username,data.credentials[0].password)
        browser.pause(3000)
        //shopPage.lnkCheckout.waitForDisplayed()
        //shopPage.lnkCheckout.waitForExist()
        console.log(data.products)
        shopPage.addProductToCart(data.products)
        shopPage.lnkCheckout.click()
        const sumOfProduct = billingPage.sumOfProducts()
        const totalPrice = billingPage.totalFormattedPrice()
        expectChai(sumOfProduct).to.equal(totalPrice)
        $('.btn-success').click()
        $('#country').setValue('Ind')
        $('lds-ellipsis').waitForExist({reverse:true})
        $('=India').click()
        $('[type="submit"]').click()
        expect($('.alert-success')).toHaveTextContaining('Success')
        
        
    })
})