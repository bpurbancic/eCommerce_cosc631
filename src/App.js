import {commerce} from "./lib/commerce.js"
// Above line is from 10/6 zoom recording but I can't get it to work, with c or C.
import {useState} from "react"

function App() {
    const [products, setProducts] = useState([]);
    commerce.products.list().then(result=> {
        console.log("Retrieved the results");
        setProducts(result.data);
    });
    
    return(
        <div>
            <header>
            <h1>We R Toys</h1>
            <h2>Products</h2>
           </header>
           <main>
               {
                   products.map((product) => {
                       return <p>{product.name}</p>
                   })
               }
           </main>
        </div>  
    )
}

export default App;
