// import { useState, useEffect } from "react";

// const useFetch = (url) => {
    
//     const [data, setData] = useState(null);

//     useEffect(()=>{
//         fetch(url)
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             setData(data)
//         });
//     },[url]);

//     return { data }
// }

// export default useFetch;

import firebase from "firebase/compat";
import { useState } from "react";
import react from "react";

const ref = firebase.firestore().collection("recipes");


const getData = () => { 
  const db = null;

    ref.get().then((item) => {
      const data = item.docs.map((doc) => ({...doc.data(), id: doc.id}))
      // console.log(data)
      db = data;
      return {db};
})
}


 export default { getData }