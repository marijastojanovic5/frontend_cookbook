import React from "react";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";
class RecipeContainer extends React.Component {
  render() {
    return (
      <div className="container-fluid-all">
        <SearchBar />
        <RecipeList />
      </div>
    );
  }
}
export default RecipeContainer

