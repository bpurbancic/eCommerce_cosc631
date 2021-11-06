import { Grid } from "@material-ui/core";

function Checkout({cart}) {
    console.log(cart);
    return (
        <Grid container direction='column'>
            <h3>Checkout</h3>
        </Grid>
    )
}

export default Checkout;
