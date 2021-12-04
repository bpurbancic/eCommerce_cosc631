import { AppBar, Badge, Button, Toolbar, Typography, IconButton } from "@material-ui/core";
import ToysIcon from '@material-ui/icons/Toys';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import NavbarLogout from "./NavbarLogout.js";
import { commerce } from "../lib/commerce";

function Navbar({cartItems}) {
    let toDisplay = "";
    if (commerce.customer.isLoggedIn()) {
        toDisplay = <Button href="/Logout" variant='outlined' color='primary' size='large' > LOGOUT </Button> 

    }
    else {
        toDisplay = <Button href="/Login" variant='outlined' color='primary' size='large' > LOGIN </Button> 
    }
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <IconButton href="/products"><ToysIcon /></IconButton>
                <IconButton href="/"><HomeIcon /></IconButton>
                {/* <Button href="/" color='primary' size='large' > We R Toys </Button> */}
                {/* <Typography>We R Toys</Typography> */}
                <IconButton href="/Cart">
                    <Badge badgeContent={cartItems} color="primary">
                    <AddShoppingCartIcon />
                    </Badge>
                </IconButton>
                <Typography color="secondary">We R Toys</Typography>
                {toDisplay}
                
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;