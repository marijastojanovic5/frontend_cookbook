import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class RecipeDetailsPage extends React.Component {
render(){
  return !this.props.recipe ? null : (
        <div>
        <h4>{this.props.recipe.title}</h4>
        <img alt ="recipe_image" src={this.props.recipe.picture}/>
        <h5>Instructions: </h5>
        <p>{this.props.recipe.instructions}</p>
        <p>Cook time: {this.props.recipe.cook_time} min</p>

        <p>Rating: {this.props.recipe.rating}</p>
        <p>Vegetarian: {this.props.recipe.vegetarian ? "Yes" : "No" }</p>
        <p>Gluten Free: {this.props.recipe.gluten_free? "Yes" : "No"}</p>
        <p>Vegan: {this.props.recipe.vegan ? "Yes" : "No"}</p>
        <p>Dairy Free: {this.props.recipe.dairy_free ? "Yes" : "No"}</p>




        </div>
    )
}
}
const mapStateToProps=(store,ownProps)=>({
   recipe: store.recipes.find(rec=>rec.id === parseInt(ownProps.match.params.id))
    
})
export default withRouter(connect(mapStateToProps)(RecipeDetailsPage))