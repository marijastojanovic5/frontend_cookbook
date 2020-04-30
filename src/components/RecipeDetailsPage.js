import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class RecipeDetailsPage extends React.Component {
render(){
  return !this.props.recipe ? null : (
        <div>{this.props.recipe.title}</div>
    )
}
}
const mapStateToProps=(store,ownProps)=>({
   recipe: store.recipes.find(rec=>rec.id === parseInt(ownProps.match.params.id))
    
})
export default withRouter(connect(mapStateToProps)(RecipeDetailsPage))