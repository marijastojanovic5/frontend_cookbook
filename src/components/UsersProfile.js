import React from 'react'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
const UsersProfile=(props)=>{
    return(
        <div>
      Welcome {props.user.user.first_name}
      My Favorite Recipes:{" "}
      {props.favoriteRecipes.map(recipe => (
        <p>{recipe.title}</p>
      ))}
    </div>

    )
}
const mapStateToProps=(store)=>({
    user: store.user,
    favorites: store.favorites


})

export default withRouter(connect(mapStateToProps)(UsersProfile))