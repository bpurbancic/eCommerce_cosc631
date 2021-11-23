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

    const handleEmail = (e) => {
        if(email) {
            commerce.customer.login(email, window.location.href+"/Login").then((response) => console.log(response))
        }
    }
   
    return (
        <Grid container direction="column">
            <Grid item><h3>Login</h3></Grid>
            
            <Grid item>
                <TextField label = "Email Address" onChange = {onEmailChange}
                    error = {emailError}
                    helperText={emailHelper}
                    onBlur = {onEmailUnfocused}
                />
            </Grid>
            <Grid item><Button size = "xsmall" onClick={handleEmail()}>Request Login Credentials</Button></Grid>
            
        </Grid>
        
    );
}

export default Login;