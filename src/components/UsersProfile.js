import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
const UserProfilePage = props => {
  console.log("User Profile props:", props);
  return (
    <div>
      Welcome {props.user.user.user_name}
      My Favorite Recipes:{" "}
      <div className="container-fluid">
        <div className="row">
          {props.user.favorites.map(recipe => (
            <div className="col-lg-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={recipe.picture}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={`/recipes/${recipe.id}`}>
                    See Recipe
                  </Link>
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
});
export default withRouter(connect(mapStateToProps)(UserProfilePage));