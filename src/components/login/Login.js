import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { commerce } from "../../lib/commerce";

function Login() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelper, setEmailHelper] = useState("");

    const onEmailChange = (e) => {setEmail(e.target.value)}

    const onEmailUnfocused = (e) => { 
        if (!email) {
            setEmailError(true);
            setEmailHelper("Please enter a valid email address.")
        } else { 
            setEmailError(false);
            setEmailHelper("");
        }
    }

    const [emailSent, setEmailSent] = useState(false);

    const handleEmail = (e) => {
        if(email) {
            // commerce.customer.login(email, window.location.href).then((response) => console.log(response));
            
            // The reference below returns to the root url
            let url = window.location.href;
            let url_parsed = url.substring(0, url.lastIndexOf('/'))
            let url_user = url_parsed + "/UserHome";
            
            
            commerce.customer.login(email, url_user).then((response) => console.log(response));
            console.log("** UserHome: " + url_user);
            setEmailSent(true);            
        }
    }
    if (emailSent) {
        return (
            <Grid container direction="column">
            <Grid item><h3>Login</h3></Grid>

            <Grid item><h4>An email was sent to your email address.</h4></Grid>

        </Grid>
            
        )
    }
   
    return (
        <Grid container direction="column">
            <Grid item><h3>Login</h3></Grid>

            <Grid item>
                <TextField label = "Enter email" onChange = {onEmailChange}
                    error = {emailError}
                    helperText={emailHelper}
                    onBlur = {onEmailUnfocused}
                />
            </Grid>
        
            <Grid item><Button size = "xsmall" onClick={handleEmail}>Request Login Credentials</Button></Grid>
            
        </Grid>
        
    );
}

export default Login;
