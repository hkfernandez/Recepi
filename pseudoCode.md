structure
    searchPane - search bar
    savedPane - list of saved recipes
    detailsPane - shows search results and recipe details

global variables
    currentRecipesArr - currect array of recipes the user is dealing with - [recipe1, recipe2, etc]
    currentRecipe - recipe displayed in the displayPane - [recipe object, currentRecipeState, currentRecipeIndex]
    currentRecipeIndex - index of the currentRecipe in the recipesArr
    currentRecipeState - "saved" or "unsaved"
    toggleEnglishSpanish - "english" or "spanish"
    searchResultsSet - variable from 0-3 that controls which current grouping of search results they are viewing
    englishWeightUnits - [lbs, oz, etc]
    englishVolumeUnits - [cups, tsp, etc]
    metricWeightUnits - [g, mg, etc]
    metricVolumeUnits - [l, ml, etc]
    currentIngredientId - allows you to post the results of measurement conversion back to the propper ingredient

Local Storage
    savedRecipesArr - [recipeObject1, receipeObject2, etc]
    currentRecipe - [currentRecipeObject, currentRecipeIndex, currentRecipeState]


Basic Idea 
    - anytime someone does a search or opens an item on local storage, the array created is set to the recipesArr global variable
    - Anytime someone is viewing the details of a recipe in the displayPane, that recipe is put into the currentRecipe variable and its index in the currentRecipesArr is set to the currentRecipeIndex variable and the currentRecipeState is set to saved (for recipes pulled from the user's saved recipes) or unsaved for recipes that are part of the users latest search
    - the current recipe is pushed to local storage every time a change it made; the key used for this is different from the key used to store the users saved recipes
    - not until the user chooses to save the recipe to their personal collection is it added to the recipeArray in local storage

on load
#    function - build savedRecipesList
#        function - pullSavedLocalStorage
            pulls saved recipes from local storage
#        function - postSavedRecipes
            if savedRecipes = null
                post message saying "you have no saved recipes
                and that you will see any recipes you have saved here"
            else
                build a list of recipe titles from from recipes arr wtih index position
#        function - postCurrentRecipe?
            if currentRecipe === null
            post welcome message
            else - 
                pull currentRecipe from local storage 
                set recipe to currentRecipe variable
                set recipeStatus to currentRecipeStatus
                set recipeIndex to currentRecipeIndex
                if currentRecipeStatus = saved
                    pull savedRecipesArr from local storage and set to currentRecipeArr
#               function - displayRecipe
                    clear display pane
                    using the currentRecipe global variable build the structure of the card to display recipe details and append to display pane
                        be sure to have a unique id for each the ingredients
Toggle search between English and Spanish
    create global toggleEnglishSpanish variable and set to english
    when building site structure check the variable
        depending on variable, set approprite text on site
Search for recipes click event when click submit or hit enter
#    Function - searchRecipes
        search validation
            trim search results
            enter user input into a varible
            if variable is blank do nothing - return
            if if actual text send to ajax call
            if ajax call returns an error stop script and return a modal to user saying invalid search
                modal can be dismissed
        Search returns 24 recipes 6 recipes shown in display pane w/ titles and picture and a name
            return 24 results
                capture results in a global variable recipesArr
                set gloabl variable searchResultsSet to 0 - captures the which group of 6 results is being displayed
            display first 6 results
#                function - displayThumbnails (startingIndex) 
                    pass in the searchResultsSet as the staring index
                    for loop that runs 6 times
                        -index starts with searchResultsSet variable x6 and then increments the searchResultsSet by 1
                        -loop builds recipeThumbnail from currentRecipesArr as cards and appends them to the displayPane
                        -must capture index position of recipe in recipesArr
                user wants to see more results by clicking on arrow or similar
                    on click event
#                        function - seeNextRecipeSet
                            if searchResultsSet = 3 
                                the user need to start a new search or go back
                            if this #direction === forward
                                increment searchResultsSet by 1
                            else
                                decrement searchResultsSet by 1
                            displayThumbnails (searchResultsSet*6)
#                        function - userAlertSearchResultsEnded?
on click event - select recipe and see details in detailsPane including larger photo, title, ingredients, ability to convert measurements, ability to save, ability to go back to 6 returned results
#   function displaySelectedRecipe
        set recipe to currentRecipe global variable
        set global currentRecipeIndex based on currentRecipesArr
        displayRecipe ()
#   function - saveCurrentRecipe
        -save selected recipe to localStorage with key currentRecipe
        note: 
            -this is not saving the current recipe in the savedrecipesArr
            -this allows the current recipe to be displayed if the window refreshes or is closed and reopened
Convert ingredient units when viewing recipe details
    find conversion icon to use on site as a button to display dropdown results
    on hover event
#        function - displayConversionUnits
            when hovering over the conversion icon show dropdown of conversion choices
            build 4 global variables of conversion choice
                1 for english weight and 1 for metric weight
                1 for english volume and 1 for metric value
            compare the existing measurement in the recipe to the 4 global variables to figure out which dropdown to display
    on select units event
#       function - convertMeasurement
        when a unit is selected capture multiple values in local variables
            result of user selection in an userUnitChoice varible (ie: ml, tps)
            exiting ingredient measurement units in a recipeUnit variable (ie: ml, tps)
            existiing ingredient in in a recipeIngredient variable (ie: flour, sugar)
        capture id of ingredient div
            set it to a global? currentIngredientId variable so you can find it again to post the new value?
        capture the results of the measurement conversion funtion and pass them to the postConvertedUnits function
#        function - postConvertedUnits
            pass varibles for newUnits and new amounts to this function
            select ingredient with global currentIngredientId
            append new values to exisiting ingredient div with a new div with a convertedAmount class and a new div with a .convertedUnits class
            add a hidden button that will show on hover to delete new conversion data
            saveCurrentRecipe ()
        on hover event - delete new conversion data
#           function - deleteConversion
                when hovering beside the newly posted ingredient amounts show a button to delete
                on click event
                    when delete button is clicked delete divs containing converted amount and converted unit
        saveCurrentRecipe ()
# recallSavedRecipes
    on click event - click on savedRecipes button
        pullSavedLocalStorage ()
        set local storage contents to recipesArr global variable
        displayThumbnails (recipesArr.length)
# postRecentSavedRecipe
    on click event Select a recipee shown in savedPane 
        capture index of selected recipe in currentrecipeIndex varibale
        pullSavedLocalStoarge ()
        use index to find recipe in currentRecipesArr
        displayRecipe()
# saveRecipe
    pullRecipesLocalStorage()
    if currentRecipeStatus = saved
        find recipe in currentRecipesArr and replace using currentRecipeIndex
    elseadd currentRecipe to currentRecipesArr
    pushRecipesLocalStorage ()
# deleteRecipe
    can only be done if the currentRecipeStatus === "saved"
    pullRecipesLocalStorage()
    use currentRecipeIndex to splice from currentRecipesArr
    pushRecipesLocalStorage

What happens when you click on save?error check to prevent duplicatessaved to local storageupdate recentsAdd notes by user?
