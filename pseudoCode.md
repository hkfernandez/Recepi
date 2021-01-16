structure
    searchPane - search bar
    savedPane - list of saved recipes
    detailsPane - shows search results and recipe details

global variables
    recipesArr
    currentRecipe
    currentRecipeIndex
    toggleEnglishSpanish
    searchResultsSet

on load
#    function - build savedRecipesList
#        function - pullSavedLocalStorage
            pulls saved recipes from local storage
            puts savedRecpiesArr/Obj into a global recipesArr variable
#        function - postSavedRecipes
            if savedRecipes = null
                post message saying you have no saved recipes
                and that you will see any recipes you have saved here
            else
                build a list of recipe titles from from recipes arr wtih index position
#        function - postCurrentRecipe
            pull currentRecipe from local storage and add it to a currentRecipe variable
            if currentRecipe === null
                post welcome message
            else
                post recipe object from local storage to currentRecipe variable
#                    function - displayRecipe
                        set searchResultsSet to 0
                        set recipe to currentRecipe global variable
                        set global currentRecipeIndex to current recipe index
                        clear display pane
                        using the currentRecipe global variable
                        build the structure of the card to display recipe details and append to display pane
                            be sure to have a unique id for each the ingredients
Search for recipes click event
#    Function - searchRecipes
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
                set gloabl variable searchResultsSet to 0 - captures the which group of 6 results is being displayed
            display first 6 results
#                function - displayThumbnails (startingIndex) 
                    pass in the searchResultsSet as the staring index
                    for loop that runs 6 times
                        index starts with searchResultsSet variable x6 and then increments the searchResultsSet by 1
                        loop builds recipeThumbnail cards and appends them to the displayPane
                        must capture index position of recipe in recipesArr global variable
                user wants to see more results by clicking on arrow or similar
                    on click event
#                        function - seeNextRecipeSet
                            if once searchResultsSet = 4 the user need to start a new search or go back
                            if if this #direction ===forward
                                increment searchResultsSet by 1
                            else
                                decrement searchResultsSet by 1
                            displayThumbnails (searchResultsSet*6)
#                        function - userAlertSearchResultsEnded?
on click evenet - select recipe and see details in detailsPane including larger photo, title, ingredients, ability to convert measurements, ability to save, ability to go back to 6 returned results
    displayRecipe ()
#   function - saveCurrentRecipe
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
    saveCurrentRecipe ()
        on hover event - delete new conversion data
            when hovering beside the newly posted ingredient amounts show a button to delete
            on click event
                when delete button is clicked delete divs containing converted amount and converted unit
        saveCurrentRecipe
Recall saved recipes
    on click event - click on savedRecipes button
        pullSavedLocalStorage ()
        set local storage contents to recipesArr global variable
        displayThumbnails (recipesArr.length)
Select a recipee shown in savedPane 
    on click event
        capture index of selected recipe in recipeIndex varibale
        pullSavedLocalStoarge ()
        use index to find recipe in local storage object and post to current recipe
        displayRecipe()
save a recipe
    pullRecipesLocalStorage()
    add currentRecipe to recipesArr
    pushRecipesLocalStorage
delete a recipe
    pullRecipesLocalStorage()
    use currentRecipeIndex to splice from recipesArr
    pushRecipesLocalStorage

What happens when you click on save?error check to prevent duplicatessaved to local storageupdate recentsAdd notes by user?
