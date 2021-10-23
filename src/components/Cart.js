import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Grid } from "@material-ui/core";

function Cart({cart}) {
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
                            <Grid item key={cartItem.id}>
                                {cartItem.name}
                                {"  "}
                                {cartItem.price.formatted_with_symbol}
                            </Grid>
                        );

                    }
                )
            }
        </Grid> 
    );
}

export default Cart;