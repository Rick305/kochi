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
               {title: document.querySelector('.change-recipe-title').innerHTML,
               person: document.querySelector('.change-person').innerHTML,
               time: document.querySelector('.change-zubereitungszeit').innerHTML,
               allIngredient: array,
               description: document.querySelector('.change-recipe-zubereitung').innerHTML}
           )
        }).then(() => {
           history.push('/recipeslist');  
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
            // <article contentEditable="true">
            <article>
         <p className="change-recipe-title" >{ data.title }</p>
         <p className="change-zubereitungszeit">{data.time}</p>
         <p className="change-person">{data.person}</p>
           <ul className="recipe-zutaten-liste"> 
                     {data.allIngredient.map((allIngredient) => 
                        <li className="recipe-zutaten">{allIngredient}</li>
                     )}
                 </ul>
            
           <p className="change-recipe-zubereitung">{data.description}</p>
           <button className="change" onClick={handleChanceClick}>Speichern</button>
         </article>
         )}
         </div>
     );
}
 
export default ChangeRecipe
