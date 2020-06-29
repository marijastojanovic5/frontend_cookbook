import React from "react";
import { connect } from "react-redux";
import { withRouter, Link} from "react-router-dom";
import { fetchingRecipes, fetchingIngredients,login,removeFavRecipe} from "../redux/actionCreators";
class  UserProfilePage extends React.Component {
  
  componentDidMount() {
    this.props.fetchingRecipes()
    this.props.fetchingIngredients()
  //   if(localStorage.getItem("jwt")){
  //     fetch("http://localhost:3000/usersprofile",{
  //       method: "GET",
  //       headers: {
  //       "Authentication" : localStorage.getItem("jwt"),
  //       "Accept"   : "application/json"

  //  }}).then(res=>res.json())
  //  .then(user => {
  //    this.props.loginUser(user)
    
  //  })
//}
}
render(){
  return (
    <div className="user-profile-div">
      <h1>Welcome {this.props.user.user.username}!</h1>
       <div className="profile-div">
      <img id ="avatar"src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="avatar"/>
     <div>
       <Link to ="/usersprofile/edit">Edit Profile</Link>
     </div>
      <h3>{this.props.user.username}</h3>
      { !this.props.user.user.bio ? null : 
      <div>
      <p>Bio: {this.props.user.user.bio}</p>
      </div> }

      </div>

      My Favorite Recipes:{" "}
      <div className="container-fluid">
        <div className="row">
          {this.props.user.favorites.map(recipe => (
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
                    <button type="button" className="btn btn-secondary delete"onClick={()=>{this.props.recipeDelete(recipe,this.props.user)}}>x</button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  )
}
}
const mapStateToProps = store => {
  return {
    user: store.user,
    recipe: store.recipes
}}
// const mapDispatchToProps=dispatch=>{
//   return {
//    recipeDelete: (recipe,user)=>dispatch(removeFavRecipe(recipe,user))
//   }
// }
const mapDispatchToProps = dispatch => ({
  fetchingRecipes: () => {
    dispatch(fetchingRecipes())
  },
  fetchingIngredients: () => {
    dispatch(fetchingIngredients())
  }
  ,
  loginUser: (user)=>{dispatch(login(user))},
  recipeDelete: (recipe,user)=>{dispatch(removeFavRecipe(recipe,user))
}

 

  
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserProfilePage));