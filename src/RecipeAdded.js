import { useHistory } from "react-router";
import useFetch from "./useFetch";

const RecipeAdded = () => {

    const {data} = useFetch('http://localhost:3000/Recipes');
    const history = useHistory();

    setTimeout(()=>{
        if(Array.isArray(data)){
            history.push(`/Recipe/${data.length}`);
        }
    },2000)

    return ( 
        <div className="recipe-added">
            <div className="check-sign">
                <div className="circle">
                    <div className="check-left"></div>
                    <div className="check-right"></div>
                </div>
            </div>
            <div className="recipe-added-title">
                <h2>Das Rezept wurde erfolgreich hinzugefügt!</h2>
                <div className="underline"></div>
            </div>
        </div>
     );
}
 
export default RecipeAdded;