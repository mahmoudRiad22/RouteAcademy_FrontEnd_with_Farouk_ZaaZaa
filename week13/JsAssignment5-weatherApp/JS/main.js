// change it to "config_example.js"
import {API_KEY} from "../config.js";
const apiKey = API_KEY;

// const apiKey = "e62895f9f3744dcea6d172527241907";
const baseUrl = "https://api.weatherapi.com/v1/";

const html = {
    current: {
        locationCountry: document.getElementById("currentLocationCountry"),
        locationName: document.getElementById("currentLocationName"),
        currentTempC: document.getElementById("currentTempC"),
        conditionIcon: document.getElementById("currentConditionIcon"),
        conditionText: document.getElementById("currentConditionText"),
    },
    forecast: {
        forecastDaysRow: document.getElementById("forecastDaysRow"),
        dayMinTempC: document.getElementById("dayMinTempC"),
        dayMaxTempC: document.getElementById("dayMaxTempC"),
        dayLocationCountry: document.getElementById("dayLocationCountry"),
        dayLocationName: document.getElementById("dayLocationName"),
        dayConditionIcon: document.getElementById("dayConditionIcon"),
        dayConditionText: document.getElementById("dayConditionText"),
    },
};

async function getCurrentWeather(cityname) {
    const url = `${baseUrl}/forecast.json?q=${cityname}&days=4&hour=24&key=${apiKey}`;
    const response = await fetch(url);
    const responseData = await response.json();
    diplayCurrentWeather(responseData);
    displayForcastWeather(responseData);
}

function diplayCurrentWeather(responseData) {
    html.current.locationCountry.innerHTML = responseData.location.country;
    html.current.locationName.innerHTML = responseData.location.name;
    html.current.currentTempC.innerHTML = `${responseData.current.temp_c}`;
    html.current.conditionIcon.src = responseData.current.condition.icon;
    html.current.conditionText.innerHTML = responseData.current.condition.text;
}

function formateDate(dateStr) {
    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const date = new Date(dateStr);
    const formattedDate = {
        name: dayNames[date.getDay() - 1],
        date: date.getDate(),
        month: monthNames[date.getMonth() - 1],
        year: date.getFullYear(),
    };
    return formattedDate;
}

async function displayForcastWeather(responseData) {
    let box = "";

    if (responseData.forecast.forecastday.length) {
        const days = responseData.forecast.forecastday;

        for (let i = 0; i < days.length; i++) {
            const day = formateDate(days[i].date);
            box += `
                <div class="day py-4">
                    <div class="d-flex justify-content-between rounded-top-4 
                        align-items-baseline p-4 glass-darker-bg">
                        <span class="h4 text-capitalize pb-2" id="dayName">${day.name}</span>
                        <span class="h6 text-capitalize my-secoundy-text" id="dayDate">${day.date}-${day.month}</span>
                    </div>

                    <div class="inner glass-bg shadow rounded-bottom-4 p-4 pt-1">

                        <div class="text-start pb-3">
                            <span class="country" data-test="country" id="dayLocationCountry">${responseData.location.country}</span>,
                            <span class="name" data-test="name" id="dayLocationName">${responseData.location.name}</span>
                        </div>

                        <div class="d-flex justify-content-around align-items-end">
                            <div class="position-relative">
                                <span class="max-temp-c fs-68 h2 position-relative d-inline-block" 
                                    data-test="dayMaxTempC" id="dayMaxTempC">${days[i].day.maxtemp_c}

                                <span class="position-absolute h3">&deg;c</span><br/>

                                </span><span class="h2 ps-4 pe-1">/</span> <br/>

                                <span class="min-temp-c h3 position-relative d-inline-block ps-0" 
                                    data-test="dayMinTempC" id="dayMinTempC">${days[i].day.mintemp_c}
                                <span class="position-absolute h5">&deg;c</span><br/>

                                </span>

                            </div>

                            <div class="condition-icon">
                                <img class="w-100" src="${days[i].day.condition.icon}" alt=""
                                    data-test="dayConditionIcon" id="dayConditionIcon" />
                            </div>

                        </div>


                        <div class="condition-text mt-4 my-primary-text text-center fw-semibold"
                            data-test="dayConditionText" id="dayConditionText">${days[i].day.condition.text}
                        </div>

                    </div>
                </div>

            `;
        }

        html.forecast.forecastDaysRow.innerHTML = box;
    }
}
// TODO: make this run at user location automatically
getCurrentWeather("cairo");

const searchBar = document.getElementById("searchInput");
searchBar.addEventListener("input", function () {
    const searchLabel = document.getElementById("searchLabel");
    if (searchBar.value) {
        searchLabel.classList.add("d-none");
        getCurrentWeather(searchBar.value);
    } else {
        searchLabel.classList.remove("d-none");
    }
});

const headerLinks = document.querySelectorAll(".nav-link");
for (const index in headerLinks) {
    if (Object.prototype.hasOwnProperty.call(headerLinks, index)) {
        const link = headerLinks[index];
        link.addEventListener("click", function (e) {
            addActiveClass(e.target);
        });
    }
}

function addActiveClass(target) {
    for (const headerlink in headerLinks) {
        if (Object.prototype.hasOwnProperty.call(headerLinks, headerlink)) {
            const link = headerLinks[headerlink];
            if (link === target) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    }
}

const emailBar = document.getElementById("emailInput");
emailBar.addEventListener("input", function () {
    const emailLabel = document.getElementById("emailLabel");
    if (emailBar.value) {
        emailLabel.classList.add("d-none");
    } else {
        emailLabel.classList.remove("d-none");
    }
});

const subscribeBtn = document.getElementById("subscribeBtn");
subscribeBtn.addEventListener("click", () => {
    const toastLiveExample = document.getElementById("liveToast");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    if (emailValidation(emailBar.value)) {
        document.getElementById("toastBodyParent").classList.remove("my-bg-danger");
        document.getElementById("toastBody").classList.remove("text-danger");

        document.getElementById("toastBodyParent").classList.add("my-bg-success");
        document.getElementById("toastBody").classList.add("my-text-sucess");
        document.getElementById("toastBody").innerHTML = "Success!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 1500);
    } else {
        document.getElementById("toastBodyParent").classList.remove("my-bg-success");
        document.getElementById("toastBody").classList.remove("text-success");

        document.getElementById("toastBodyParent").classList.add("my-bg-danger");
        document.getElementById("toastBody").classList.add("text-danger");
        document.getElementById("toastBody").innerHTML = "Invalid Email!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 1500);
    }
});

function emailValidation(input) {
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegEx.test(input);
}
