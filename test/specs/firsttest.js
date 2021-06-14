describe('Run test',() => {
    it('Launch browser Smoke',() => {
        browser.url('/loginpagePractise/')
        browser.pause(3500)
        browser.maximizeWindow()
        browser.pause(2500)
        $('#username').setValue('rahulshettyacademy')
        const password = $('#password')
        password.setValue('learning')
        browser.pause(3000)
        const btnSignIn = $('input[name="signin"]')
        btnSignIn.click()
    })
})