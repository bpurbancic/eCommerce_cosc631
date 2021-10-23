import { Grid } from "@material-ui/core";

function CartItem ({cartItem}) {
    return (
        <Grid item key={cartItem.id}>
            {cartItem.name}
            {"  "}
            {cartItem.price.formatted_with_symbol}
        </Grid>
    );
}

export default CartItem;