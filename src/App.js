import Navbar from './Navbar';
import Home from './Home';
import AddRecipe from './AddRecipe';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeAdded from './RecipeAdded';
import Recipe from './Recipe';
import ScrollToTop from './scrollToTop';

function App() {

  return (
    <Router>
      <ScrollToTop/>
    <div className="app">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="main">
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/recipeslist" component={RecipeList}/>
        <Route path="/addrecipe" component={AddRecipe}/>
        <Route path="/recipeadded" component={RecipeAdded}/>
        <Route path="/recipes/:id" component={Recipe}/>

      </Switch>
      </div>
    </div>
    </Router>
  )
}


export default App;
