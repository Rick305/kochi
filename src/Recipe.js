import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const Recipe = (  ) => {
    const { id } = useParams();
    const { data } = useFetch('http://localhost:3000/Recipes/' + id);
    const history = useHistory();

    const handleDeleteClick = () => {
       fetch('http://localhost:3000/Recipes/' + data.id, {
          method: 'DELETE'
       }).then(() => {
          history.push('/')
       })
    }

    const handleChanceClick = () => {
      history.push(`/changerecipe/${data.id}`)
   }


    return ( 
        <div className="recipe">
           {data && (
              <article>
           <h2 className="recipe-title">{ data.title }</h2>
           <p className="recipe-zubereitungszeit">Zubereitungszeit {data.time} Min.</p>
           <h3 className="recipe-liste-title">Zutaten für {data.person} Personen:</h3>
           <ul className="recipe-zutaten-liste"> 
                     {data.allIngredient.map((allIngredient) => 
                        <li className="recipe-zutaten" >{allIngredient}</li>
                     )}
                 </ul>
            <h3>Zubereitung</h3>
           <p className="recipe-zubereitung">{data.description}</p>
           <button className="delete" onClick={handleDeleteClick}>Löschen</button>
           <button className="change" onClick={handleChanceClick}>Änderung</button>
           </article>
           )}
           
        </div>
     );
}
 
export default Recipe
