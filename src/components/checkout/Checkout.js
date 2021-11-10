import { Grid } from "@material-ui/core";
import {commerce} from "../../lib/commerce.js";
import {useEffect, useState} from "react";
import ShippingForm from "./ShippingForm.js";


function Checkout({cart}) {
    console.log(" ** cart ** ", cart);
   
    // const [checkoutToken, setID] = useState("Checkout ID will go here");  Maybe??
    const [checkoutToken, setCheckoutToken] = useState([]);

    const [shippingInfo, setShippingInfo] = useState({});

    useEffect( () => {
        if(cart.id !== undefined) {
            // console.log("In useEffect");
            commerce.checkout.generateToken(cart.id, {"type": "cart"}).then(
            response => {
                console.log("** generateToken ** ", response);
                setCheckoutToken(response.id);
            }) 
        }}, [cart.id]);

    return (
        <Grid container direction='column'>
            <Grid item>
                <h2>Checkout</h2>
            </Grid>
            <Grid item>
                <ShippingForm checkoutToken={checkoutToken} setShippingInfo={setShippingInfo}/>
                {shippingInfo["country"] &&
                console.log("** Shipping Info (name, country code) ** ", shippingInfo["name"], ",", shippingInfo["country"])}
            </Grid>
            <Grid item><h3>Payment Information Placeholder</h3></Grid>
            <Grid item><h3>Submission Placeholder</h3></Grid>
            
        </Grid>
    )
}

export default Checkout;
