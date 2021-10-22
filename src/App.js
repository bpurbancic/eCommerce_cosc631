import Product from "./components/products/Product.js"
import Products from "./components/products/Products.js"
import {BrowserRouter, Route} from "react-router-dom"
import { Grid, AppBar, Button, Toolbar, Typography, IconButton } from "@material-ui/core";
// import { Storefront } from "@material-ui/icons";
import ToysIcon from '@material-ui/icons/Toys';

function App() {

    return(
        <Grid container direction='column' spacing={8}>
            <Grid item>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton href="/products"><ToysIcon /></IconButton>
                        <Typography>Products</Typography>
                    
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item container spacing={6}>
                <Grid item xs={false} sm={1} md={2}></Grid>  {/* Left-hand gutter */}
                <Grid item xs={12} sm={10} md={8}>
                <BrowserRouter>
                    <Route path="/Products">
                        {/* <h2>Products</h2> */}
                        <Products></Products>
                    </Route>
                    <Route path="/Product/:productId" component={Product}>
                        {/* <h3>Product</h3> */}
                        <Product></Product>
                    </Route>
                </BrowserRouter>
                </Grid>
                <Grid item xs={false} sm={1} md={2}></Grid>  {/* Right-hand gutter */}
            </Grid>
        </Grid>  
    )
}

export default App;
