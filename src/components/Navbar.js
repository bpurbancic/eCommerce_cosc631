import { AppBar, Badge, Toolbar, Typography, IconButton } from "@material-ui/core";
import ToysIcon from '@material-ui/icons/Toys';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Navbar({cartItems}) {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton href="/products"><ToysIcon /></IconButton>
                <Typography>We R Toys</Typography>
                <IconButton>
                    <Badge badgeContent={cartItems} color="secondary">
                    <AddShoppingCartIcon />
                    </Badge>
                </IconButton>            
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;