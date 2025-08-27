const websites = [
    {
        name: "Google",
        url: "https://www.google.com",
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com",
    },
    {
        name: "Twitter",
        url: "https://www.twitter.com",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
    },
    {
        name: "GitHub",
        url: "https://www.github.com",
    },
    {
        name: "Netflix",
        url: "https://www.netflix.com",
    },
    {
        name: "Amazon",
        url: "https://www.amazon.com",
    },
    {
        name: "Wikipedia",
        url: "https://www.wikipedia.org",
    },
    {
        name: "Reddit",
        url: "https://www.reddit.com",
    },
    {
        name: "Discord",
        url: "https://www.discord.com",
    },
    {
        name: "Spotify",
        url: "https://www.spotify.com",
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
    },
    {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org",
    },
];


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
        <button class="btn btn-success delete-btn border-0" onClick="deleteRow(${websites.indexOf(website)})">
            <i class="fa-solid fa-trash"></i> Delete
        </button>
    </td>
</tr>
`;

    tBody.innerHTML += rowDesign;
}

function createAllRows(){
    tBody.innerHTML = '';
    for (const website of websites) {
        console.log('websites.indexOf(website) :>> ', websites.indexOf(website));
        createRow(website);
    }
}

// delete
function deleteRow(index){
    console.log("deleteRow is called");
    console.log(`websites[${index}] :>> `, websites[index]);
    websites.splice(index, 1); // delete at index
    console.log('new websites lenght :>> ', websites.length);
    createAllRows()
}


