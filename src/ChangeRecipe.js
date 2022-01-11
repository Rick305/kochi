import useFetch from "./useFetch";
import { useParams } from "react-router";
import { useHistory } from "react-router";

const ChangeRecipe = () => {
   
    const history = useHistory();
    const { id } = useParams();
    const { data } = useFetch('http://localhost:3000/Recipes/' + id);
    const array = [];

    const handleChanceClick = () => {
        makeArray();
        fetch('http://localhost:3000/Recipes/' + data.id, {
           method: 'PATCH',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(
               {title: document.querySelector('.recipe-title').innerHTML,
               person: document.querySelector('.change-person').innerHTML,
               time: document.querySelector('.change-zubereitungszeit').innerHTML,
               allIngredient: array,
               description: document.querySelector('.recipe-zubereitung').innerHTML}
           )
        }).then(() => {
           history.push('/');  
        })
     }

     const makeArray = () => {
        const ul = document.querySelector(".recipe-zutaten-liste");
        let items = ul.getElementsByTagName("li");
        for (var i = 0; i < items.length; ++i) {
          array.push(items[i].innerHTML);
        }
     }

    return ( 
        <div className="change-div">
        {data && (
            <article contentEditable="true">
         <h2 className="recipe-title" >{ data.title }</h2>
         <div className="recipe-zubereitungszeit">Zubereitungszeit <p className="change-zubereitungszeit">{data.time}</p> Min.</div>
           <h3 className="recipe-liste-title">Zutaten für <p className="change-person">{data.person}</p> Personen:</h3>
           <ul className="recipe-zutaten-liste"> 
                     {data.allIngredient.map((allIngredient) => 
                        <li className="recipe-zutaten">{allIngredient}</li>
                     )}
                 </ul>
            <h3>Zubereitung</h3>
           <p className="recipe-zubereitung">{data.description}</p>
           <button className="change" onClick={handleChanceClick}>Speichern</button>
         </article>
         )}
         </div>
     );
}
 
export default ChangeRecipe
