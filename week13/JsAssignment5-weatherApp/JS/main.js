// require('dotenv').config();
import {API_KEY} from "../config.js";

const apiKey = API_KEY;
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
    // console.log('response :>> ', await response.json());
    const responseData = await response.json();
    // console.log("responseData :>> ", responseData);
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
    console.log(date, date.getDay);
    const formattedDate = {
        name: dayNames[date.getDay() - 1],
        date: date.getDate(),
        month: monthNames[date.getMonth() - 1],
        year: date.getFullYear(),
    };
    console.log("formattedDate :>> ", formattedDate);
    return formattedDate;
}

async function displayForcastWeather(responseData) {
    let box = "";
    console.log("forecastday array length",responseData.forecast.forecastday.length);

    if (responseData.forecast.forecastday.length) {
        const days = responseData.forecast.forecastday;

        for (let i = 0; i < days.length; i++) {
            console.log("date :>> ", i, days[i].date);
            const day = formateDate(days[i].date);
            box += `
                <div class="day py-4">
                    <div class="d-flex justify-content-md-between rounded-top-4 
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

                                </span><span class="h2 ps-4 pe-1">/</span>

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
    // console.log('searchBar.value :>> ', searchBar.value);
    // readSearchBar(searchBar.value);
    if (searchBar.value) {
        getCurrentWeather(searchBar.value);
    }
});

let dummyResponse = {
    location: {
        name: "Cairo",
        region: "Al Qahirah",
        country: "Egypt",
        lat: 30.05,
        lon: 31.25,
        tz_id: "Africa/Cairo",
        localtime_epoch: 1757312610,
        localtime: "2025-09-08 09:23",
    },
    current: {
        last_updated_epoch: 1757312100,
        last_updated: "2025-09-08 09:15",
        temp_c: 25.2,
        temp_f: 77.4,
        is_day: 1,
        condition: {
            text: "Partly cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            code: 1003,
        },
        wind_mph: 8.7,
        wind_kph: 14,
        wind_degree: 342,
        wind_dir: "NNW",
        pressure_mb: 1011,
        pressure_in: 29.85,
        precip_mm: 0,
        precip_in: 0,
        humidity: 65,
        cloud: 50,
        feelslike_c: 25.9,
        feelslike_f: 78.7,
        windchill_c: 26.8,
        windchill_f: 80.2,
        heatindex_c: 27.3,
        heatindex_f: 81.2,
        dewpoint_c: 15.2,
        dewpoint_f: 59.3,
        vis_km: 10,
        vis_miles: 6,
        uv: 2,
        gust_mph: 10,
        gust_kph: 16.2,
    },
    forecast: {
        forecastday: [
            {
                date: "2025-09-08",
                date_epoch: 1757289600,
                day: {
                    maxtemp_c: 35.2,
                    maxtemp_f: 95.3,
                    mintemp_c: 23.6,
                    mintemp_f: 74.5,
                    avgtemp_c: 28.2,
                    avgtemp_f: 82.8,
                    maxwind_mph: 19.2,
                    maxwind_kph: 31,
                    totalprecip_mm: 0,
                    totalprecip_in: 0,
                    totalsnow_cm: 0,
                    avgvis_km: 10,
                    avgvis_miles: 6,
                    avghumidity: 47,
                    daily_will_it_rain: 0,
                    daily_chance_of_rain: 0,
                    daily_will_it_snow: 0,
                    daily_chance_of_snow: 0,
                    condition: {
                        text: "Sunny",
                        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                        code: 1000,
                    },
                    uv: 2.1,
                },
                astro: {
                    sunrise: "05:36 AM",
                    sunset: "06:09 PM",
                    moonrise: "06:36 PM",
                    moonset: "06:04 AM",
                    moon_phase: "Waning Gibbous",
                    moon_illumination: 100,
                    is_moon_up: 1,
                    is_sun_up: 0,
                },
                hour: [],
            },
            {
                date: "2025-09-09",
                date_epoch: 1757376000,
                day: {
                    maxtemp_c: 34.2,
                    maxtemp_f: 93.6,
                    mintemp_c: 23.1,
                    mintemp_f: 73.6,
                    avgtemp_c: 27.7,
                    avgtemp_f: 81.8,
                    maxwind_mph: 19.7,
                    maxwind_kph: 31.7,
                    totalprecip_mm: 0,
                    totalprecip_in: 0,
                    totalsnow_cm: 0,
                    avgvis_km: 10,
                    avgvis_miles: 6,
                    avghumidity: 49,
                    daily_will_it_rain: 0,
                    daily_chance_of_rain: 0,
                    daily_will_it_snow: 0,
                    daily_chance_of_snow: 0,
                    condition: {
                        text: "Sunny",
                        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                        code: 1000,
                    },
                    uv: 2.1,
                },
                astro: {
                    sunrise: "05:37 AM",
                    sunset: "06:08 PM",
                    moonrise: "07:09 PM",
                    moonset: "07:10 AM",
                    moon_phase: "Waning Gibbous",
                    moon_illumination: 98,
                    is_moon_up: 1,
                    is_sun_up: 0,
                },
                hour: [],
            },
            {
                date: "2025-09-10",
                date_epoch: 1757462400,
                day: {
                    maxtemp_c: 35.6,
                    maxtemp_f: 96.2,
                    mintemp_c: 23.2,
                    mintemp_f: 73.8,
                    avgtemp_c: 28,
                    avgtemp_f: 82.5,
                    maxwind_mph: 19.7,
                    maxwind_kph: 31.7,
                    totalprecip_mm: 0,
                    totalprecip_in: 0,
                    totalsnow_cm: 0,
                    avgvis_km: 10,
                    avgvis_miles: 6,
                    avghumidity: 49,
                    daily_will_it_rain: 0,
                    daily_chance_of_rain: 0,
                    daily_will_it_snow: 0,
                    daily_chance_of_snow: 0,
                    condition: {
                        text: "Sunny",
                        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                        code: 1000,
                    },
                    uv: 2,
                },
                astro: {
                    sunrise: "05:37 AM",
                    sunset: "06:06 PM",
                    moonrise: "07:43 PM",
                    moonset: "08:18 AM",
                    moon_phase: "Waning Gibbous",
                    moon_illumination: 93,
                    is_moon_up: 1,
                    is_sun_up: 0,
                },
                hour: [],
            },
        ],
    },
};
console.log(dummyResponse);
