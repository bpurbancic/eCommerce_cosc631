import {useEffect, useState} from "react";
import { Button, Grid, MenuItem, Select, TextField } from "@material-ui/core";
import ReactPhoneInput from 'react-phone-input-material-ui';
import { commerce } from '../../lib/commerce';

function ShippingForm({checkoutToken, setShippingInfo}) {
    // Does above require {} inside the () surrounding both parameters?
    // console.log("**Checkout Token** ", checkoutToken);

    const [country, setCountry] = useState("");
    const [countries, setCountries] = useState(undefined);
    useEffect(() => {
        commerce.services.localeListShippingCountries(checkoutToken).then(
            (response) => {
                // console.log(response);
                setCountries(response["countries"]);
                setCountry(Object.keys(response["countries"])[0]);
            }
        )
    }, [checkoutToken])
    console.log(" ** country:", country);

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [nameHelper, setNameHelper] = useState("");

    // Can't this next code be in traditional function syntax?
    const onNameChange = (e) => {setName(e.target.value)}

    const onNameUnfocused = (e) => { 
        if (!name) {
            setNameError(true);
            setNameHelper("Name cannot be empty.")
        } else { 
            setNameError(false);
            setNameHelper("");
        }
    }

    const [street, setStreet] = useState("");
    const [streetError, setStreetError] = useState(false);
    const [streetHelper, setStreetHelper] = useState("");

    const onStreetChange = (e) => {setStreet(e.target.value)}

    const onStreetUnfocused = (e) => { 
        if (!street) {
            setStreetError(true);
            setStreetHelper("Street cannot be empty.")
        } else { 
            setStreetError(false);
            setStreetHelper("");
        }
    }

    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState(false);
    const [cityHelper, setCityHelper] = useState("");

    const onCityChange = (e) => {setCity(e.target.value)}

    const onCityUnfocused = (e) => { 
        if (!city) {
            setCityError(true);
            setCityHelper("City cannot be empty.")
        } else { 
            setCityError(false);
            setCityHelper("");
        }
    }

    const [postalCode, setPostalCode] = useState("");
    const [postalCodeError, setPostalCodeError] = useState(false);
    const [postalCodeHelper, setPostalCodeHelper] = useState("");

    const onPostalCodeChange = (e) => {setPostalCode(e.target.value)}

    const onPostalCodeUnfocused = (e) => { 
        if (!postalCode) {
            setPostalCodeError(true);
            setPostalCodeHelper("Postal code cannot be empty.")
        } else { 
            setPostalCodeError(false);
            setPostalCodeHelper("");
        }
    }

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneHelper, setPhoneHelper] = useState("");

    const onPhoneChange = (phoneNumber) => {
        setPhone(phoneNumber)
    }

    const onPhoneUnfocused = () => { 
        if (phone.length !== 11) {
            setPhoneError(true);
            setPhoneHelper("Phone must contain 11 digits.")
        } else { 
            setPhoneError(false);
            setPhoneHelper("");
        }
    }

    console.log("  ** phone: ", phone)

    return (
        <Grid container direction="column">
            <Grid item><h3>Shipping Form</h3></Grid>
            
            <Grid item>
                <TextField label = "Your full name" onChange = {onNameChange}
                    error = {nameError}
                    helperText={nameHelper}
                    onBlur = {onNameUnfocused}
                />
                {/* Below was used before creating a function to pass to onChange */}
                {/* <TextField label="Your full name" onChange = 
                    {(e) => {setName(e.target.value)}}>    
                </TextField> */}
            </Grid>
            <Grid item>
                <ReactPhoneInput component={TextField} onChange={onPhoneChange}
                    inputProps={
                        {
                            error: phoneError,
                            helperText: phoneHelper,
                            onBlur: onPhoneUnfocused
                        }

                    }
                /> 
            </Grid>
            <Grid item>
                <TextField label = "Street Address" onChange = {onStreetChange}
                    error = {streetError}
                    helperText={streetHelper}
                    onBlur = {onStreetUnfocused}
                />
            </Grid>
            <Grid item>
                <TextField label = "City" onChange = {onCityChange}
                    error = {cityError}
                    helperText={cityHelper}
                    onBlur = {onCityUnfocused}
                />
            </Grid>
            <Grid item>
                <TextField label = "Postal Code" onChange = {onPostalCodeChange}
                    error = {postalCodeError}
                    helperText={postalCodeHelper}
                    onBlur = {onPostalCodeUnfocused}
                />
            </Grid>
           
            {countries && country && <Grid item>
                <Select value={country} onChange={(e) => {setCountry(e.target.value)}}>
                {
                    Object.keys(countries).map((countryCode) => {
                        return <MenuItem value = {countryCode} key = {countryCode}>
                            {countries[countryCode]}
                            </MenuItem>
                       })
                   }
                </Select>
            </Grid>}
            {/* Below is original code before changing shipping button to confirm fields are not empty */}
            {/* <Grid item>
                <Button color='secondary' size='small' onClick = {() => 
                    {setShippingInfo({"name":name, "country":country})}}>Click to Save Shipping Info</Button>
            </Grid> */}
            <Grid item>
                <Button color='secondary' size='small' onClick = {() => {
                    onNameUnfocused(name)
                    onStreetUnfocused(street)
                    onCityUnfocused(city)
                    onPostalCodeUnfocused(postalCode)
                    onPhoneUnfocused(phone)
                    if (name && street && city && postalCode && phone) {
                    setShippingInfo(
                        {
                            "name":name,
                            "country":country,
                            "street":street,
                            "city":city,
                            "postalCode":postalCode,
                            "phone":phone
                        }
                    ) }
                }
                }>Click to Save Shipping Info</Button>
            
            </Grid>
        </Grid>
        
        
    )
}

export default ShippingForm;