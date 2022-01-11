import { useState } from "react";
import { useHistory } from "react-router";

const AddRecipe = () => {

const history = useHistory();

const [title, setTitle] = useState('');
const [person, setPerson] = useState('')
const [time, setTime] = useState('');
const [art, setArt] = useState('');
const [ingredient, setIngredient] = useState([]);
const [allIngredient, setAllIngredient] = useState([]);
const [description, setDescription] = useState('');

const htmlTemplate = `<li className="added-ingredient" style="color:gray; border: lightgray 1px solid; padding: 5px; margin-bottom: 5px;list-style: none;">`+ ingredient + `</li>`;

const handleClick = () => {
    
    if(ingredient != ''){
        document.querySelector('.output-ingredients-list').innerHTML += htmlTemplate;
    setAllIngredient(allIngredient => [...allIngredient, ingredient]);
    setIngredient('')
    }
}

const handleSubmit = (e) => {
    e.preventDefault();

    setIngredient(allIngredient);

    const recipe = { title, person, time, art, allIngredient, description};

    fetch('http://localhost:3000/Recipes', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe)
    }).then(() => {
        history.push("/recipeadded");
    })
}

    return ( 
        <div className="add-form">
            <h2>Füge deine ganz leckeren Rezepte hinzu!</h2>
            <form onSubmit={handleSubmit} className="add-form-input">
                 <label for="title">Gericht</label>
                 <input 
                 type="text" 
                 id="title" 
                 name="title" 
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 />
                 <div className="form-person-time">
                     <div className="person-wrapper">
                        <label for="person">Anzahl Personen</label><br/>
                        <input
                        type="number"
                        id="person"
                        name="person"
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                        />
                     </div>
                     <div className="time-wrapper">
                        <label for="dauer">Zubereitungszeit</label>
                        <div className="zubereitungszeit">
                            <input 
                            type="number" 
                            id="dauer" 
                            name="dauer"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            />
                            <p>Min.</p>
                        </div>
                     </div>
                     <div className="art-wrapper">
                         <label>Menüart</label><br/>
                         <select 
                         name="art" 
                         id="art"
                         value={art}
                         onChange={(e) => setArt(e.target.value)}
                         >
                            <option value="Vorspeise.">Vorspeise</option>
                            <option value="Hauptspeise.">Hauptspeise</option>
                            <option value="Nachspeise.">Nachspeise</option>
                            <option value="Snack.">Snack</option>
                            <option value="Getränk.">Getränk</option>
                        </select>
                     </div>
                 </div>
                 <div className="ingredients">
                    <label for="zutaten">Zutaten</label> 
                    <label for="zutaten" onClick={handleClick} className="plus">+</label><br/>
                 </div>
                <div className="ingredients-list">
                     <input 
                         type="text" 
                         id="zutaten" 
                         name="zutaten"
                         value={ingredient}
                         onChange={(e) => setIngredient(e.target.value)}
                         /><br/>
                </div>
                <div className="output-ingredients-list">
                     
                </div>

                 <label for="arbeit">Zubereitung</label>
                 <textarea 
                 rows="5" 
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 /> <br/>

                 <input type="submit" value="Speicher Rezept" className="submit"></input>
            </form>
            <p>{ ingredient }</p>
        </div>
     
     );
}
 
export default AddRecipe;