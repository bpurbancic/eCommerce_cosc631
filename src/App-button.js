import Product from "./components/products/Product.js"
import Products from "./components/products/Products.js"
import {BrowserRouter, Route} from "react-router-dom"
import { Button } from "@material-ui/core";


//import {useParams} from "react-router"
//Version of App.js created during 10/11/21 zoom recording to demonstrate button

function App() {
    

    return(
        <div>
            <header>
            <h1>We R Toys</h1>
            /* Button line can probably be removed */
            
            <Button fullWidth={false} variant='contained' color='primary'
                href='https://mgoblog.com/'>What is this doing here?</Button>
        
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
