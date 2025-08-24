/******************************************************************************/
/******************************************************************************/
// #region Variables
const ProductName = document.getElementById("ProductName");
const ProductPrice = document.getElementById("ProductPrice");
const ProductCategory = document.getElementById("ProductCategory");
const ProductDescription = document.getElementById("ProductDescription");
const ProductImage = document.getElementById("ProductImage");

const productsSection = document.getElementById("productsBox");

let allProducts = [];
// #endregion Variables
/******************************************************************************/
/******************************************************************************/

/******************************************************************************/
/******************************************************************************/
// #region Functions

function storeProductInfo() {
    if (
        ProductName.value &&
        ProductPrice.value &&
        ProductCategory.value &&
        ProductDescription.value &&
        ProductImage.value
    ) {
        const product = {
            name: ProductName.value,
            price: ProductPrice.value,
            category: ProductCategory.value,
            description: ProductDescription.value,
            image: ProductImage.value,
        };
        return product;
    } else {
        alert("Please Enter All Product Info");
        throw new Error("No Product Info");
    }
}
function addToAllProductsList() {
    let product = storeProductInfo();

    allProducts.push(product);
    createAllProductsCards();
}

function showProductsWithFilter(filter) {
    switch (filter) {
        default:
            createAllProductsCards();
    }
}

function createAllProductsCards() {
    clearAllProducts();
    for (const product of allProducts) {
        createProductCard(product, allProducts.indexOf(product));
    }
    console.log(allProducts.length);
    clearInputs();
}

function createProductCard(product, i) {
    const productCardDesign = `
                                <div class="col-md-6 col-lg-4" id="${i}">
                                <div class="card-item">
                                    <div class="inner my-bg pb-3 rounded-3 overflow-hidden">
                                        <img class="w-100 d-block" src="./images/images3/imgi_19_08.jpg"
                                            alt="imgi_19_08.jpg" />
                                        <div class="card-body my-3">
                                            <span class="badge bg-info d-inline-block mx-2 mb-2">index:
                                                ${i}</span>
                                            <p class="title">Title: ${product.name}</p>
                                            <p>Category: ${product.category}</p>
                                            <p>Description: ${product.description}</p>
                                            <p>Price: ${product.price}</p>
                                        </div>
                                        <div class="card-footer text-center">
                                            <button class="btn btn-outline-warning" type="button"
                                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                                aria-controls="offcanvasRight" onClick="editeProduct(${i})">
                                                
                                                <i class="fa-solid fa-pen-to-square"></i> Edite</button>
                                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                                                aria-labelledby="offcanvasRightLabel">
                                                
                                            </div>
                                            <button type="button" class="btn mx-1 btn-outline-danger" onclick="removeProduct('${i}')">
                                                <i class="fa-solid fa-trash-can"></i> Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

    `;
    productsSection.insertAdjacentHTML("beforeend", productCardDesign);
    clearInputs();
}

function clearAllProducts() {
    productsSection.innerHTML = "";
}

function removeProduct(id) {
    allProducts.splice(id, 1);
    createAllProductsCards();
}

function editeProduct(id) {
    const product = allProducts[id];
    const offCanvasBox = document.getElementById("offcanvasRight");
    const offcanvasDesign = `
    
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Edite Product${id}
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body" id="offCanvasBox">
                                                    <section class="CRUD operations Input mb-3">
                                                        <div class="container-fluid bg-info p-3 rounded-4">
                                                            <!-- <h4 class="text-center text-black fw-bold mb-4">CRUD
                                                                Operation</h4> -->

                                                            <div class="form-floating">
                                                                <input class="form-control" placeholder="" type="text"
                                                                    id="newProductName" value="${product.name}" required>
                                                                <label for="ProductName"> Product Name</label>
                                                            </div><br />

                                                            <div class="form-floating">
                                                                <input class="form-control" placeholder="" type="number"
                                                                    name="ProductPrice" id="newProductPrice" value="${product.price}" required>
                                                                <label for="ProductPrice">Product Price</label>
                                                            </div><br />

                                                            <div class="form-floating">
                                                                <input class="form-control" placeholder="" type="text"
                                                                    name="ProductCategory" id="newProductCategory" value="${product.category}" required>
                                                                <label for="ProductCategory">Product Category</label>
                                                            </div><br />

                                                            <div class="form-floating">
                                                                <textarea style="height: 120px;" class="form-control"
                                                                    placeholder="" name="ProductDescription"
                                                                    id="newProductDescription" value="" required>${product.description}</textarea>
                                                                <label for="ProductDescription">Product
                                                                    Description</label>
                                                            </div><br />

                                                            <div class="form-floating">
                                                                <input class="form-control" placeholder="" type="file"
                                                                    name="newProductImage" id="newProductImage" value="${product.image}" required>
                                                                <label for="ProductImage">Product Image</label>
                                                            </div><br />

                                                            
                                                            <button class="btn btn-success" type="button"
                                                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                                                aria-controls="offcanvasRight" onClick="saveChanges(${id})">Save Changes</button>
                                                            <button class="btn btn-danger" type="button"
                                                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                                                aria-controls="offcanvasRight" onClick="">Cancel</button>
                                                            
                                                        </div>
                                                    </section>
                                                </div>
    `;

    offCanvasBox.innerHTML = offcanvasDesign;
}

function saveChanges(id) {
    const newProductName = document.getElementById("newProductName");
    const newProductPrice = document.getElementById("newProductPrice");
    const newProductCategory = document.getElementById("newProductCategory");
    const newProductDescription = document.getElementById("newProductDescription");
    const newProductImage = document.getElementById("newProductImage");

    const newProduct = {
        name: newProductName.value,
        price: newProductPrice.value,
        category: newProductCategory.value,
        description: newProductDescription.value,
        image: newProductImage.value,
    };

    if (true) {
        alert("Please Enter All Product Info");
        // throw new Error("No Product Info");
        editeProduct(id);
    }

    // console.log(newProduct);
    console.log(`allProducts.length = ${allProducts.length}`);
    allProducts.splice(id, 1, newProduct); //update the product list
    console.log(`allProducts.length = ${allProducts.length}`);
    console.log(allProducts[id]);
    createAllProductsCards();
}

function clearInputs() {
    ProductName.value = "";
    ProductPrice.value = "";
    ProductDescription.value = "";
    ProductCategory.value = "";
    ProductImage.value = "";
}
// #endregion Functions
/******************************************************************************/
/******************************************************************************/
