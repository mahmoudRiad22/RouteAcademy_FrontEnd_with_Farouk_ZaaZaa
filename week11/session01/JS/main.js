/******************************************************************************/
/******************************************************************************/
// #region Variables

const productsBox = document.getElementById("productsBox");
const IMAGE_PATH = "./images/";
let allProducts = [];

// #endregion Variables
/******************************************************************************/
/******************************************************************************/

/******************************************************************************/
/******************************************************************************/
// #region Functions

//  Create functions
function storeProductInfo() {
    if (
        ProductName.value &&
        ProductPrice.value &&
        ProductCategory.value &&
        ProductDescription.value &&
        ProductImage.value
    ) {
        console.log(IMAGE_PATH + ProductImage.files[0].name);
        const fixedImagePath = IMAGE_PATH + ProductImage.files[0].name;
        const product = {
            name: ProductName.value,
            price: ProductPrice.value,
            category: ProductCategory.value,
            description: ProductDescription.value,
            image: fixedImagePath,
        };
        addToAllProductsList(product);
    } else {
        alert("Please Enter All Product Info");
    }
}

function renderDesignToHTML(design, target) {
    target.insertAdjacentHTML("beforeend", design);
    return;
}

function addToAllProductsList(product) {
    allProducts.push(product);
    sessionStorage.setItem("allProducts", JSON.stringify(allProducts));
    createAllProductsCards(allProducts);
}

function createAllProductsCards() {
    clearDesignAtTarget(productsBox);
    allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
    allProducts.forEach((product) => {
        createProductCard(product, allProducts.indexOf(product));
    });
    clearInputs();
}

function createProductCard(product, i) {
    const id = i;
    const productCardDesign = `
                            <div class="col-md-6 col-lg-4" id="${i}">
                                <div class="card-item">
                                    <div class="inner my-bg pb-3 rounded-3 overflow-hidden">

                                        <img style="height: 250px"  class="w-100 d-block" src="${product.image}"
                                            alt="imgi_19_08.jpg" />

                                        <div class="card-body my-3">

                                            <span class="badge bg-info d-inline-block mx-2 mb-2">index:
                                                ${i}</span>
                                            <p class="title">Name: ${product.name}</p>
                                            <p>Category: ${product.category}</p>
                                            <p>Description: ${product.description}</p>
                                            <p>Price: ${product.price}</p>

                                        </div>

                                        <div class="card-footer text-center">

                                            <button class="btn btn-outline-warning" type="button" 
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasScrolling${i}" 
                                                aria-controls="offcanvasScrolling${i}"
                                                onClick="editeProduct(${i})">
                                                <i class="fa-solid fa-pen-to-square"></i> Edite
                                            </button>


                                            <button type="button" class="btn mx-1 btn-outline-danger"
                                                onclick="removeProduct('${i}')">
                                                <i class="fa-solid fa-trash-can"></i> Delete
                                            </button>

                                            <div id="offCanvasBox${id}">

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

    `;
    renderDesignToHTML(productCardDesign, productsBox);
}

// Delete functions
function clearInputs() {
    ProductName.value = "";
    ProductPrice.value = "";
    ProductDescription.value = "";
    ProductCategory.value = "";
    ProductImage.value = "";
}
function clearDesignAtTarget(target) {
    target.innerHTML = "";

    return;
}
function clearAllProducts() {
    productsBox.innerHTML = "";
}

function removeProduct(id) {
    allProducts.splice(id, 1);
    sessionStorage.setItem("allProducts", JSON.stringify(allProducts));
    createAllProductsCards();
}

// Edite Functions
function editeProduct(id) {
    console.log("Editting product with id :>> ", id);
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
    const product = allProducts[id];
    const offCanvasBox = document.getElementById(`offCanvasBox${id}`);
    const offcanvasDesign = `
                                                <div class="offcanvas offcanvas-end text-bg-info w-50" data-bs-scroll="true"
                                                    data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling${id}"
                                                    aria-labelledby="offcanvasScrolling${id}Label">

                                                    <div class="offcanvas-header">

                                                        <h5 class="offcanvas-title" id="offcanvasScrolling${id}Label">
                                                            Edite Product: ${id}</h5>

                                                        <button type="button" class="btn-close "
                                                            data-bs-dismiss="offcanvas" aria-label="Close">
                                                        </button>
                                                    </div>

                                                    <div class="offcanvas-body">
                                                        <section class="CRUD operations Input mb-3">
                                                            <div class="container-fluid bg-info p-3 rounded-4">

                                                                
                                                                <div class="form-floating">
                                                                    <input class="form-control" placeholder=""
                                                                        type="text" id="newProductName"
                                                                        value="${product.name}" required>
                                                                    <label for="ProductName"> Product Name</label>
                                                                </div><br />

                                                                <div class="form-floating">
                                                                    <input class="form-control" placeholder=""
                                                                        type="number" name="ProductPrice"
                                                                        id="newProductPrice" value="${product.price}"
                                                                        required>
                                                                    <label for="ProductPrice">Product Price</label>
                                                                </div><br />

                                                                <div class="form-floating">
                                                                    <input class="form-control" placeholder=""
                                                                        type="text" name="ProductCategory"
                                                                        id="newProductCategory"
                                                                        value="${product.category}" required>
                                                                    <label for="ProductCategory">Product
                                                                        Category</label>
                                                                </div><br />

                                                                <div class="form-floating">
                                                                    <textarea style="height: 120px;"
                                                                        class="form-control" placeholder=""
                                                                        name="ProductDescription"
                                                                        id="newProductDescription" value=""
                                                                        required>${product.description}</textarea>
                                                                    <label for="ProductDescription">Product
                                                                        Description</label>
                                                                </div><br />

                                                                <div class=" rounded-5 overflow-hidden">
                                                                    <img style="" class="w-100 d-block"
                                                                        src="${product.image}" alt="" />
                                                                </div><br />

                                                                <div class="form-floating">
                                                                    <input class="form-control" placeholder=""
                                                                        type="file" name="newProductImage"
                                                                        id="newProductImage" value="${product.image}"
                                                                        required>
                                                                    <label for="ProductImage">Product Image</label>
                                                                </div><br />

                                                                <button class="btn btn-success" type="button"
                                                                    data-bs-toggle="offcanvs"
                                                                    data-bs-target="#offcanvasRight"
                                                                    aria-controls="offcanvasRight"
                                                                    onClick="saveChanges(${id})">
                                                                    Save Changes
                                                                </button>

                                                                <button class="btn btn-danger" type="button"
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#offcanvasRight"
                                                                    aria-controls="offcanvasRight"
                                                                    onClick="">
                                                                    Cancel
                                                                </button>

                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>

    `;
    renderDesignToHTML(offcanvasDesign, offCanvasBox);
}

function saveChanges(id) {
    const newProductName = document.getElementById("newProductName");
    const newProductPrice = document.getElementById("newProductPrice");
    const newProductCategory = document.getElementById("newProductCategory");
    const newProductDescription = document.getElementById("newProductDescription");
    const newProductImage = document.getElementById("newProductImage");
    const offCanvasHeader = document.getElementById("offCanvasHeader");
    let correctImagePath;
    if (
        newProductName.value &&
        newProductPrice.value &&
        newProductCategory.value &&
        newProductDescription.value
    ) {
        if (!(newProductImage.value == "")) {
            correctImagePath = IMAGE_PATH + newProductImage.files[0].name;
        } else {
            correctImagePath = allProducts[id].image;
        }

        const newProduct = {
            name: newProductName.value,
            price: newProductPrice.value,
            category: newProductCategory.value,
            description: newProductDescription.value,
            image: correctImagePath,
        };

        allProducts.splice(id, 1, newProduct); //update the product list
        sessionStorage.setItem("allProducts", JSON.stringify(allProducts));
        createAllProductsCards();
    } else {
        alert("Please Enter All Product Info");
    }
}

// Search Functions
function searchProducts() {
    let word = [];
    const searchInput = document.getElementById("searchInput");
    const char = searchInput.value.toLowerCase();
    word.push(char);

    if (word != "") searchByWord(word);
    else {
        console.warn("search is Epmty!!!");
        createAllProductsCards();
    }
}

function searchByWord(word) {
    clearAllProducts();
    allProducts.forEach((product, index) => {
        if (product.name.toLowerCase().includes(word)) {
            createProductCard(product, index);
        }
    });
}
function displaySearchedItem(itemList) {
    itemList.forEach((item) => {
        let index = allProducts.indexOf(item);
        clearAllProducts();
        createProductCard(item, index);
    });
}
// #endregion Functions
/******************************************************************************/
/******************************************************************************/

if (JSON.parse(sessionStorage.getItem("allProducts")) != null) {
    createAllProductsCards();
}
