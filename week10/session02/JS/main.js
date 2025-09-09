/******************************************************************************/
/******************************************************************************/
// #region variables
let user1 = {
    name: "mahmoud",
    age: 31,
    email: "mahmoudriad@gmail.com",
    phone: "01023258052",
};

let allUsers = [
    {name: "mahmoud", age: 31, email: "mahmoud@gmail.com", phone: "01015489896"},
    {name: "ahmed", age: 28, email: "ahmed@gmail.com", phone: "01015489896"},
    {name: "hosam", age: 30, email: "hosam@gmail.com", phone: "01015489896"},
    {name: "Zaki", age: 23, email: "Zaki@gmail.com", phone: "01015489896"},
    {name: "omar", age: 22, email: "omar@gmail.com", phone: "01015489896"},
    {name: "iman", age: 20, email: "iman@gmail.com", phone: "01015489896"},
    {name: "marte", age: 19, email: "marte@gmail.com", phone: "01015489896"},
];

let array1 = ["mahmoud", "islam", "mohamed", "aya", "nada"];

const products = [
    {
        title: "Bluetooth Headphones",
        description: "High-quality sound with noise cancellation and 20-hour battery life.",
        price: 79.99,
        onSale: true,
        amount: 42,
    },
    {
        title: "Stainless Steel Water Bottle",
        description: "Insulated 1L bottle that keeps drinks hot/cold for 24 hours.",
        price: 29.99,
        onSale: false,
        amount: 150,
    },
    {
        title: "Mechanical Keyboard",
        description: "RGB backlit gaming keyboard with cherry MX switches.",
        price: 129.99,
        onSale: true,
        amount: 0,
    },
    {
        title: "Yoga Mat",
        description: "Eco-friendly non-slip mat with carrying strap.",
        price: 34.99,
        onSale: false,
        amount: 75,
    },
    {
        title: "Smart Watch",
        description: "Fitness tracker with heart rate monitor and GPS.",
        price: 199.99,
        onSale: true,
        amount: 25,
    },
    {
        title: "Ceramic Coffee Mug Set",
        description: "Set of 4 handmade ceramic mugs with modern design.",
        price: 45.99,
        onSale: false,
        amount: 0,
    },
    {
        title: "Portable Power Bank",
        description: "10000mAh capacity with fast charging for all devices.",
        price: 49.99,
        onSale: true,
        amount: 88,
    },
    {
        title: "Desk Lamp - Wireless Charger",
        description: "LED lamp with adjustable brightness and Qi wireless charging base.",
        price: 89.99,
        onSale: false,
        amount: 30,
    },
    {
        title: "Wireless Phone Charger",
        description: "Fast charging pad compatible with all Qi-enabled devices.",
        price: 39.99,
        onSale: true,
        amount: 0,
    },
    {
        title: "Laptop Stand",
        description: "Aluminum adjustable stand for better ergonomics.",
        price: 59.99,
        onSale: false,
        amount: 45,
    },
    {
        title: "Wireless Earbuds",
        description: "True wireless earbuds with charging case and 30-hour battery life.",
        price: 89.99,
        onSale: true,
        amount: 0, // Out of stock
    },
    {
        title: "Organic Cotton T-Shirt",
        description: "100% organic cotton unisex t-shirt in various colors.",
        price: 24.99,
        onSale: false,
        amount: 125,
    },
    {
        title: "Gaming Mouse",
        description: "RGB gaming mouse with customizable DPI and programmable buttons.",
        price: 59.99,
        onSale: true,
        amount: 0, // Out of stock
    },
    {
        title: "Aromatherapy Diffuser",
        description: "Ultrasonic essential oil diffuser with color-changing LED lights.",
        price: 39.99,
        onSale: false,
        amount: 35,
    },
    {
        title: "Fitness Resistance Bands",
        description: "Set of 5 latex-free resistance bands for home workouts.",
        price: 29.99,
        onSale: true,
        amount: 0, // Out of stock
    },
    {
        title: "Leather Wallet",
        description: "Genuine leather bifold wallet with multiple card slots.",
        price: 49.99,
        onSale: false,
        amount: 68,
    },
    {
        title: "Smart Home Hub",
        description: "Voice-controlled hub compatible with all smart home devices.",
        price: 129.99,
        onSale: true,
        amount: 22,
    },
    {
        title: "Yoga Block Set",
        description: "Set of 2 high-density foam yoga blocks for support and balance.",
        price: 19.99,
        onSale: false,
        amount: 0, // Out of stock
    },
    {
        title: "Blender Bottle",
        description: "Shaker bottle with stainless steel whisk for protein shakes.",
        price: 14.99,
        onSale: true,
        amount: 200,
    },
    {
        title: "Desk Organizer",
        description: "Wooden desk organizer with compartments for pens, phones, and notebooks.",
        price: 34.99,
        onSale: false,
        amount: 42,
    },
];

// #endregion variables
/******************************************************************************/
/******************************************************************************/

/******************************************************************************/
/******************************************************************************/
// #region Functions
function viewSingleUserData(userinfo) {
    console.log(`All info for user "${userinfo.name}":-`);

    for (const key in userinfo) {
        console.log(`${key}: ${userinfo[key]}`);
    }
}

function viewAllUsersNames() {
    console.log("All Our Users Names:");
    let i = 0;
    let allUsersName = [];

    for (const user of allUsers) {
        // console.log(`${i++}-${user.name}`);
        allUsersName[i] = user.name;
        i++;
    }

    displayList(allUsersName);
}

function displayList(list) {
    list.forEach((item) => {
        console.log(item);
    });
}
function createCard(card, i) {
    let cardDesign = `
                            <div class="col-md-4">
                                <div class="card-item">
                                    <div class="inner rounded-4 py-4 px-1 shadow accent-bg text-my-bg">
                                            <div class="row justify-content-between">
                                                <div class="px-4 pb-2 d-flex align-items-center justify-content-between">
                                                    <span class="fw-bold fs-6 d-inline-block">${card.title}</span>
                                                    <span class="badge bg-info d-inline-block">index: ${i + 1}</span>
                                                </div>
                                            </div>                                        
                                            <div class="details">
                                                <p><b>Description: <br /></b>${card.description}</p>
                                                <p><b>Price: </b>${card.price}</p>
                                                <p><b>OnSale: </b><span class="text-success fw-bolder text-capitalize">${card.onSale}<span/></p>
                                                <p><b>Amount: </b>${card.amount}</p>
                                            </div>
                                    </div>
                                </div>
                            </div>

    `;
    document.getElementById("allCards").insertAdjacentHTML("beforeend", cardDesign);
}

function showProductsWithFilter(filter) {
    clearAllProducts();
    switch (filter) {
        case "onSale":
            for (const product of products) {
                if (product.onSale) createCard(product, products.indexOf(product));
            }
            break;
        case "available":
            for (const product of products) {
                if (product.amount > 0) {
                    createCard(product, products.indexOf(product));
                }
            }
            break;
        case "notAvaibale":
            for (const product of products) {
                if (product.amount <= 0) {
                    createCard(product, products.indexOf(product));
                }
            }
            break;
        default:
            for (const product of products) {
                createCard(product, products.indexOf(product));
            }
    }
}

function clearAllProducts() {
    document.getElementById("allCards").innerHTML = "";
}

// #endregion Functions
/******************************************************************************/
/******************************************************************************/

for (const key in user1) {
    // if(key == 'name') console.log(user1.name);
}

// this loop is for arrays
for (const item of array1) {
    console.log(item);
}

array1.forEach((item) => {
    // console.log(item);
});

viewAllUsersNames();
viewSingleUserData(user1);

/******************************************************************************/
/******************************************************************************/
// #region Array Methods

let array2 = ["mahmoud", "islam", "mohamed", "aya", "nada"];

array2.splice(array2.length, 0, "moaaz", "Israa", "mohamed", "Khalid");

console.log(array2, `\nlength of the arrya = ${array2.length}`);
console.log(array2.indexOf("mohamed"));

for (const product of products) {
    // console.log(products.indexOf(product));
}
array2.sort();
let arr = [11, 2, 22, 1, 30, 35, 100, 11, 8, 5, 9];
console.log(arr.sort((s, b) => s - b));

console.log(arr.toString());
console.log(arr.join("-"));

let str = "mahmoud";
console.log([...str].reverse().join(""));

console.log([...str].slice(1).join(""));

console.log([...str].includes("m"));
console.log([...str].join());
console.log(typeof arr.join("-"));

// #endregion Array Methods
/******************************************************************************/
/******************************************************************************/


/******************************************************************************/
/******************************************************************************/
// #region CRUD Operation



// #endregion CRUD Operation
/******************************************************************************/
/******************************************************************************/