import { AppBar, Badge, Button, Toolbar, Typography, IconButton } from "@material-ui/core";
import ToysIcon from '@material-ui/icons/Toys';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Navbar({cartItems}) {
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
                <Button href="/Login" variant='outlined' color='primary' size='large' > LOGIN </Button>   

            </Toolbar>
        </AppBar>

    );
}

export default Navbar;