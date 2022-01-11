import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeList = (props) => {

    const location = useLocation();

    const {data} = useFetch('http://localhost:3000/Recipes');

    const[title, setTitle] = useState('');
    const[art, setArt] = useState('')
    const[time, setTime] = useState(120)

    useEffect(() => {
        if(location.state)
            setTitle(location.state.text);
        }, []
    )

    return ( 
    <div className="collection-page">
        
        <div className="filter">

            <h2 className="filter-title">Filter</h2>

            <div className="filter-name">
                <label for="name">Gericht</label><br/>
                <input 
                id="name"
                type="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="filter-art">
                <label for="art">Menüart</label><br/>
                <select 
                name="art" 
                id="filter-art"
                value={art}
                onChange={(e) => setArt(e.target.value)}
                >
                    {/* when searched on "." every dish appears */ }
                    <option value=".">Alles</option>
                    <option value="Vorspeise.">Vorspeise</option>
                    <option value="Hauptspeise.">Hauptspeise</option>
                    <option value="Nachspeise.">Nachspeise</option>
                    <option value="Snack.">Snack</option>
                    <option value="Getränk.">Getränk</option>
                </select>
            </div>

            <div className="filter-time">
                <label>Bereitungszeit:</label>
                <div className="filter-time-wrapper">
                    <input 
                    id="filter-time"
                    type="range"
                    min="0"
                    max="120"
                    step="1"
                    value={time}
                    onChange={(e) => setTime(parseInt(e.target.value))}
                    /> 
                    <p>{time} Min.</p>
                </div>
            </div>

        </div>


        <div className="recipe-list">
            {data && data.filter((recipe) => {
                        if(recipe.art.includes(art) && time > recipe.time && recipe.title.toLowerCase().includes(title.toLowerCase())){
                            
                            return recipe
                        }
                     }).map((data) => 
                            <Link to={`/Recipe/${data.id}`}>
                                <div className="recipe-item" key={data.id}>                
                                    <p className="recipe-list-title"> {data.title}</p>
                                    <p className="recipe-list-min">{data.time} min.</p>
                                    <ul> 
                                        <p className="title-list-zutaten">Zutaten :</p>
                                        {data.allIngredient.map((allIngredient) => 
                                            <li className="list-zutaten">{allIngredient}</li>
                                        )}
                                    </ul>
                                </div>
                            </Link>
                            )
            }               
        </div>
    </div>
     );
}
 
export default RecipeList;