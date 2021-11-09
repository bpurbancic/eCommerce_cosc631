import {useState} from "react";
import { Button, Grid, MenuItem, Select, TextField } from "@material-ui/core";

function ShippingForm({checkoutToken, setShippingInfo}) {
    // Does above require {} inside the () surrounding both parameters?
    console.log("Checkout Token, Yo: ", checkoutToken);

    const [country, setCountry] = useState("2");
    const [name, setName] = useState("Enter Your Full Name");


    return (
        <Grid container direction="column">
            <Grid item>Shipping Form Yo</Grid>
            <Grid item>
                <Select value={country} onChange={(e) => {setCountry(e.target.value)}}>
                    <MenuItem value = "1">Canada</MenuItem>
                    <MenuItem value = "2">United States</MenuItem>
               
                </Select>
            </Grid>
            <Grid item>
                <TextField name="name" label="Your full name" onChange={(e) => 
                    {setName(e.target.value)}}>    
                </TextField>
            </Grid>
            <Grid item>
                <Button onClick = {() => {setShippingInfo({"country":country,"name":name})}}>Enter Shipping Info</Button>
            </Grid>
            
        </Grid>
        
        
    )
}

export default ShippingForm;