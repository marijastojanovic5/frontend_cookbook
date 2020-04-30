import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class RecipeDetailsPage extends React.Component {
render(){
    return(
        <div>RecipeDetails</div>
    )
}
}
const mapStateToProps=(store,ownProps)=>({
    recipe: store.recipe.find(
        recipe=>{return recipe.id === ownProps.match.params.recipeId}
    )
})
export default connect(mapStateToProps)(RecipeDetailsPage)