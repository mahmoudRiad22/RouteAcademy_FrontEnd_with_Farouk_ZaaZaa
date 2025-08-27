// const websites = [
//     {
//         name: "Google",
//         url: "https://www.google.com",
//     },
//     {
//         name: "YouTube",
//         url: "https://www.youtube.com",
//     },
//     {
//         name: "Facebook",
//         url: "https://www.facebook.com",
//     },
//     {
//         name: "Twitter",
//         url: "https://www.twitter.com",
//     },
//     {
//         name: "Instagram",
//         url: "https://www.instagram.com",
//     },
//     {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com",
//     },
//     {
//         name: "GitHub",
//         url: "https://www.github.com",
//     },
//     {
//         name: "Netflix",
//         url: "https://www.netflix.com",
//     },
//     {
//         name: "Amazon",
//         url: "https://www.amazon.com",
//     },
//     {
//         name: "Wikipedia",
//         url: "https://www.wikipedia.org",
//     },
//     {
//         name: "Reddit",
//         url: "https://www.reddit.com",
//     },
//     {
//         name: "Discord",
//         url: "https://www.discord.com",
//     },
//     {
//         name: "Spotify",
//         url: "https://www.spotify.com",
//     },
//     {
//         name: "Stack Overflow",
//         url: "https://stackoverflow.com",
//     },
//     {
//         name: "MDN Web Docs",
//         url: "https://developer.mozilla.org",
//     },

// ];

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
let websites;

// Create
function createRow(website, index) {
    // console.log(`websites.name :>> ${website.name} \n website.index :>> ${index}`);
    const tBody = document.getElementById("tBody");

    const rowDesign = `
<tr>
    <th scope="row">${index + 1}</th>
    <td>${website.name}</td>
    <td>
        <a href="${website.url}" target="_blank" class="btn btn-success visite-btn border-0">
            <i class="fa-solid fa-eye"></i> Visite
        </a>
    </td>
    <td>
        <button class="btn btn-success delete-btn border-0" 
        onClick="deleteRow(${index})">
            <i class="fa-solid fa-trash"></i> Delete
        </button>
    </td>
</tr>
`;

    tBody.innerHTML += rowDesign;
}

function createAllRows(websites) {
    tBody.innerHTML = "";
    for (const website of websites) {
        createRow(website, websites.indexOf(website));
    }
}
// delete
function deleteRow(index) {
    // console.log("index-1 :>> ", index - 1);
    websites.splice(index, 1); // delete at index
    updateSessionStorage(websites);

    let webs = loadSessionSotrage();
    // console.log("webs :>> ", webs);
    createAllRows(loadSessionSotrage());
}

function submitInput() {
    const websiteName = document.getElementById("websiteName")
        ? document.getElementById("websiteName")
        : "";
    const websiteUrl = document.getElementById("websiteUrl")
        ? document.getElementById("websiteUrl")
        : "";

    const website = {
        name: websiteName.value ? websiteName.value : "Error404",
        url: websiteUrl.value ? websiteUrl.value : "Error404",
    };
    if (validateInput(website)) {
        saveData(website);
        clearInputs();
    } else {
        document.getElementById("modalTriger").click();
    }
}

function validateInput(website) {
    const urlRegExp = /^https?:\/\/(?:www\.)?[a-z0-9-]+\.[a-z]{2,}(?:\/[^\s]*)?$/i; // must be valid url
    const nameRegExp = /^.{3,50}$/; // min 3char max

    if (nameRegExp.test(website.name)) {
        if (urlRegExp.test(website.url)) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

function saveData(website) {
    if (loadSessionSotrage() == null) {
        websites = [];
        websites.push(website)
        // console.log("websites.length :>> ", websites.push(website));
    } else {
        websites = JSON.parse(sessionStorage.getItem("websites"));
        websites.push(website)
        // console.log("websites.length :>> ", websites.push(website));
    }

    updateSessionStorage(websites);
    createAllRows(websites);
}
function displayAlert(websiteName, websiteUrl) {
    Swal.fire({
        icon: "error",
        title: "ERROR",
    });
    websiteName.value = "";
    websiteUrl.value = "";
}

function checkNameInput() {
    const websiteName = document.getElementById("websiteName")
        ? document.getElementById("websiteName")
        : "";
    const nameRegExp = /^.{3,50}$/; // min 3char max
    console.log("websiteName :>> ", websiteName.value);
    if (nameRegExp.test(websiteName.value)) {
        console.log("valid:", websiteName.value);
        websiteName.classList.remove("is-invalid");
        websiteName.classList.add("is-valid");
    } else {
        console.log("invalid:", websiteName.value);

        websiteName.classList.remove("is-valid");
        websiteName.classList.add("is-invalid");
    }
}
function checkUrlInput() {
    const websiteUrl = document.getElementById("websiteUrl")
        ? document.getElementById("websiteUrl")
        : "";
    const urlRegExp = /^https?:\/\/(?:www\.)?[a-z0-9-]+\.[a-z]{2,}(?:\/[^\s]*)?$/i; // must be valid url
    // console.log('websiteUrl :>> ', websiteUrl.value);
    if (urlRegExp.test(websiteUrl.value)) {
        // console.log("valid:",websiteUrl.value);
        websiteUrl.classList.remove("is-invalid");
        websiteUrl.classList.add("is-valid");
    } else {
        console.log("invalid:", websiteUrl.value);
        websiteUrl.classList.remove("is-valid");
        websiteUrl.classList.add("is-invalid");
    }
}

function updateSessionStorage(websites) {
    sessionStorage.setItem("websites", JSON.stringify(websites));
}
function loadSessionSotrage() {
    const  loadSessionSotrage = JSON.parse(sessionStorage.getItem('websites'));
    // console.log('loadSessionStorage :>> ', loadSessionSotrage);
    return loadSessionSotrage; // : string or null
}
function checkSessionStorage() {
    if (loadSessionSotrage() == null) {
        websites = [];
        console.log("websites.length :>> ", websites.length);
    } else {
        websites = JSON.parse(sessionStorage.getItem("websites"));
        console.log("websites.length :>> ", websites.length);
    }

    return websites.length;
}
function clearInputs() {
    websiteName.value = "";
    websiteUrl.value = "";
    websiteName.classList.remove("is-valid");
    websiteUrl.classList.remove("is-valid");

    websiteName.classList.remove("is-invalid");
    websiteUrl.classList.remove("is-invalid");
}


/*
performace obj:
browser build-in performance monitor =====> typeof obj

"navigation": an array of the page timing entries ==> typeof array that has one item in it

"type":  most useful properity of tht single item

type :>> {
        "navigate": first visit using url or a link-clicked.
        'reload':   page refresh using crtl+R or reload btn.
        'back_forward': for back and forward navigation.
        'prerender': preloaded by the browser.
}
    performance.getEntriesByType('navigation')[0];
*/ 

window.addEventListener("load", function(){
    const navigator = this.performance.getEntriesByType("navigation")[0];

        console.log('navigator.type :>> ', navigator.type);
        if(navigator.type === 'reload'){
            console.log("page has beed reloaded");
            if (checkSessionStorage())  //if there is something saved
                createAllRows(loadSessionSotrage()) //load the data and create it.
        }

})
