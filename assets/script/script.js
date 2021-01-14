//check to see js connected
console.log('is working');


//Maria's app ID, & app key for spanish endpoint
const APP_ID = "588c938a";
const APP_KEY = "52561e55f1ad9a36b20b7445df72154b";



//variable that will hold user input from search textbox
const userInputSpanish = '';
const url = `https://cors-anywhere.herokuapp.com/https://test-es.edamam.com/search?q=${userInputSpanish}&amp;app_id=${APP_ID}&amp;app_key=${APP_KEY}`;

//need verification to ensure user input something and in the correct language - is searching spanish keysearch words much be in spanish


//AJAX call to spanish beta path for recipe search through Edamam
$.ajax({
    url: url,
    method: "GET"
}).then(function (response) {
    console.log(response);


});

//Maria's app ID, & app key for english endpoint
const APP_ID = "588c938a";
const APP_KEY = "52561e55f1ad9a36b20b7445df72154b";



//variable that will hold user input from search textbox
const userInputEnlgish = '';
const url = `https://api.edamam.com/search?q=${userInputEnglish}&amp;app_id=${APP_ID}&amp;app_key=${APP_KEY}`;

//need verification to ensure user input something and in the correct language - is searching spanish keysearch words much be in spanish


//AJAX call to spanish beta path for recipe search through Edamam
$.ajax({
    url: url,
    method: "GET"
}).then(function (response) {
    console.log(response);


});
