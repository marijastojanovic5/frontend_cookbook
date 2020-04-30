const URL = "http://localhost:3000/recipes" 

function fetchedRecipes(recipeArray){
    return {type: "FETCHED_RECIPES", payload: recipeArray}
}
function onSearch(newSearchTerm){
    return {type: "CHANGE_TEXT", payload: newSearchTerm}
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

export {fetchingRecipes,fetchedRecipes,onSearch}