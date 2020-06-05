import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import RecipeContainer from "./components/RecipeContainer";
import RecipeDetailsPage from "./components/RecipeDetailsPage";
import UsersProfile from "./components/UsersProfile"
import RecipeForm from "./components/RecipeForm";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import NavBar from './components/NavBar'
import { connect } from "react-redux";
import { fetchingRecipes, fetchingIngredients,login} from "./redux/actionCreators";
class App extends React.Component {

  
  componentDidMount() {
    this.props.fetchingRecipes()
    this.props.fetchingIngredients()
    if(localStorage.getItem("jwt")){
      fetch("http://localhost:3000/usersprofile",{
        method: "GET",
        headers: {
        "Authentication" : localStorage.getItem("jwt"),
        "Accept"   : "application/json"

   }}).then(res=>res.json())
   .then(user => {
     console.log(user)
    // this.props.loginUser(user)
})
}}
  render() {
    return (
      <div>
        <BrowserRouter>
           <NavBar/> 
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recipes" component={RecipeContainer} />
          <Route exact path="/recipes/:id" component={RecipeDetailsPage} />
          <Route exact path="/addnewrecipe" component={RecipeForm} />
          <Route exact path="/usersprofile" component={UsersProfile}/>
        </BrowserRouter>
      </div>
    );
  }
}
 const mapStateToProps=store=>({
  user: store.user
  
  
})

const mapDispatchToProps = dispatch => ({
  fetchingRecipes: () => {
    dispatch(fetchingRecipes())
  },
  fetchingIngredients: () => {
    dispatch(fetchingIngredients())
  }
 // ,
 // loginUser: (user)=>{dispatch(login(user))}
 

  
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))