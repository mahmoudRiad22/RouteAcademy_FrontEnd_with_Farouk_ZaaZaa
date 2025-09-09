const quotesList = [
    {
        image: "./images/QuoteImages/image- (23).jpg",
        quote: "“Be yourself; everyone else is already taken.”",
        owner: "― Oscar Wilde",
    },
    {
        image: "./images/QuoteImages/image- (3).jpg",
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        owner: "― Marilyn Monroe",
    },
    {
        image: "./images/QuoteImages/image- (22).jpg",
        quote: "“So many books, so little time.”",
        owner: "― Frank Zappa",
    },
    {
        image: "./images/QuoteImages/image- (21).jpg",
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        owner: "― Albert Einstein",
    },
    {
        image: "./images/QuoteImages/image- (20).jpg",
        quote: "“A room without books is like a body without a soul.”",
        owner: "― Marcus Tullius Cicero",
    },
    {
        image: "./images/QuoteImages/image- (19).jpg",
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        owner: "― Bernard M. Baruch",
    },
    {
        image: "./images/QuoteImages/image- (18).jpg",
        quote: `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
        owner: "― William W. Purkey",
    },
    {
        image: "./images/QuoteImages/image- (17).jpg",
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        owner: "― Dr. Seuss",
    },
    {
        image: "./images/QuoteImages/image- (16).jpg",
        quote: "“You only live once, but if you do it right, once is enough.”",
        owner: "― Mae West",
    },
    {
        image: "./images/QuoteImages/image- (15).jpg",
        quote: "“Be the change that you wish to see in the world.”",
        owner: "― Mahatma Gandhi",
    },
    {
        image: "./images/QuoteImages/image- (14).jpg",
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        owner: "― Robert Frost",
    },
];
const minIndex = 0;
const maxIndex = quotesList.length - 1;
const random = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
let counter = 0;

function noRepeate(oldRandom) {
    let newRandom = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;

    for (; newRandom == random; ) {
        newRandom = Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
    }
    displayQuote(newRandom);
}

function displayQuote(id) {
    // console.log("Qoute :>> ", quotesList[id].quote);
    // console.log("Owner: :>> ", quotesList[id].owner);
    // console.log("counter :>> ", ++counter, "random :>> ", id);

    const content = `
        <div class="col-sm-12 col-md-2">
            <img class="d-block cicle" src="${quotesList[id].image}" alt="" />
        </div>
        <p class="col-sm-12 col-md-10 ">${quotesList[id].quote}</p><br/>
        <p class="col-sm-12 col-md-12 ">${quotesList[id].owner}</p>
`;
    const quoteBox = document.getElementById("quoteBox");
    quoteBox.innerHTML = "";
    quoteBox.innerHTML += content;
}
