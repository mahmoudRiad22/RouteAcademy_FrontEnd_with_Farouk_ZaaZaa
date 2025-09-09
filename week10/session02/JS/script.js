let productNameInput = document.getElementById("ProductName");
let productPriceInput = document.getElementById("ProductPrice");
let productCategoryInput = document.getElementById("ProductCategory");
let productDescriptionInput = document.getElementById("ProductDescription");
let productImageInput = document.getElementById("ProductImage");

let productsList = [];

function addProduct() {
    // console.log(productNameInput.value);
    // console.log(productPriceInput.value);
    // console.log(productCategoryInput.value);
    // console.log(productDescriptionInput.value);
    // console.log(productImageInput.value);
    let product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value,
    };

    productsList.push(product);

    console.log(productsList);
}

function clearProduct() {}
