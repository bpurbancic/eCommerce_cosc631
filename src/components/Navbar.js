import { AppBar, Badge, Button, Toolbar, Typography, IconButton } from "@material-ui/core";
import ToysIcon from '@material-ui/icons/Toys';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { commerce } from "../lib/commerce";

function Navbar({cartItems}) {
    let toDisplay = "";
    if (commerce.customer.isLoggedIn()) {
        toDisplay = <Button href="/Logout" variant='contained' color='primary' 
                    onClick = {(event) => {
                        commerce.customer.logout();
                        
                    }}
                    > LOGOUT </Button> 

    }
    else {
        toDisplay = <Button href="/Login" variant='contained' color='primary' > LOGIN </Button> 
    }
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton href="/products"><ToysIcon /></IconButton>
                <IconButton href="/"><HomeIcon /></IconButton>
               
                <IconButton href="/Cart">
                    <Badge badgeContent={cartItems} color="secondary">
                    <AddShoppingCartIcon />
                    </Badge>
                </IconButton>
                <Button fullWidth={false} variant='contained' color='primary'
                href="/UserHome/:userToken">Orders</Button>
               
                {toDisplay}
                
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;