/******************************************************************************/
/******************************************************************************/
// #region Variables

const productsBox = document.getElementById("productsBox");
const IMAGE_PATH = "./images/";
let allProducts = [];
// sessionStorage.setItem('allProducts', JSON.stringify(allProducts));

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
        const correctImagePath = imagePathHandler(ProductImage.value);
        const product = {
            name: ProductName.value,
            price: ProductPrice.value,
            category: ProductCategory.value,
            description: ProductDescription.value,
            image: correctImagePath,
        };
        imagePathHandler(product.image);
        addToAllProductsList(product);
    } else {
        alert("Please Enter All Product Info");
    }
}

function renderDesignToHTML(design, target) {
    target.insertAdjacentHTML("beforeend", design);
    return;
}
function clearDesign(target) {
    target.innerHTML = "";

    return;
}
function addToAllProductsList(product) {
    allProducts.push(product);
    sessionStorage.setItem("allProducts", JSON.stringify(allProducts));
    createAllProductsCards();
}

function createAllProductsCards() {
    clearDesign(productsBox);
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
                                                data-bs-target="#offcanvasScrolling" 
                                                aria-controls="offcanvasScrolling"
                                                onClick="editeProduct(${i})">
                                                <i class="fa-solid fa-pen-to-square"></i> Edite</button>


                                            <button type="button" class="btn mx-1 btn-outline-danger"
                                                onclick="removeProduct('${i}')">
                                                <i class="fa-solid fa-trash-can"></i> Delete
                                            </button>                  
                                            <div id="offCanvasBox">
                                                

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

    `;
    // console.log("productCardDesign :>> ", productCardDesign);
    renderDesignToHTML(productCardDesign, productsBox);
}


function showProductsWithFilter(filter) {
    switch (filter) {
        default:
            createAllProductsCards();
    }
}

function clearInputs() {
    ProductName.value = "";
    ProductPrice.value = "";
    ProductDescription.value = "";
    ProductCategory.value = "";
    ProductImage.value = "";
}

function clearAllProducts() {
    productsBox.innerHTML = "";
}

function removeProduct(id) {
    allProducts.splice(id, 1);
    sessionStorage.setItem("allProducts", JSON.stringify(allProducts));
    createAllProductsCards();
}

function editeProduct(id) {
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
    const product = allProducts[id];
    const correctImagePath = imagePathHandler(product.image);
    const offCanvasBox = document.getElementById("offCanvasBox");
    const offcanvasDesign = `
                                                <div class="offcanvas offcanvas-end" data-bs-scroll="true"
                                                    data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling"
                                                    aria-labelledby="offcanvasScrollingLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                                                            Edite Product: ${id}</h5>
                                                        <button type="button" class="btn-close"
                                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        <section class="CRUD operations Input mb-3">
                                                            <div class="container-fluid bg-info p-3 rounded-4">
                                                                <!-- <h4 class="text-center text-black fw-bold mb-4">CRUD
                                                                    Operation</h4> -->
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
                                                                    <img style="height: 250px" class="w-100 d-block"
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
                                                                    onClick="saveChanges(${id})">Save Changes</button>
                                                                <button class="btn btn-danger" type="button"
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#offcanvasRight"
                                                                    aria-controls="offcanvasRight"
                                                                    onClick="">Cancel</button>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>

    `;

    // offCanvasBox.innerHTML = offcanvasDesign;
    renderDesignToHTML(offcanvasDesign, offCanvasBox);
}

function imagePathHandler(imagePath) {
    let imageName = imagePath.slice(imagePath.lastIndexOf("\\") + 1);
    const correctImagePath = IMAGE_PATH + imageName;

    return correctImagePath;
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
            correctImagePath = imagePathHandler(newProductImage.value);
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

// #endregion Functions
/******************************************************************************/
/******************************************************************************/

console.log('sessionStorage.getItem("allProducts") :>> ', 
    JSON.parse(sessionStorage.getItem("allProducts")));
if (JSON.parse(sessionStorage.getItem("allProducts")) != null) {
    createAllProductsCards();
}

// // Listen for all offcanvas show events
// document.addEventListener("show.bs.offcanvas", function (event) {
//     if (event.target.id === "offcanvasScrolling") {
//         // Get the button that triggered the offcanvas
//         const button = event.relatedTarget;
//         const index = button.dataset.index;
//         editeProduct(index);
//     }
// });
