class Product {
    constructor(name, price, amount){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }

    addProduct(extraQuantity){
        this.amount += extraQuantity;
    }
}

class Customer{
    constructor(name, quantityOfProducts){
        this.name = name;
        this.quantityOfProducts = quantityOfProducts;
    }

    buyProduct(product, quantity){
        if(product.amount > quantity){
            product.amount -= quantity;
        }
        else {
            console.log('Out of product');
            return;
        }
    }
}

let shirt = new Product('shirt', 300000, 20);
shirt.addProduct(10);
console.log(shirt.amount, 'Amount product');

let customer1 = new Customer('customer1', 0);
customer1.buyProduct(shirt, 4);
console.log(customer1.quantityOfProducts, 'Quantity of product customer');
console.log(shirt.amount, 'Amount product after customer buy');