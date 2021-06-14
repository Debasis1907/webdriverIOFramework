class ShopPage{

    get lnkCheckout(){
        return $('*=Checkout')
    }

    get cards(){
        return $$('.card')
    }

    addProductToCart(products){
        this.cards.filter(item => products.includes(item.$('h4 a').getText())).map(productcart => productcart.$('.btn-info').click())
    }
}

module.exports = new ShopPage()