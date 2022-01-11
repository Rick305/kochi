
import { Link } from 'react-router-dom';


const Navbar = () => {



    return ( 
        <nav className='navbar'>
            <h1><Link to ="/">Kochi</Link></h1>
            <ul className="navbar-list">
                <li className="nav-links"><Link to="/">Home</Link></li>
                <li className="nav-links"><Link to="/recipeslist">Alle Rezepte</Link></li>
                <li className="rezeptHinBttn"><Link to="/addrecipe">Rezept hinzufügen</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;