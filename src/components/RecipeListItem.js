import React from 'react'
import {Link} from 'react-router-dom'

const RecipeListItem =props=>{
    return(
       
        <div>
           <Link to={`/recipes/${props.recipe.id}`}>
            <h4>{props.recipe.title}</h4>
            </Link>
            
        </div>
    )
}
export default RecipeListItem