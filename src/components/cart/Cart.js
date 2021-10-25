import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem.js"

function Cart({cart, handleUpdateCart, handleEmptyCart}) {
    if (!cart || !cart.line_items ) {
        return <h5><AddShoppingCartIcon/>Loading...</h5>
    }
    if (cart.total_items === 0) {
        return <h5><AddShoppingCartIcon/>Shopping cart is empty</h5>
    }
    return (
        <Grid container direction='column'>
            {
                cart.line_items.map(
                    (cartItem) => {
                        return (
                            <CartItem key={cartItem.id} cartItem={cartItem} handleUpdateCart={handleUpdateCart}/>
                            
                        );

                    }
                )
            }
            <Grid item>
                <Button onClick={
                    () => {
                        handleEmptyCart();
                        }
                    } color='primary' size='small' > EMPTY CART </Button>
            </Grid>

        </Grid> 
    );
}

export default Cart;