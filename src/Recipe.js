import { useState } from "react";
import { useHistory, useParams } from "react-router";
import firebase from "./firebase";

const Recipe = (  ) => {
    const { id } = useParams();
    const history = useHistory();
    const [ data, setData ] = useState();
    const [ showpopup, setShowpopup ] = useState(false);

    const recipeRef = firebase
                        .firestore()
                        .collection("recipes")
                        .doc(id);

recipeRef.get().then((doc) => {
  if (!doc.exists) return;
  let testthis =  doc.data();

setData(testthis)
});


    const handleDeleteClick = () => {
      recipeRef
  .delete()
  .then(() => console.log("Document deleted")) // Document deleted
  .catch((error) => console.error("Error deleting document", error))

  history.push('/recipeslist')
    }

    const handleChanceClick = () => {
      history.push({
         pathname: "/addrecipe",
      state: {
         data: data,
         id: id
      }})
   };


    return ( 
        <div className="recipe">
           <div className={showpopup ? "popup" : "popup hide" }>
              <div className="popup-content">
              <p>Willst du dieses Gericht wirklich löschen?</p>
              <div className="bttn-delete">
               <button onClick={() => setShowpopup(false)}>Abbrechen</button>
               <button onClick={handleDeleteClick}>Löschen</button>
              </div>
              </div>
              
           </div>
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
           <button className="delete" onClick={() => setShowpopup(true)}>Löschen</button>
           <button className="change" onClick={handleChanceClick}>Änderung</button>
           </article>
           )}
           
        </div>
     );
}
 
export default Recipe
