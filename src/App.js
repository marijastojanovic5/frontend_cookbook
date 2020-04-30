import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import RecipeContainer from "./components/RecipeContainer"
import RecipeDetailsPage from "./components/RecipeDetailsPage"

import Login from "./components/login"

class App extends React.Component {
  render() {
  return (
      <div>
        <BrowserRouter>
        <Route exact path ="/" component={Login}/>
        <Route exact path="/recipes" component={RecipeContainer}/>
        <Route exact path="/recipes/:id" component={RecipeDetailsPage}/>
      </BrowserRouter>
      </div>
  )
   }
}

export default App
