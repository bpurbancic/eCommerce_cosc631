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
            commerce.customer.login(email, window.location.href+"/Login").then((response) => console.log(response));
            setEmailSent(true);            
        }
    }
    if (emailSent) {
        return (
            <Grid container direction="column">
            <Grid item><h3>Login</h3></Grid>

            <Grid item><h4>An email is sent to your email address.</h4></Grid>

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

// const [isSent, setIsSent] = useState(false);
// if(isSent) {
//     return <h3> An email is sent to {loginEmail}</h3>
// }

// setIsSent(true) in your handleemail  after console.log

// state = { showing: true };

//     render() {
//         const { showing } = this.state;
//         return (
//             <div>
//                 <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
//                 <div style={{ display: (showing ? 'block' : 'none') }}>This is visible</div>
//             </div>  
//         )
//     }