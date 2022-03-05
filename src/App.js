import Navbar from './Navbar';
import Home from './Home';
import AddRecipe from './AddRecipe';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeAdded from './RecipeAdded';
import Recipe from './Recipe';
import ChangeRecipe from './ChangeRecipe';

function App() {

  return (
    <Router>
    <div className="app">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="main">
      <Switch>

      <Route exact path="/">
          <Home />
        </Route>

      <Route path="/recipeslist">
          <RecipeList />
        </Route>

        <Route path="/addrecipe">
          <AddRecipe />
        </Route>

        <Route path="/recipeadded">
          <RecipeAdded />
        </Route>

        <Route path="/recipes/:id">
          <Recipe />
        </Route>

        <Route path="/changerecipe/:id">
          <ChangeRecipe />
        </Route>

      </Switch>
      </div>
    </div>
    </Router>
  )
}


export default App;
