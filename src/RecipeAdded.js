import { useHistory } from "react-router";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";

const RecipeAdded = (props) => {

    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
console.log(location.state.state)

    setTimeout(() => {
            history.push(`/recipes/${location.state.id}`)
            }, 2000);

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