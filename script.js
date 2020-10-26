
// use a function to gather the date for  the following: city name, the current date, an icon representation of the weather conditions, the temperature, the humidity, the wind speed, the UV index.

// use color to express the weather conditions more specificially, color should represent favorable, moderate or severe. Is exicuting this tied in with html? 

// generate a search history for perviously search cities. the user should be able to see current and future conditions for cities in the search history.

// use local storage to save the search history. So that the website defaults to the last city searched when loading the page. //

// query (search) and history button both become on click functions.


    // one input field

    // search issue ajax call when clicked

    // call for uv -  different api key/ ajax call
    // call for history

    // same key but different url for each

    // track search history

//document.ready
// search button on click
// inside
// store value of search in a variable
// run a function for searching the weather

// store history
// on click in the list of history then run the function for searching the weather

// input are variables. What variables should be used here?

// ajax call
//can call a function that runs list items of history onto
// create html elements for the current weather

function convertTemperature (run) {
  var tempF = (run - 273.15) * 1.8 + 32; 
  return (tempF)
 }

$(document).ready(function () {
  var apiKey = "a3cc1b77d3dea57099c059db10e6c532";

  $(".searchBtn").on("click", function (event) {
    event.preventDefault();
    var currentCity = $("#runSearch").val();
    console.log(currentCity);

    var queryUrl1 = 
    "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity+ "&appid=" + apiKey;


    $.ajax({
      url: queryUrl1,
      method: "GET",
    }).then(function (response) {
      console.log(queryUrl1);
      console.log(response);

      $(".currentCon").append('<div> Current Conditions </div>');  

           
      $(".currentCon").append('<div> temp: '+ convertTemperature(response.main. temp) +' </div>'); 

      $(".currentCon").append('<div> humidity: '+ response.main.humidity +' </div>'); 
      $(".currentCon").append('<div> windspeed: '+ response.wind.speed +' </div>'); 
     
     var temp = response.main.temp 
     "the temp is" + response.main.temp 

      var lat = response.coord.lat;
      var lon = response.coord.lon; 
      getUVIndex(lat,lon); 

  
    
    });
    


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
        
        // Present the city name, the date, an icon representation of weather 
        // conditions,the temperature, the humidity,the wind speed, the UV index 
        // and (the color should indicate whether the conditions are favorable, moderate, or severe)

        $(".currentCon").append('<div> Uv Index: '+ response.value +' </div>'); 
        

      });
         

      
   
      //   var theCity = $(this).siblings(".city").val();

      //   var  futureInfo = $(this).parent().attr(".fiveday");

  
      //  localStorage.setItem(futureInfo,theCity);


      // window.localStorage.setItem("history", json.stringify(history)); 

    $("#currentDate").text(moment().format("dddd MMM D YYYY"));
    // function for searching weather
    // ajax call
    // define lat and lon as variables

    getFiveday()
  
    function getFiveday() {
      // event.preventDefault();
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
     

    // use a for loop for the five day forcast 

     for (var i = 0; i < response.list.length; i++) {
     
      var current= response.list[i]

      current.temp
      current.humidity
      current.wind_speed
      current.uvi

     }


// switch to one call api same as uv, actually daily  

     // the api hasall this 
    //   // city name,
    //   // the current date,
    //   // an icon representation of the weather conditions,
    //   // the temperature,
    //   // the humidity,
    //   // the wind speed,
    //   // the UV index.
    // }

    
     


   
    // $(".temp").text("Temperature (K) " + response.main.temp);
    // $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

    

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




