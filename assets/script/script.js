//check to see js connected
console.log('is working');


//Maria's app ID, & app key for spanish endpoint
const APP_ID = "588c938a";
const APP_KEY = "52561e55f1ad9a36b20b7445df72154b";



// START EDAMAM CALL--------------------------------------------------------
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


//variable that will hold user input from search textbox
// const url = `https://api.edamam.com/search?q=${userInputEnglish}&amp;app_id=${APP_ID}&amp;app_key=${APP_KEY}`;

//need verification to ensure user input something and in the correct language - is searching spanish keysearch words much be in spanish


//AJAX call to spanish beta path for recipe search through Edamam
$.ajax({
    url: url,
    method: "GET"
}).then(function (response) {
    console.log(response);


});
// END EDAMAM CALL ----------------------------------------------------

// START SPOONACULAR CALL ---------------------------------------------
// hector's api for spooacular 
const keySpoonHector = "40e409872bc049d28deda10508960781";
const ingredientName="flour";
const sourceAmount="2";
const sourceUnit="cups";
const targetUnit="grams";
const spoonCallURL = `https://api.spoonacular.com/recipes/convert?ingredientName=${ingredientName}&sourceAmount=${sourceAmount}&sourceUnit=${sourceUnit}&targetUnit=${targetUnit}&apiKey=${keySpoonHector}`

//AJAX call to unit conversion path
// $.ajax({
//     url: spoonCallURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);


// });

// END SPOONACULAR CALL ---------------------------------------------