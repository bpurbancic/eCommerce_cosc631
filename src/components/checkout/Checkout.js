import { Button, Grid } from "@material-ui/core";
import {commerce} from "../../lib/commerce.js";
import {useEffect, useState} from "react";
import ShippingForm from "./ShippingForm.js";
import PaymentForm from "./PaymentForm.js";


function Checkout({cart}) {

    const [shippingInfo, setShippingInfo] = useState({});
    const [paymentMethod, setPaymentMethod] = useState({});
    const [checkout, setCheckout] = useState({});
    
    useEffect( () => {
        if(cart.id !== undefined) {
            commerce.checkout.generateToken(cart.id, {type: "cart"}).then((checkout) => {
                setCheckout(checkout);
            }) 
    }}, [cart.id]);

    let custID = commerce.customer.id();
    // console.log("customer ID:", custID);
    // if (custID) {
    //     console.log("Logged in!");
    // }

    
    
    const handlePlaceOrder = (checkout, shippingInfo) => {
        console.log("** checkout:", checkout);
        console.log("** shippingInfo:", shippingInfo);
        console.log("** paymentMethod:", paymentMethod);
        // How do I show name, phone, email only when logged in?
        // if (custID) {
        //     commerce.customer.about().then((customer) => {
        //         let shippingName = customer.firstname + " " + customer.lastname;
        //         console.log("shippingName:"+shippingName);
        //     });
        // } else {
        //     let shippingName = shippingInfo["name"];
        // }
        // Note: Code below splits the name from shipping info and ignores all but first and last word
        let nameSplit = shippingInfo["name"].split(' ');
        let first = nameSplit[0];
        let last = nameSplit[nameSplit.length-1];
        const orderData = {
            "line_items": checkout.live.line_items,
            "customer": {
                "email": shippingInfo["email"],
                "firstname": first,
                "lastname": last,
                "phone": shippingInfo["phone"]
                },
            "shipping": {
                "name": shippingInfo["name"],
                // "name": shippingName,
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
