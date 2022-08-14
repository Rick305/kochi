import { Link } from 'react-router-dom';
import zuhause from './img/zuhause.png';
import book from './img/book.png';
import plus from './img/plus.png';

const Navbar = () => {

    function select() {
       console.log('hello') 
    }

    return ( 
        <nav className='navbar'>

            <h1><Link to ="/kochbuch">Kochi</Link></h1>
            
            <div className="nav-web">
                <ul className="navbar-list">
                    <li className="nav-links"><Link to="/">Home</Link></li>
                    <li className="nav-links"><Link to="/recipeslist">Alle Rezepte</Link></li>
                    <Link to="/addrecipe"><li className="rezeptHinBttn">Rezept hinzufügen</li></Link>
                </ul>
            </div>

  
                <ul className="nav-mobile">
                    <Link to="/kochbuch"><img src={zuhause} alt="" onClick={select} className="select-nav"></img></Link>
                    <Link to="/recipeslist"><img src={book} alt=""/></Link>
                    <Link to="/addrecipe"><img src={plus} alt="" /></Link>
                </ul>
        
        </nav>
     );
}
 
export default Navbar;