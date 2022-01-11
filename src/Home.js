
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import bg from './stock_photo.jpg';

const Home = () => {
    const [textSearch, setTextSearch] = useState('');
    
    const history = useHistory('hello');

    const onSubmit = () => {
        history.push({
            pathname: '/recipeslist', 
            state: { text:textSearch}});
    }
    
    return ( 
        <div className="home">
          <img src={bg} className="homeBG"/>

          <div className="home-content">
          <h2 className="home-title">Suche nach deinen leckeren Gerichten</h2>
          <form onSubmit={onSubmit} className="form-home">
              <input 
                type="text" 
                id="search-field" 
                placeholder="Suche.."
                value={textSearch} 
                onChange={(e) => setTextSearch(e.target.value)} />
              <input 
                type="submit" 
                id="search-bttn" 
                value="Suche"/>
          </form>
          </div>
          
        </div>
     );
}
 
export default Home;