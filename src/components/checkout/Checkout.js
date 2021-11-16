import { Button, Grid } from "@material-ui/core";
import {commerce} from "../../lib/commerce.js";
import {useEffect, useState} from "react";
import ShippingForm from "./ShippingForm.js";
import PaymentForm from "./PaymentForm.js";


function Checkout({cart}) {
    const [checkout, setCheckout] = useState({});
    useEffect( () => {
        if(cart.id !== undefined) {
            commerce.checkout.generateToken(cart.id, {type: "cart"}).then((checkout) => {
                setCheckout(checkout);
            }) 
        }}, [cart.id]);

    const [shippingInfo, setShippingInfo] = useState({});
    const [paymentMethod, setPaymentMethod] = useState({});
    
    const handlePlaceOrder = (checkout, shippingInfo) => {
        console.log("** checkout:", checkout);
        console.log("** shippingInfo:", shippingInfo);
        console.log("** paymentMethod:", paymentMethod);
        const orderData = {
            "line_items": checkout.live.line_items,
            "customer": {
                "email": shippingInfo["email"]
                },
            "shipping": {
                "name": shippingInfo["name"],
                "street": shippingInfo["street"],
                "town_city": shippingInfo["city"],
                "county_state": shippingInfo["region"],
                "postal_zip_code": shippingInfo["postalCode "],
                "country": shippingInfo["country"]
            },
            "fulfillment": {
                "shipping_method": shippingInfo["shippingMethod"],
            },
            "payment": {
                "gateway": 'stripe',
                "stripe": {
                    "payment_method_id": paymentMethod["id"]
                }
            }
        };
        console.log("** orderData:", orderData);

        commerce.checkout.capture(checkout.id, orderData).then(
            (response) => {
                console.log(" ** capture response:", response);
            }
        )
    }
    if (!checkout.id) return <h4>Loading...</h4>
    return (
        <Grid container direction='column'>
            <Grid item>
                <h2>Checkout</h2>
            </Grid>
            <Grid item>
                <ShippingForm checkoutToken={checkout.id} setShippingInfo={setShippingInfo}/>
                {shippingInfo["country"] &&
                console.log("** Shipping Info from Checkout:", shippingInfo["name"], ",", shippingInfo["country"])}
            </Grid>
            <Grid item>
                <PaymentForm setPaymentMethod={setPaymentMethod}/>
            </Grid>
            <Grid item>
                <Button onClick={(event) => {handlePlaceOrder(checkout, shippingInfo)}}> Click to place order</Button>
            </Grid>
            
        </Grid>
    )
}


export default Checkout;
