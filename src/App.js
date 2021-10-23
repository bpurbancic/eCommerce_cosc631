import Product from "./components/products/Product.js"
import Products from "./components/products/Products.js"
import Navbar from "./components/Navbar.js"
import Cart from "./components/cart/Cart.js"
import {BrowserRouter, Route} from "react-router-dom"
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";



function App() {

    const [cart, setCart] = useState({});
    useEffect(() => {
        commerce.cart.retrieve().then(
            (response) => {
                console.log(response);
                setCart(response);
            }
        );
    }, []);

    const handleAddToCart = (productId, quantity) => {
        commerce.cart.add(productId, quantity).then(
            (response) => {
            console.log(response);
            setCart(response.cart);
            }
        );
    }

    return(
        <Grid container direction='column' spacing={8}>
            <Grid item>
                <header><Navbar cartItems={cart.total_items}/></header>
            </Grid>
            <Grid item container spacing={6}>
                <Grid item xs={false} sm={1} md={2}></Grid>  {/* Left-hand gutter */}
                <Grid item xs={12} sm={10} md={8}>
                <BrowserRouter>
                    <Route exact path="/Products">
                        {/* <h2>Products</h2> */}
                        <Products></Products>
                    </Route>
                    <Route exact path="/Product/:productId" component={Product}>
                        {/* <h3>Product</h3> */}
                        <Product handleAddToCart={handleAddToCart}></Product>
                    </Route>
                    <Route exact path = "/Cart">
                        <Cart cart={cart} />
                    </Route>
                </BrowserRouter>
                </Grid>
                <Grid item xs={false} sm={1} md={2}></Grid>  {/* Right-hand gutter */}
            </Grid>
        </Grid>  
    )
}

export default App;
