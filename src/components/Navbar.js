import { AppBar, Badge, Button, Toolbar, Typography, IconButton } from "@material-ui/core";
import ToysIcon from '@material-ui/icons/Toys';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { commerce } from "../lib/commerce";

function Navbar({cartItems}) {
    let toDisplay1 = "";
    let toDisplay2 = "";
    if (commerce.customer.isLoggedIn()) {
        toDisplay1 = <IconButton href="/Profile"><AccountCircleIcon /></IconButton>
        toDisplay2 = 
                    <Button href="/Logout" variant='contained' color='primary' 
                    onClick = {(event) => {
                        commerce.customer.logout();
                        
                    }}
                    > LOGOUT </Button> 

    }
    else {
        toDisplay2 = <Button href="/Login" variant='contained' color='primary' > LOGIN </Button> 
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
                {/* <IconButton href="/Profile"><AccountCircleIcon /></IconButton> */}
                {toDisplay1}
                {toDisplay2}
                
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;