class BillingPage{
    get productPrice(){
        return $$('tr td:nth-child(4) strong')
    }

    get totalPrice(){
        return $('h3 strong').getText()
    }

    sumOfProducts(){
        const sumOfProducts = this.productPrice.map(price => parseInt(price.getText().split(".")[1].trim()))
                    .reduce((acc,price) => acc + price,0)
        return sumOfProducts
    }

    totalFormattedPrice(){
        return parseInt(this.totalPrice.split('.')[1].trim())
    }
}

module.exports = new BillingPage()