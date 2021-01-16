

// START WIREFRAME HECTOR----------------------------------------------------
// second container 
$("#mainContainer").append($("<section>")
    .attr("id", "secondContainer")
 )
// displayPane
$("#mainContainer").append($("<section>")
    .attr("id", "displayPane")
    .text ("displayPane")
)
// searchPane
$("#secondContainer").append($("<nav>")
    .attr("id", "searchPane")
    .text ("searchPane")
    )
// recentsPane
$("#secondContainer").append($("<nav>")
    .attr("id", "recentsPane")
    .text ("recentsPane")
    )
// search bar
$("#searchPane").append($("<form>")
    .attr("class", "uk-search uk-search-default")
    .append ($("<input>")
        .attr("id", "searchBar")
        .attr("class", "uk-search-input")
        .attr("type", "search")
        .attr("placeholder", "Search...")
    )
)
// search button
    $("#searchPane").append($("<button>")
        .attr("id", "searchBtn")
        .attr("class", "uk-button uk-button-default")
        .text("Search")  
)
// recentsPane header
$("#recentsPane").append($("<H3>")
.text("My Recipes")    
)
// recents list
$("#recentsPane").append($("<nav>")
    .attr("id", "recentsList")
    .text("Recents List")    
)



// END WIREFRAME-------------------------------------------------------- 



//check to see js connected
console.log('is working');


//Maria's app ID, & app key for spanish endpoint
const APP_ID = "bb9ad742";
const APP_KEY = "f1f0e0febcb485de149281ede51c6ffd";



// START EDAMAM CALL--------------------------------------------------------
//variable that will hold user input from search textbox
const userInputSpanish = 'ensalada'; //testing will clear ensalada once finished gathering data points
const urlSpan = `https://cors-anywhere.herokuapp.com/https://test-es.edamam.com/search?q=${userInputSpanish}&amp;app_id=${APP_ID}&amp;app_key=${APP_KEY}`;

//need verification to ensure user input something and in the correct language - is searching spanish keysearch words much be in spanish


// AJAX call to SPANISH beta path for recipe search through Edamam
$.ajax({
    url: urlSpan,
    method: "GET"
}).then(function (response) {
    console.log(response);
    //MARIA ----------------- adding response for each data point we are retreiving from edamam spanish endpoint------
    //recipe Name
    console.log(response.hits[0].recipe.label); // brackets we input the # 0-9 to target each recipe endpoint is returning

    //recipe image
    console.log(response.hits[0].recipe.image);

    //ingredients that only have text - returned as array of strings
    console.log(response.hits[0].recipe.ingredientLines);

    //ingredients that include measurements w/text returned as array of objects with key/value pairs --- i think this will be most useful for us
    // console.log(response.hits[0].recipe.ingredients);

    //target individual ingredients in array of objects
    console.log(response.hits[0].recipe.ingredients[0].food) //returns the name of the ingredient
    console.log(response.hits[0].recipe.ingredients[0].measure); //returns the unit of measurement for ingredient
    console.log(response.hits[0].recipe.ingredients[0].quantity); //returns how much of ingredient will need in unit of measurement from line 71
    console.log(response.hits[0].recipe.ingredients[0].text); //returns amt needed of ingredient in a string
    console.log(response.hits[0].recipe.ingredients[0].weight); // returns the amount needed of ingredient in grams 

    //url to recipe instructions - Edamam does not include instructions to recipe
    console.log(response.hits[0].recipe.url);

    //could not find endpoint that gives us a rating for the recipe, level of difficulty or time to complete

    //yield of recipe ---- # of servings
    console.log(response.hits[0].recipe.yield);

    //kcal - energy intake for food
    console.log(response.hits[0].recipe.totalNutrients.ENERC_KCAL.label);
    console.log(response.hits[0].recipe.totalNutrients.ENERC_KCAL.unit);
    console.log(response.hits[0].recipe.totalNutrients.ENERC_KCAL.quantity);

    //total nutrients --- tnutrients/yield = nutrients per serving
    //tnurtrients ---carbs
    console.log(response.hits[0].recipe.totalNutrients.CHOCDF.label);
    console.log(response.hits[0].recipe.totalNutrients.CHOCDF.quantity);
    console.log(response.hits[0].recipe.totalNutrients.CHOCDF.unit);
    //tnurtrients ---fat
    console.log(response.hits[0].recipe.totalNutrients.FAT.label);
    console.log(response.hits[0].recipe.totalNutrients.FAT.quantity);
    console.log(response.hits[0].recipe.totalNutrients.FAT.unit);
    //tnurtrients ---protein
    console.log(response.hits[0].recipe.totalNutrients.PROCNT.label);
    console.log(response.hits[0].recipe.totalNutrients.PROCNT.quantity);
    console.log(response.hits[0].recipe.totalNutrients.PROCNT.unit);

    //console.log(response.hits[0].recipe.digest[0]); 0-2 gives fat carbs and protein back as array with macros carbs and fat broken down into poly, mono, trans, sugar, fiber, and carbs



    //-------END MARIA edits----------------------------------------------------------
});





//  Omar APP ID "bb9ad742";
// Maria APP ID "588c938a";
// Dory APP ID "d646e635"

// Omar App KEY "f1f0e0febcb485de149281ede51c6ffd"
//  Maria APP Key "52561e55f1ad9a36b20b7445df72154b";
// Dory APP KEY "549406eaebcc7c23fdc7927fa1ea196c"


//variable that will hold user input from search textbox
const userInputEnglish = 'chicken';

const urlEnglish = `https://api.edamam.com/search?q=${userInputEnglish}&amp;app_id=${APP_ID}&amp;app_key=${APP_KEY}`;

$.ajax({
    url: urlEnglish,
    method: "GET"
}).then(function (response) {
    console.log(response);


});

//need verification to ensure user input something and in the correct language - is searching spanish keysearch words much be in spanish

// });
// END EDAMAM CALL ----------------------------------------------------

// START SPOONACULAR CALL ---------------------------------------------
// hector's api for spooacular 
const keySpoonHector = "40e409872bc049d28deda10508960781";
const ingredientName = "flour";
const sourceAmount = "2";
const sourceUnit = "cups";
const targetUnit = "grams";
const spoonCallURL = `https://api.spoonacular.com/recipes/convert?ingredientName=${ingredientName}&sourceAmount=${sourceAmount}&sourceUnit=${sourceUnit}&targetUnit=${targetUnit}&apiKey=${keySpoonHector}`

//AJAX call to unit conversion path
// $.ajax({
//     url: spoonCallURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);


// });

// END SPOONACULAR CALL ---------------------------------------------

// ..... REFERENCE...............
// <!-- const API_ID = "bb9ad742"
// const APP_KEY = "f1f0e0febcb485de149281ede51c6ffd"
// const URl =`https://api.edamam.com/search?q=chicken&app_id=${APP_KEY}&app_key=${API_ID}`;

// console.log(URL);

// $.ajax({
// url: URl,
// method: "GET" 
// }).then(function(response){
//     console.log(response);
// });

