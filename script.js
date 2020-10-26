
// this fuction is for tempature conversion 
function convertTemperature (run) {
  var tempF = (run - 273.15) * 1.8 + 32; 
  return (tempF)
 }

// this fuction wrapps around all the code and tells the code when to start.
$(document).ready(function () {
  var apiKey = "a3cc1b77d3dea57099c059db10e6c532";

  // this is a fuction for when the search button is clicked on to search for the weather in a particular city. 
  $(".searchBtn").on("click", function (event) {
    event.preventDefault();
    var currentCity = $("#runSearch").val();
    console.log(currentCity);

    // Here is the link for the first api call found in the openWeatherapi
    var queryUrl1 = 
    "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity+ "&appid=" + apiKey;

  // this is the syntax for issuing the call 
    $.ajax({
      url: queryUrl1,
      method: "GET",
    }).then(function (response) {
      console.log(queryUrl1);
      console.log(response);
     
      // this is my attempt to get the date to appear on the page 
      $("#currentDay").text(moment().format("dddd MMM D YYYY"))
      
      // the following code makes the responses from the ajax calls appear on the page 
      $(".currentCon").append('<div> Current Conditions </div>');  
           
      $(".currentCon").append('<div> temp: '+ convertTemperature(response.main. temp) +' </div>');

      $(".currentCon").append('<div> humidity: '+ response.main.humidity +' </div>'); 

      $(".currentCon").append('<div> windspeed: '+ response.wind.speed +' </div>'); 
     
      $(".currentCon").append('<div> name: '+ response.wind.speed +' </div>'); 
      
      // the following line to turns the response into a string. 
     var temp = response.main.temp 
     "the temp is" + response.main.temp 
       
      // the following code will lead into the next function. Here lat and lon are defined at variables. this enables us to pass lat, lon into a next function. 
      var lat = response.coord.lat;
      var lon = response.coord.lon; 
      getUVIndex(lat,lon); 

  
    
    });
    

     // The following function will generate the uvIndex throught another api call 
    function getUVIndex (lat,lon) {
      var queryUrl2 =
      "https://api.openweathermap.org/data/2.5/uvi?lat=" +lat+ "&lon="+ lon + "&appid=" +
      apiKey;

      $.ajax({
        url: queryUrl2,
        method: "GET",
      }).then(function (response) {

        console.log(queryUrl2);
        console.log(response);
       
    
        $(".currentCon").append('<div> Uv Index: '+ response.value +' </div>'); 
        

      });
         
     // this function will generate the responses for  the five day forcast.
    getFiveday()
  
    function getFiveday() {
      var currentCity = $("#runSearch").val();
      console.log(currentCity);  

      var queryUrl3 =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat+ "&lon=" + lon + "&appid=" + apiKey; 

    $.ajax({
        url: queryUrl3,
        method: "GET",
      }).then(function (response) {
        console.log(queryUrl3);
        console.log(response);


        $(".fiveDay").append('<div> fiveday forcast: '+ response.current +'  <div>'); 


      });
  
    }
     

    // I am a little uncertain here, but I used a for loop for the five day forcast. Allowing it to look through the arrive and generate the data from the list. This makes logical sense, However, all I can see on the page is fiveday forcast [object object]

     for (var i = 0; i < response.list.length; i++) {
     
      var current= response.list[i]
      console.log(response.list.length); 

      current.temp
      current.humidity
      current.wind_speed
      current.uvi

     }


      // I know we need to use localStorage but not sure if the follow code is relevant. 

    $("city").val(localStorage.getItem("city"));
    $("currentDate").val(localStorage.getItem("curentDate")); 
    $("icon").val(localStorage.getItem("icon"));
    $("temp").val(localStorage.getItem("temp"));
    $("tempF").val(localStorage.getItem("tempF"));
    $("humidity").val(localStorage.getItem("humidity"));
    $("windSpeed").val(localStorage.getItem("windSpeed"));
   }
    
});


});




