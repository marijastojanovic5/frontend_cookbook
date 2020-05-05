import {combineReducers} from 'redux'

const recipeReducer = (oldState=[], action)=>{
    switch(action.type){
    case "FETCHED_RECIPES":
        return action.payload
        default:
            return oldState
    }
}
const searchTextReducer =(oldState="",action)=>{
    switch(action.type){
        case "CHANGE_TEXT":
            return action.payload
            default:
                return oldState
        }
    
}
const ingredientReducer=(oldState=[],action)=>{
    switch(action.type){
        case "FETCHED_INGREDIENTS":
            return action.payload
            default:
               return oldState        }
}
const addIngredientReducer=(oldState=[],action)=>{
    switch(action.type){
        case "ADD_INGREDIENT":
            return [...oldState,action.payload]
            default:
                return oldState
    }
}
const currentUserReducer=(oldState=null,action)=>{
    switch(action.type){
        case "FETCHED_USER":
            return action.payload
            default:
                return oldState
    }
}


    const rootReducer= combineReducers({
        recipes: recipeReducer,
        searchText: searchTextReducer,
        ingredients: ingredientReducer,
        newIngredient: addIngredientReducer,
        user: currentUserReducer
    })

export  default rootReducer
