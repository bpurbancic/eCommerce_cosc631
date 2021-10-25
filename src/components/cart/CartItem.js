import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '80%',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
});

function CartItem ({cartItem, handleUpdateCart}) {
    const classes = useStyles();
    return (
        <Grid item container spacing={2}>
            <Grid item xs={12} sm={4}>
                <div className={classes.image}>
                    <img src={cartItem.image.url} className={classes.img}></img>
                    
                </div>
            </Grid>
            <Grid item xs={12} sm={6} container direction="column">
                <Grid item>
                    {cartItem.name}
                </Grid>
                <Grid item>
                    unit price: {cartItem.price.formatted_with_symbol}
                </Grid>
                <Grid>
                    <Button onClick={
                        () => {
                            handleUpdateCart(cartItem.id, {quantity: cartItem.quantity-1});
                            // handleUpdateCart(cartItem.id, cartItem.quantity-1);
                            // console.log(cartItem.id);
                            // console.log(cartItem.quantity);
                        }
                    } color='primary' size='small' > - </Button>
                    {cartItem.quantity}
                    <Button onClick={
                        () => {
                            handleUpdateCart(cartItem.id, {quantity: cartItem.quantity+1});
                        }
                    } color='primary' size='small' > + </Button>
                    <Button onClick={
                        () => {
                            handleUpdateCart(cartItem.id, {quantity: 0});
                        }
                    } color='primary' size='small' > REMOVE </Button>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={2}>
                <div>{cartItem.line_total.formatted_with_symbol}</div>
                
            </Grid>
            
        </Grid>
    );
}

export default CartItem;