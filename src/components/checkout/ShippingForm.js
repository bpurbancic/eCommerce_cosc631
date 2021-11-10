import {useState} from "react";
import { Button, Grid, MenuItem, Select, TextField } from "@material-ui/core";

function ShippingForm({checkoutToken, setShippingInfo}) {
    // Does above require {} inside the () surrounding both parameters?
    console.log("**Checkout Token** ", checkoutToken);

    const [country, setCountry] = useState("2");
    const [fullName, setName] = useState("Enter Your Full Name");


    return (
        <Grid container direction="column">
            <Grid item>Shipping Form</Grid>
            <Grid item>
                <Select value={country} onChange={(val) => {setCountry(val.target.value)}}>
                    <MenuItem value = "1">Canada</MenuItem>
                    <MenuItem value = "2">United States</MenuItem>
               
                </Select>
            </Grid>
            <Grid item>
                <TextField fullName="fullName" label="Your full name" onChange={(val) => 
                    {setName(val.target.value)}}>    
                </TextField>
            </Grid>
            <Grid item>
                <Button color='secondary' size='medium' onClick = {() => 
                    {setShippingInfo({"fullName":fullName, "country":country})}}>Click to Save Shipping Info</Button>
            </Grid>
            
        </Grid>
        
        
    )
}

export default ShippingForm;