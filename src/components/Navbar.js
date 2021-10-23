import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import ToysIcon from '@material-ui/icons/Toys';

function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton href="/products"><ToysIcon /></IconButton>
                <Typography>Products</Typography>
                    
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;