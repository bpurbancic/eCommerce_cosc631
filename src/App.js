import Commerce from "@chec/commerce.js"
//import {commerce} from "./lib/commerce"
// Above line is from 10/6 zoom recording but I can't get it to work, with c or C.

function App() {
    const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY,true);
    commerce.products.list().then(response=>console.log(response.data));
    
    return(
        <div>
            <h2>
                We R Toys
            </h2>
           
        </div>
    )
}

export default App;
