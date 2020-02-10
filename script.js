$(document).ready(function() {
// ajax  call for weather
//push to local storage
//pull from local storage
//get api key

let apiKey = "e24495f44919a5535deac5311a5213a8";
let placeInfo = "";
let currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=";
let futurecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
let uvURL = "https://api.openweathermap.org/data/2.5/uvi?";
localStorage.getItem(".city")

// get input data here
$(".fa-search").on("click", function() {
    $(".list-unstyled").empty();
 let placeInfo = $("#weatherSearch").val();

 let callCurrent = `${currentWeather}${placeInfo},us&mode=json&units=imperial&appid=${apiKey}`;
 let callFuture = `${futurecast}${placeInfo},us&mode=json&units=imperial&appid=${apiKey}`;

 $(".recentSearch").append("<li>", "</br>").addClass("city").text(placeInfo);
 
 localStorage.setItem(".city", "string");

 getCurrent();
 getFuture();

 function getCurrent() {
     $.get(callCurrent, function(response) {
         $(".name").text(response.name);
         $(".temp").text(`Temp: ${Math.floor(response.main.temp)} F`);
         $(".humidity").text(`Humidity: Humidity: ${response.main.humidity} %`);
         $(".wind-speed").text(`Wind Speed: ${response.wind.speed} MPH`);
     });

     let uvCall =
          uvURL +
          `lat=${response.coord.lat}` +
          `&lon=${response.coord.lon}&appid=` +
          apiKey;
          $.get(uvCall, function(uvResponse){
            $(".uvIndex").text(uvResponse.value)
     });
 }
});


//save to local storage
});