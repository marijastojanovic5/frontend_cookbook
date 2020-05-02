import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import RecipeContainer from "./components/RecipeContainer";
import RecipeDetailsPage from "./components/RecipeDetailsPage";
import RecipeForm from "./components/RecipeForm";
import Login from "./components/login";
import { connect } from "react-redux";
import { fetchingRecipes } from "./redux/actionCreators";
class App extends React.Component {
  componentDidMount() {
    this.props.fetchingRecipes();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/recipes" component={RecipeContainer} />
          <Route exact path="/recipes/:id" component={RecipeDetailsPage} />
          <Route exact path="/addnewrecipe" component={RecipeForm} />
        </BrowserRouter>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchingRecipes: () => {
    dispatch(fetchingRecipes());
  }
});
export default withRouter(connect(null, mapDispatchToProps)(App));