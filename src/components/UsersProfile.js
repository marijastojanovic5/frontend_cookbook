import React from 'react'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
const UsersProfile=(props)=>{
    
    return(
        <div>
      Welcome {props.user.user.username}
      My Favorite Recipes:
      {props.user.favorites.map(recipe => (
        <p>{recipe.title}</p>
      ))}
    </div>

    )
}
const mapStateToProps=(store)=>({
    user: store.user
   
   


})

export default withRouter(connect(mapStateToProps)(UsersProfile))