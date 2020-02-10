$(document).ready(function() {
// ajax  call for weather
//push to local storage
//pull from local storage
//get api key

let apiKey = "e24495f44919a5535deac5311a5213a8";
let placeInfo;
let searchBtn = document.querySelector(".search-button");
let queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + placeInfo + "&appid=" + apiKey;
console.log(searchBtn);
$.get(queryURL, function(response) {
    console.log(queryURL);
    console.log(response);
})

// get input data here
searchBtn.on("click", function() {
 let searchInput = $("input").val();
 console.log(searchInput);
})


//save to local storage
});