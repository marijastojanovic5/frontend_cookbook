import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {removeFavRecipe} from "../redux/actionCreators"
const  UserProfilePage = props => {
  return (
    <div className="user-profile-div">
      <h1>Welcome {props.user.user.username}!</h1>
      <div className="profile-div">
      <img id ="avatar"src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="avatar"/>
      <h3>{props.user.user.username}</h3>
      <p>Bio:</p>
      </div>
      My Favorite Recipes:{" "}
      <div className="container-fluid">
        <div className="row">
          {props.user.favorites.map(recipe => (
            <div className="col-lg-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={recipe.picture}
                  alt="card"
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                 
                  <Link to={`/recipes/${recipe.id}`}>
                    See Recipe
                    </Link>
                   <button onClick={()=>{props.recipeDelete(recipe,props.user)}}>Delete from favorites</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = store => ({
  user: store.user,
  recipe: store.recipes
})
const mapDispatchToProps=dispatch=>{
  return {
   recipeDelete: (recipe,user)=>dispatch(removeFavRecipe(recipe,user))
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserProfilePage));