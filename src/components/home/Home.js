import { useState } from "react";
import { Button } from "@material-ui/core";

function Home() {
    
    const [greeting, setGreeting] = useState("Enjoy your stay!!");  
    // [] takes initial value (the parameter) & the function used to change that value.

    const [msg, setMsg] = useState("Click here for an important message.");

    const changeGreeting = () => {
        setGreeting('Please click the Chat button for help!');
    }

    const changeMsg = () => {
        setMsg('This is a lower-case b button')

    }

    return (
        <div>
        <h2>Welcome to We R Toys!!</h2>
        <p>
        <Button onClick={
            () => {
                changeGreeting();
                }
            } color='primary' size='large' variant='outlined' > {greeting} </Button>
        </p>
        <button onClick={changeMsg}>{ msg }</button>    
        </div>
        
    );
}

export default Home;