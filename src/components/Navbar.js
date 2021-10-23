import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import ToysIcon from '@material-ui/icons/Toys';

function Navbar({cartItems}) {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton href="/products"><ToysIcon /></IconButton>
                <Typography>Products</Typography>
                {cartItems}
                    
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;