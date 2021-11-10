import {useState} from "react";
import { Button, Grid, MenuItem, Select, TextField } from "@material-ui/core";

function ShippingForm({checkoutToken, setShippingInfo}) {
    // Does above require {} inside the () surrounding both parameters?
    console.log("**Checkout Token** ", checkoutToken);

    const [country, setCountry] = useState("1");
    const [fullName, setName] = useState("");
    // console.log(" ** fullName ** ", fullName);

    // Can't this next code be in traditional function syntax?
    const onNameTextFieldChange = (e) => {
        setName(e.target.value);
    }

    return (
        <Grid container direction="column">
            <Grid item>Shipping Form</Grid>
            <Grid item>
                <Select value={country} onChange={(e) => {setCountry(e.target.value)}}>
                    <MenuItem value = "1">Canada</MenuItem>
                    <MenuItem value = "2">United States</MenuItem>
               
                </Select>
            </Grid>
            <Grid item>
                <TextField label = "Your full name" onChange = {onNameTextFieldChange}/>
                {/* Below was used before creating a function to pass to onChange */}
                {/* <TextField label="Your full name" onChange = 
                    {(e) => {setName(e.target.value)}}>    
                </TextField> */}
                {/* Delete below? Does the fullName assignment do anything?!?! */}
                {/* <TextField fullName="fullName" label="Your full name" onChange={(e) => 
                    {setName(e.target.value)}}>    
                </TextField> */}
            </Grid>
            <Grid item>
                <Button color='secondary' size='medium' onClick = {() => 
                    {setShippingInfo({"fullName":fullName, "country":country})}}>Click to Save Shipping Info</Button>
            </Grid>
            
        </Grid>
        
        
    )
}

export default ShippingForm;