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
function favoriteRecipe(recipe){
    return { type: "FAVORITE",payload: recipe };

}
function addNewRecipe(recipe){
    return { type: "ADD_NEW_RECIPE",payload: recipe };

}
function deleteFavoriteRecipe(recipe){
    return {type: "DELETE_FROM_FAVORITES", payload: recipe}
}
function createReview(review){
  return {type: "CREATE_REVIEW",payload: review}
}
function deletingReview(review){
  
  return {type: "DELETE_REVIEW",payload: review}
}
function deleteReview(review){
  
  return dispatch=>{
    fetch(`http://localhost:3000/recipes/${review.recipe_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(review)
  })
  return dispatch(deletingReview(review))
}
}


function addCreatedReview(review, recipe, user) {
  return dispatch => {
    fetch(`http://localhost:3000/recipes/${recipe.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({review: review.reviewText, rating: review.rating, user_id: user.id})
    })
      .then(res => res.json())
      .then(review => {
          dispatch(createReview(review));
      });
  };
}

function removeFavRecipe(recipe,user){
    let favoriteRec={recipe_id: recipe.id,user_id: user.user.id}
    return dispatch =>{
        fetch(`http://localhost:3000/favoriterecipe/${user.user.id}/${recipe.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(favoriteRec)
        })
        return dispatch(deleteFavoriteRecipe(recipe))
        }
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
function favorite(recipe, user) {
   
    let favRecipe = { recipe_id: recipe.id, user_id: user.id}
    return dispatch => {
      fetch("http://localhost:3000/favoriterecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(favRecipe)
          })
          .then(res => res.json())
          .then(recipe => {
            
             
        dispatch(favoriteRecipe(recipe))
      });
    };
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
function addingRecipe({ title, cookTime, instructions, ingredients, picture, gluten, dairy, vegan, vegetarian }) {
    return dispatch => {
      fetch('http://localhost:3000/recipes', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ title, cookTime, instructions, ingredients, picture, gluten, dairy, vegan, vegetarian })
      })
      .then(res => res.json())
      .then(recipe => {
        
       dispatch(addNewRecipe(recipe))
      })
    }
  }
function logginIn({username, password}){
    return dispatch=>{
        fetch("http://localhost:3000/login" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 Accept: "application/json" 
            },
            body: JSON.stringify({username, password})
        })
        .then(res=>res.json())
        .then(user=>{
           if (user.successful){
            localStorage.setItem("jwt",user.token)
            dispatch(login(user))
          }else{
            alert(user.message)
          }
            
        })
     }
}

export {fetchingRecipes,fetchedRecipes,onSearch,fetchedIngredients,resetRedirect,fetchingIngredients, addIngredient,signUp,login,favoriteRecipe,favorite,logginIn,addNewRecipe,addingRecipe,deleteFavoriteRecipe,removeFavRecipe,createReview,addCreatedReview,deleteReview,deletingReview}