class LoginPage{

    get username(){
        return $('#username')
    }
    get password(){
        return $('#password')
    }
    get signIn(){
        return $('input[name="signin"]')
    }

    Login(username,password){
        this.username.setValue(username)
        this.password.setValue(password)
        this.signIn.click()
    }
}
module.exports = new LoginPage()