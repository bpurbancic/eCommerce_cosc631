import Product from "./components/products/Product.js"
import Products from "./components/products/Products.js"
import {BrowserRouter, Route} from "react-router-dom"
import { Button } from "@material-ui/core";


//import {useParams} from "react-router"

function App() {
    

    return(
        <div>
            <header>
            <h1>We R Toys</h1>
           </header>
           <main>
               <BrowserRouter>
                <Route path="/Products">
                <h2>Products</h2>
                   <Products></Products>
                </Route>
                <Route path="/Product/:productId" component={Product}>
                <h3>Product</h3>
                    <Product></Product>
                </Route>
                </BrowserRouter>
              
           </main>
        </div>  
    )
}

export default App;
