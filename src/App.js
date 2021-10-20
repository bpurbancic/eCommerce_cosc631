import Product from "./components/products/Product.js"
import Products from "./components/products/Products.js"
import {BrowserRouter, Route} from "react-router-dom"
import { Grid } from "@material-ui/core";

function App() {

    return(
        <Grid container direction='column'>
            <Grid item>
                <h1>We R Toys</h1>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={false} sm={1} md={2}></Grid>
                <Grid item xs={12} sm={10} md={8}>
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
                </Grid>
                <Grid item xs={false} sm={1} md={2}></Grid>
            </Grid>
        </Grid>  
    )
}

export default App;
