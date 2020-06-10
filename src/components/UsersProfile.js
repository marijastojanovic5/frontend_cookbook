import React from "react";
import { connect } from "react-redux";
import { withRouter, Link} from "react-router-dom";
import {removeFavRecipe} from "../redux/actionCreators"
const  UserProfilePage = props => {
  return (
    <div className="user-profile-div">
      <h1>Welcome {props.user.user.username}!</h1>
       <div className="profile-div">
      <img id ="avatar"src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="avatar"/>
      <h3>{props.user.username}</h3>
      <p>Bio:</p>
      </div>
      My Favorite Recipes:{" "}
      <div className="container-fluid">
        <div className="row">
          {props.user.favorites.map(recipe => (
            <div className="col-lg-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src={recipe.picture}
                  alt="card"
                />

                <div className="card-body">
                  <h6 className="card-title">{recipe.title}</h6>
                 
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary see-recipe"><Link to={`/recipes/${recipe.id}`}>
                    See Recipe
                    </Link></button>
                    <button type="button" className="btn btn-secondary delete"onClick={()=>{props.recipeDelete(recipe,props.user)}}>x</button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};
const mapStateToProps = store => {
  return {
    user: store.user,
    recipe: store.recipes
}}
const mapDispatchToProps=dispatch=>{
  return {
   recipeDelete: (recipe,user)=>dispatch(removeFavRecipe(recipe,user))
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserProfilePage));