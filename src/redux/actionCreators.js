const FETCHED_RECIPES= "FETCHED_RECIPES"
const URL = "http://localhost:3000/recipes" 

function fetchedRecipes(recipeArray){
    return {type: FETCHED_RECIPES, payload: recipeArray}
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

export {fetchingRecipes,FETCHED_RECIPES}