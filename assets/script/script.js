/* 
searchPane - search bar
savedPane - list of saved recipes
detailsPane - shows search results and recipe details

on load
    function - build savedRecipesList
        function - pullSavedLocalStorage
            pulls saved recipes from local storage
            puts savedRecpiesArr/Obj into a global recipesArr variable
        function - postSavedRecipes
            if savedRecipes = null
                post message saying you have no saved recipes
                and that you will see any recipes you have saved here
            else
                build a list of recipe titles from from recipes arr wtih index position
        function - postCurrentRecipe
            pull currentRecipe from local storage and add it to a currentRecipe variable
            if currentRecipe === null
                post welcome message
            else
                post recipe object from locat storage to currentRecipe variable
                function - displayRecipe
                    clear display pane
                    using the currentRecipe global variable
                    build the structure of the card to display recipe details and append to display pane
                        be sure to have a unique id for each the ingredients
Search for recipes click event
    Toggle search between English and Spanish
        create global toggle variable and set to english
        when building site structure check the variable
        depending on variable set approprite text on site
    search validation
        trim search results
        enter user input into a varible
        if variable is blonk do nothing - return
        if if actual text send to ajax call
        if ajax call returns an error stop script and return a modal to user saying invalid search
            modal can be dismissed
    Search returns 24 recipes 6 recipes shown in display pane w/ titles and picture and a name
        return 24 results
            capture results in a global variable recipesArr
            create a gloabl variable searchResultsSet that captures the which group of 6 results is being displayed
        display first 6 results
            function - displayThumbnails (numOfLoops) pass in 6 loops
                for loop that runs 6 times
                    index starts with searchResultsSet variable x6 and then increments the searchResultsSet by 1
                    loop builds recipeThumbnail cards and appends them to the displayPane
                    must capture index position of recipe in recipesArr global variable
                once searchResultsSet = 4 the user need to start a new search or go back
                    function - userAlertSearchResultsEnded?
                    when user navigates back decrement earchResultsSet by 1
    select recipe and see details in detailsPane including larger photo, title, ingredients, ability to convert measurements, ability to save, ability to go back to 5 returned results
        set searchResultsSet to 0
        set recipe to currentRecipe global variable
        displayRecipe ()
        function - saveCurrentRecipe
            save selected recipe to localStorage with key currentRecipe
            note: this is not saving the current recipe the savedrecipesArr
            this allows the current recipe to be displayed if the window refreshes or is closed and reopened
    Convert ingredient units when viewing recipe details
        find conversion icon to use on site as a button to display dropdown results
        on hover event
            when hovering over the conversion icon show dropdown of conversion choices
            build 4 global variables of conversion choice
                1 for english weight and 1 for metric weight
                1 for english volume and 1 for metric value
            compare the existing measurement in the recipe to the 4 global variables to figure out which dropdown to display
        on select units event
            when a unit is selected capture multiple values in local variables
                result of user selection in an userUnitChoice varible (ie: ml, tps)
                exiting ingredient measurement units in a recipeUnit variable (ie: ml, tps)
                existiing ingredient in in a recipeIngredient variable (ie: flour, sugar)
            capture id of ingredient div
                post it to a global currentIngredientId variable
                so you can find it again to post the new value
            pass variable to the measurement conversion function
            capture the results of the measurement conversion funtion and pass them to the postConvertedUnits function
            function - postConvertedUnits
                pass varibles for newUnits and new amounts to this function
                select ingredient with global currentIngredientId
                append new values to exisiting ingredient div with a new .convertedAmount div and a .convertedUnits div
                add a hidden button that will show on hover to delete new conversion data
        Run saveCurrentRecipe function
        on hover event - delete new conversion data
            when hovering beside the newly posted ingredient amounts show a button to delete
            on click event
                when delete button is clicked delete divs containing converted amount and converted unit
Recall saved recipes
    on click event
        click on savedRecipes button
            pullSavedLocalStorage ()
            set local storage contents to recipesArr global variable
            displayThumbnails (recipesArr.length)
            function - pushSavedLocalStorage
                saves savedRecipesArr back to local storage
click on recipe shown in savedPane 
    pullSavedLocalStoarge ()

button? to show all recipes by alpha
recipes display similar to search results
select a recipe
display is similar to showing recipe details in Convert measurements etc
Button to remove saved recipe from local storageSave found recipes

What happens when you click on save?error check to prevent duplicatessaved to local storageupdate recentsAdd notes by user?
*/

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

