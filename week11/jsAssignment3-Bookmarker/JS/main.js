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
function createRow(website) {
    const tBody = document.getElementById("tBody");

    const rowDesign = `
<tr>
    <th scope="row">${websites.indexOf(website) + 1}</th>
    <td>${website.name}</td>
    <td>
        <a href="${website.url}" target="_blank" class="btn btn-success visite-btn border-0">
            <i class="fa-solid fa-eye"></i> Visite
        </a>
    </td>
    <td>
        <button class="btn btn-success delete-btn border-0" onClick="deleteRow(${websites.indexOf(
            website
        )})">
            <i class="fa-solid fa-trash"></i> Delete
        </button>
    </td>
</tr>
`;

    tBody.innerHTML += rowDesign;
}

function createAllRows() {
    tBody.innerHTML = "";
    for (const website of websites) {
        // console.log("websites.indexOf(website) :>> ", websites.indexOf(website));
        createRow(website);
    }
}

// delete
function deleteRow(index) {
    // console.log("deleteRow is called");
    // console.log(`websites[${index}] :>> `, websites[index]);
    websites.splice(index, 1); // delete at index
    // console.log("new websites lenght :>> ", websites.length);
    // JSON.stringify(sessionStorage.setItem('websites', websites))
    sessionStorage.setItem("websites", JSON.stringify(websites));
    createAllRows();
}

function submitInput() {
    const websiteName = document.getElementById("websiteName")
        ? document.getElementById("websiteName")
        : "";
    const websiteUrl = document.getElementById("websiteUrl")
        ? document.getElementById("websiteUrl")
        : "";

    // console.log("websiteName.value :>> ", !!websiteName);
    // console.log("websiteUrl.value :>> ", !!websiteUrl);
    const website = {
        name: websiteName.value ? websiteName.value : "Error404",
        url: websiteUrl.value ? websiteUrl.value : "Error404",
    };
    // console.log("submitInput ==> website :>> ", website);
    // next validate the data
    // console.log("validateInput(website) :>> ", validateInput(website));
    if (validateInput(website)) {
        saveData(website);
        websiteName.value = "";
        websiteUrl.value = "";
    } else {
        document.getElementById("modalTriger").click();
    }
}

function validateInput(website) {
    // const urlRegExp = /^https?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}(?:\/[^\s]*)?$/i; // must be valid url
    const urlRegExp = /^https?:\/\/(?:www\.)?[a-z0-9-]+\.[a-z]{2,}(?:\/[^\s]*)?$/i; // must be valid url
    const nameRegExp = /^.{3,50}$/; // min 3char max
    // const nameMsg = "Site name must contain at least 3 characters";
    // const urlMsg = "Site URL must be a valid one";
    // console.log("nameRegExp.test() :>> ", nameRegExp.test("https://www.baleqyvep.tv"));

    if (nameRegExp.test(website.name)) {
        // console.log("Valid Name");
        // console.log("website.name :>> ", website.name);
        if (urlRegExp.test(website.url)) {
            // console.log("valid name and url");
            // console.log("website:>> ", website);
            return 1;
        } else {
            // console.log("Invalid URL");
            // Trigger modal via data attributes
            return 0;
        }
    } else {
        // console.log("Invalid Name");
        return 0;
    }
}

function saveData(website) {
    // console.log("check here", JSON.stringify(sessionStorage.getItem("websites")));
    websitesStr = JSON.parse(sessionStorage.getItem("websites"))
        ? JSON.parse(sessionStorage.getItem("websites"))
        : "";

    if (websitesStr == "") {
        websites = [];
        // console.log("true if:  before push websites :>> ", websites);
        console.log("websites.push(website) :>> ", websites.push(website));
        // console.log("after push websites :>> ", websites);
    } else {
        websites = JSON.parse(sessionStorage.getItem("websites"));
        // console.log("false if : before push websites :>> ", websites);
        console.log("websites.push(website) :>> ", websites.push(website));
        // console.log("after push websites :>> ", websites);
    }

    // console.log("websitesStr :>> ", websitesStr);
    // console.log("websites :>> ", websites);
    // throw  console.error("Stop HERE");

    // websites.push(website);
    sessionStorage.setItem("websites", JSON.stringify(websites));
    // createRow(website);
    createAllRows();
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
    console.log('websiteName :>> ', websiteName.value);
    if (nameRegExp.test(websiteName.value)){
        console.log("valid:",websiteName.value);
        websiteName.classList.remove('is-invalid');
        websiteName.classList.add('is-valid');
    }
    else {
        console.log("invalid:",websiteName.value);

        websiteName.classList.remove('is-valid');
        websiteName.classList.add('is-invalid');
    }
}
function checkUrlInput() {
    const websiteUrl = document.getElementById("websiteUrl")
        ? document.getElementById("websiteUrl")
        : "";
    const urlRegExp = /^https?:\/\/(?:www\.)?[a-z0-9-]+\.[a-z]{2,}(?:\/[^\s]*)?$/i; // must be valid url
    // console.log('websiteUrl :>> ', websiteUrl.value);
    if (urlRegExp.test(websiteUrl.value)){
        // console.log("valid:",websiteUrl.value);
        websiteUrl.classList.remove('is-invalid');
        websiteUrl.classList.add('is-valid');
    }
    else {
        console.log("invalid:",websiteUrl.value);
        websiteUrl.classList.remove('is-valid');
        websiteUrl.classList.add('is-invalid');


    }
}
