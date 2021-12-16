import { commerce } from "../../lib/commerce";
import { useEffect, useState } from "react";
import { Button, Grid, MenuItem, Select, TextField } from "@material-ui/core";
import ReactPhoneInput from 'react-phone-input-material-ui';

function Profile() {
    // Note: Customer should always be logged when they come to this page.
    // But to be safe we check login status anyway.

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [custID, setCustID] = useState("");
    
    useEffect (() => {
        commerce.customer.about().then((customer) => {
            console.log(customer);
            setName(customer["firstname"] + " " + customer["lastname"]);
            setEmail(customer["email"]);
            setPhone(customer["phone"]);
            setCustID(customer["id"]);
            
        });
    },[]);

    const [nameError, setNameError] = useState(false);
    const [nameHelper, setNameHelper] = useState("");

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

    const [emailError, setEmailError] = useState(false);
    const [emailHelper, setEmailHelper] = useState("");

    const onEmailChange = (e) => {setEmail(e.target.value)}

    const onEmailUnfocused = (e) => { 
        if (!email) {
            setEmailError(true);
            setEmailHelper("Email cannot be empty.")
        } else { 
            setEmailError(false);
            setEmailHelper("");
        }
    }

    const [phoneError, setPhoneError] = useState(false);
    const [phoneHelper, setPhoneHelper] = useState("");

    const onPhoneChange = (e) => {setPhone(e.target.value)}

    const onPhoneUnfocused = () => { 
        if (!phone) {
            setPhoneError(true);
            setPhoneHelper("Phone cannot be empty.")
        } else { 
            setPhoneError(false);
            setPhoneHelper("");
        }
    }

    function handleUpdate(){
        let nameSplit = name.split(' ');
        let first = nameSplit[0];
        let last = nameSplit[nameSplit.length-1];

        commerce.customer.update({
            
            firstname: first,
            lastname: last,
            phone: phone
            
          }, custID).then((customer) => console.log(customer));
    }

    return (
        <Grid container direction="column">
            <Grid item><h3>Profile Information</h3></Grid>
            
            <Grid item>
                <TextField label = {name} onChange = {onNameChange}
                    error = {nameError}
                    helperText={nameHelper}
                    onBlur = {onNameUnfocused}
                />
               
            </Grid>
            
            <Grid item>
                <TextField label = {email} onChange = {onEmailChange}
                    disabled = {true}
                    error = {emailError}
                    helperText={emailHelper}
                    onBlur = {onEmailUnfocused}
                />
            </Grid>
            
            <Grid item>
                <TextField label={phone} onChange={onPhoneChange}
                    error = {phoneError}
                    helperText={phoneHelper}
                    onBlur = {onPhoneUnfocused}     
                            
                       
                /> 
            </Grid>
            <Grid item>
            <Button onClick={handleUpdate} color='primary' size='small' >Update Profile</Button>
            
            </Grid>
        </Grid>
    )
   

}

export default Profile;