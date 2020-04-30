import React from "react"
import RecipeList from "./RecipeList"
import SearchBar from './SearchBar'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {fetchingRecipes} from "../redux/actionCreators"

class RecipeContainer extends React.Component {
    componentDidMount(){
        this.props.fetchingRecipes()
      }
    render(){
        return (
            <div>
            <SearchBar />
            <RecipeList/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchingRecipes: () => {dispatch(fetchingRecipes())}
  })
export default withRouter(connect(null,mapDispatchToProps)(RecipeContainer))