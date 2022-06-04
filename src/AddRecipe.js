import { useEffect, useState, React } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import firebase from "./firebase";

const AddRecipe = (props) => {

const history = useHistory();
const ref = firebase.firestore().collection("recipes");


const [title, setTitle] = useState('');
const [person, setPerson] = useState('')
const [time, setTime] = useState('');
const [art, setArt] = useState('Vorspeise.');
const [ingredient, setIngredient] = useState([]);
const [allIngredient, setAllIngredient] = useState([]);
const [description, setDescription] = useState('');

const location = useLocation();

useEffect(()=> {
    if (location.state){ //if needed to make changes, set pre settings
    let data = location.state.data;
    setTitle(data.title);
    setPerson(data.person);
    setTime(data.time);
    setArt(data.art);
    setIngredient(data.ingredient);
    setAllIngredient(data.allIngredient);
    setDescription(data.description);
} else {
    setTitle('');
    setPerson('');
    setTime('');
    setArt('Vorspeise.');
    setIngredient([]);
    setAllIngredient([]);
    setDescription('');
}
}, [location.state])

const handleClick = () => {
    if(ingredient !== ''){
        setAllIngredient(allIngredient => [...allIngredient, ingredient]);
        setIngredient('')
    }
}

const handleDelete = (e) =>{
    if(e.target.className === "deletebtn"){
        const name = e.target.previousSibling.textContent;
        setAllIngredient(allIngredient.filter(item => item !== name));
    }
}

function addRecipe(recipe){
    ref
    .add(recipe)
    .catch((err) => {
      console.error(err);
    })
    .then((ref) => {
        history.push("/recipeadded", {id: ref.id})
        })
}

const handleSubmit = (e) => {
    e.preventDefault();

    setIngredient(allIngredient);

    const recipe = { title, person, time, art, allIngredient, description};

    if(!location.state){
   addRecipe(recipe);
}else {
    ref.doc(location.state.id)
    .update(recipe)
    .then(() => {
        console.log('Document is updated');
    })
    .catch((error) => {
        console.log("Error updating doc", error)
    })
    history.push(`/recipes/${location.state.id}`);  
}
}

    return ( 
        <div className="add-form">
            <h2>{location.state ? 'Passe das Rezept nach deinen Wünschen an' :'Füge deine ganz leckeren Rezepte hinzu!'}</h2>
            <form onSubmit={handleSubmit} className="add-form-input">
                 <label htmlFor="title">Gericht</label>
                 <input 
                 type="text" 
                 id="title" 
                 name="title" 
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 required
                 />
                 <div className="form-person-time">
                     <div className="person-wrapper">
                        <label htmlFor="person">Anzahl Personen</label><br/>
                        <input
                        type="number"
                        id="person"
                        name="person"
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                        required
                        />
                     </div>
                     <div className="time-wrapper">
                        <label htmlFor="dauer">Zubereitungszeit</label>
                        <div className="zubereitungszeit">
                            <input 
                            type="number" 
                            id="dauer" 
                            name="dauer"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
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
                         required
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
                    <label htmlFor="zutaten">Zutaten</label> 
                    <label htmlFor="zutaten" onClick={handleClick} className="plus">+</label><br/>
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
                <div className="output-ingredients-list" onClick={handleDelete}>
                     {allIngredient.map((allIngredient, index) => (
                        <li key={index}>
                                <p>{allIngredient}</p>
                             <div className="deletebtn"></div>
                         </li>
                     ))}
                </div>

                 <label htmlFor="arbeit">Zubereitung</label>
                 <textarea 
                 rows="5" 
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 required
                 /> <br/>
                 
                 <div className={location.state ? "save-changes" : "hide"} onClick={() => {history.goBack()}}>Abbrechen</div>
                 <input type="submit" value="Speicher Rezept" className="submit"></input>
                 
            </form>
        </div>
     
     );
}
 
export default AddRecipe;