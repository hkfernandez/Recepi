// START GLOBAL VARIABLES ---------------------------------------------------
// 
var currentRecipesArr = [{recipeName: "Baked Beans", recipeUrl: "https//test", recipeImgSrc: "assets/testImages/Screen Shot 2021-01-17 at 10.34.35 PM.png", ingredients: [["beans","cups",4,500], ["sugar","tablespoons",1,"100"]]}, {recipeName: "More Beans", recipeImgSrc: "assets/testImages/Screen Shot 2021-01-17 at 10.36.50 PM.png", ingredients: [["beans","cups",4,500], ["sugar","tablespoons",1,"100"]]},{recipeName: "Most Beans", recipeImgSrc: "assets/testImages/Screen Shot 2021-01-17 at 10.34.35 PM.png", ingredients: [["beans","cups",4,500], ["sugar","tablespoons",1,"100"]]}, {recipeName: "Some Beans", recipeImgSrc: "assets/testImages/Screen Shot 2021-01-17 at 10.36.50 PM.png", ingredients: [["beans","cups",4,500], ["sugar","tablespoons",1,"100"]]},{recipeName: "The Beans", recipeImgSrc: "assets/testImages/Screen Shot 2021-01-17 at 10.34.35 PM.png", ingredients: [["beans",4,"cups",500], ["beans","cups",4,500], ["sugar","tablespoons",1,"100"]]}, {recipeName: "Good Beans", recipeImgSrc: "assets/testImages/Screen Shot 2021-01-17 at 10.36.50 PM.png", ingredients: [["beans","cups",4,500], ["sugar","tablespoons",1,"100"]]}];
var currentRecipe;
var currentRecipeIndex = 0;
var currentRecipeState;
var toggleEnglishSpanish = "english";
var searchResultsSet;
var englishWeightUnits = ["oz", "lbs"];
var englishVolumeUnits = ["tsp", "Tsp", "cup", "pint", "quart", "gallon"];
var metricWeightUnits = ["mg", "gm", "kg"];
var metricVolumeUnits = ["ml", "ltr" ];
var currentIngredientId;
// END GLOBAL VARIABLE ------------------------------------------------------


// START WIREFRAME ----------------------------------------------------
// second container 
$("#mainContainer").append($("<section>")
    .attr("id", "secondContainer")
    .attr("class", "uk-height-viewport")
    .attr("uk-height-match", "")
)
// displayPane
$("#mainContainer").append($("<section>")
    .attr("id", "displayPane")
    .attr("uk-grid", "")
    .attr("class", "uk-grid-large uk-grid-row-large")
)
// searchPane
$("#secondContainer").append($("<nav>")
    .attr("id", "searchPane")
    .attr("class", "uk-text-center")
    )
    // recentsPane
    $("#secondContainer").append($("<nav>")
    .attr("id", "recentsPane")
    .attr("class", "uk-text-center")
)
// search bar
$("#searchPane").append($("<form>")
    .attr("class", "uk-search uk-search-default")
    .append($("<input>")
        .attr("id", "searchBar")
        .attr("class", "uk-search-input")
        .attr("type", "search")
        .attr("placeholder", "Search in English...")
    )
)
// search button
$("#searchPane").append($("<button>")
    .attr("id", "searchBtn")
    .attr("class", "uk-button uk-button-default")
    .text("Search")
)

// toggle english/spanish button
$("#searchPane").append($("<button>")
    .attr("id", "toggleLanguage")
    .attr("class", "uk-button uk-button-link")
    .text("Español")
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

// Search Function - DORY START ----------------------------------------
const APP_ID = "bb9ad742";
const APP_KEY = "f1f0e0febcb485de149281ede51c6ffd";

$("#toggleLanguage").on("click", function() {
    if (toggleEnglishSpanish === "english") {
        
        toggleEnglishSpanish = "spanish";
        $("#searchBar").attr("placeholder", "Buscar en Español...");
        $("#toggleLanguage").text("English");
    } else {
        toggleEnglishSpanish = "english";
        $("#searchBar").attr("placeholder", "Search in English...");
        $("#toggleLanguage").text("Español");
    }
});        

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#searchBar").val();
    if (userInput == null) {
        return
    } else {
        webSearch(userInput);
    }
    $("#searchBar").val("");
});


function webSearch(searchValue) {

    if (toggleEnglishSpanish = "english") {
        var searchUrl = `https://api.edamam.com/search?q=${searchValue}&amp;app_id=${APP_ID}&amp;app_key=${APP_KEY}`;
    }else{
        var searchUrl = `https://cors-anywhere.herokuapp.com/https://test-es.edamam.com/search?q=${searchValue}&amp;app_id=${APP_ID}&amp;app_key=${APP_KEY}`;
    }

    $.ajax({
        url: searchUrl,
        method: "GET"
    }).then(function (response){
        console.log(response);
    })
      
} 


    // let recipeName = response.hits[0].recipe.label;
    // let recipeImgSrc = response.hits[0].recipe.image;
    // let ingName = response.hits[0].recipe.ingredients[0].food;
    // let ingMeasure = response.hits[0].recipe.ingredients[0].measure;
    // let ingQuant = response.hits[0].recipe.ingredients[0].quantity;
    // let ingGrams = response.hits[0].recipe.ingredients[0].weight;

// Omar APP ID "bb9ad742";
// Maria APP ID "588c938a";
// Dory APP ID "d646e635"
// Omar App KEY "f1f0e0febcb485de149281ede51c6ffd"
// Maria APP Key "52561e55f1ad9a36b20b7445df72154b";
// Dory APP KEY "549406eaebcc7c23fdc7927fa1ea196c"
//Maria's app ID, & app key for spanish endpoint
// const APP_ID = "bb9ad742";
// const APP_KEY = "f1f0e0febcb485de149281ede51c6ffd";
    
//     //kcal - energy intake for food --entire recipe divide by yield if want per serving
//     let calorieLabel = response.hits[0].recipe.totalNutrients.ENERC_KCAL.label;
//     let calorieUnit = response.hits[0].recipe.totalNutrients.ENERC_KCAL.unit;
//     let calorieQuant = (response.hits[0].recipe.totalNutrients.ENERC_KCAL.quantity).toFixed(0);
//     recipeCardBody.append($('<div>', { id: 'recipe0calories', text: 'Total calories: ' + calorieQuant + ' ' + calorieUnit }));
//     //calories per serving
//     let caloriePerserving = (calorieQuant / recipeYield).toFixed(0);
//     recipeCardBody.append($('<div>', { id: 'recipe0caloriesServing', text: 'Calories per serving: ' + caloriePerserving + ' ' + calorieUnit }));


// START SPOONACULAR CALL ---------------------------------------------
// hector's api for spooacular 
// const keySpoonHector = "40e409872bc049d28deda10508960781";
// const ingredientName = "flour";
// const sourceAmount = "2";
// const sourceUnit = "cups";
// const targetUnit = "grams";
// const spoonCallURL = `https://api.spoonacular.com/recipes/convert?ingredientName=${ingredientName}&sourceAmount=${sourceAmount}&sourceUnit=${sourceUnit}&targetUnit=${targetUnit}&apiKey=${keySpoonHector}`

// AJAX call to unit conversion path
// $.ajax({
//     url: spoonCallURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);


// });

// END SPOONACULAR CALL ---------------------------------------------

function displayThumbnailViews (){
    // for (i=searchResultsSet*6; i<searchResultsSet*6+6; i++){
    for (i=0; i < currentRecipesArr.length ; i++){
        $("#displayPane").append($("<div>")  
            .attr("data-arrIndex", i)
            .attr("class", "thumbnail uk-card uk-card-default uk-card-body uk-width-1-1@s uk-width-1-2@m uk-width-1-3@lg uk-height-small")
            .attr("id", `card${i}`)
            .append($("<div>")
                .attr("class", "uk-card-media-top")
                .append($("<img>")
                    .attr("alt", "Recipe Image")
                    .attr("class", "thumbnail")
                    .attr("src", currentRecipesArr[i].recipeImgSrc))))
            $(`#card${i}`).append($("<div>")
                .attr("class", "uk-card-body uk-text-center")
                .append($("<h5>")
                    .attr("class", "uk-card-title")
                    .text(currentRecipesArr[i].recipeName)))   
    }
}
        
displayThumbnailViews ();

function displayRecipe(){
 
    $("#displayPane").empty();

    let recipeCard = $('<div>').attr('class', 'uk-card uk-card-hover');
    $('#displayPane').append(recipeCard);
    recipeCardBody = recipeCard.append($('<div>', {id:'card0body', class: 'uk-card-body',}));

    var name = currentRecipesArr[currentRecipeIndex].recipeName;
    var image = currentRecipesArr[currentRecipeIndex].recipeImgSrc;
    var recipeUrl = currentRecipesArr[currentRecipeIndex].recipeURL;
    var ingredientsArr = currentRecipesArr[currentRecipeIndex].ingredients
    

    recipeCard.append($('<div>', { id: 'recipeName', text: name, class: ' uk-text-uppercase uk-card-title' }));
    recipeCardBody.append($('<img>', { id: 'recipeImg', src: image}));
    recipeCardBody.append($('<div>', { id: 'imgDiv'}));
    $("#imgDiv").append($('<a>', { id: 'recipeUrl', text: 'Recipe URL', target: '_blank', class: 'uk-link-muted', href: recipeUrl }));
    recipeCard.append($('<div>', { id: 'ingredientsContainer', class: '' }));
    
    for (i = 0; i < currentRecipesArr[currentRecipeIndex].ingredients.length; i++) {
        $("#ingredientsContainer").append($("<div>")
            .attr("data-index", i)
            .append($("<span>")
                .attr("class", "ingredient")
                .text(`${ingredientsArr[i][0]} `))
                .append($("<span>")
                    .attr("class", "qty")
                    .text(`${ingredientsArr[i][2]} `)
                    .append($("<span>")
                        .attr("class", "measure")
                        .text(`${ingredientsArr[i][1]} - `))
                        .append($("<span>")
                            .attr("class", "grams")
                            .text(`${ingredientsArr[i][3]} grams`))))
    }
}

$(".thumbnail").on("click", function () {
    currentRecipeIndex = $(this).attr("data-arrIndex");
    console.log($(this).attr("data-arrIndex"));
    displayRecipe ();
})

function pushSavedLocalStorage(){
    localStorage.setItem("savedRecipes", JSON.stringify(currentRecipesArr));
}

function pullSavedLocalStorage(){
   return currentRecipesArr = JSON.parse(localStorage.getItem("savedRecipes"));
}
    
function pushCurrentLocalStorage(){
    localStorage.setItem("currentRecipe", JSON.stringify(currentRecipe));
}

function pullCurrentLocalStorage (){
    return currentRecipe = JSON.parse(localStorage.getItem("currentRecipe"));

}


