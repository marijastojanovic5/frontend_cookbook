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
function login(user){
    return {type: "FETCHED_USER",payload: user}
}
function resetRedirect() {
    return { type: "REDIRECT" };
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
function signUp({firstName,lastName,username, password }){
    return dispatch=>{
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 Accept: "application/json" 
            },
            body: JSON.stringify({firstName, lastName, username, password})
        })
        .then(res=>res.json())
        .then(user=>{
        dispatch(login(user))
    })
    }
}

export {fetchingRecipes,fetchedRecipes,onSearch,fetchedIngredients,fetchingIngredients, addIngredient,signUp,login,resetRedirect}