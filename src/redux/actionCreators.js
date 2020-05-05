const URL = "http://localhost:3000/recipes" 
const URLING="http://localhost:3000/ingredients"

function fetchedRecipes(recipeArray){
    return {type: "FETCHED_RECIPES", payload: recipeArray}
}
function onSearch(newSearchTerm){
    return {type: "CHANGE_TEXT", payload: newSearchTerm}
}
function fetchedIngredients(ingredientArray){
    return {type: "FETCHED_INGREDIENTS", payload: ingredientArray}
}
function addIngredient(newIngredient){
    return {type: "ADD_INGREDIENT",payload: newIngredient}
}
function fetchingIngredients(){
    return dispatch => {
        fetch(URLING)
        .then(res=>res.json())
        .then(ingredientArray => {
            dispatch(fetchedIngredients(ingredientArray))
        })

    }
}
function fetchingRecipes(){
    return (dispatch)=>{
    fetch(URL)
    .then(res=>res.json())
    .then(recipeArray=>{
        dispatch(fetchedRecipes(recipeArray))
    })
}
}

export {fetchingRecipes,fetchedRecipes,onSearch,fetchedIngredients,fetchingIngredients, addIngredient}