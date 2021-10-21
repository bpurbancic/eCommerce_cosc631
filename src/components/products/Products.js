import {commerce} from "../../lib/commerce.js";
import {useEffect, useState} from "react";
import { Card, CardActionArea, CardMedia, Grid } from "@material-ui/core";
import { makeStyles} from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     media: {
//         height: 400,
//     }
// });

function Products () {
    // const classes = useStyles();
    const [products, setProducts] = useState([]);
    useEffect(() => {
    commerce.products.list().then(result => {
        console.log(result);
        setProducts(result.data);
    }); 
}, []);  // the empty array [] is 2nd argument to useEffect()
        // It tells React to only re-execute when it detects a change

    return  (
        <Grid container spacing={2}>
            { products.length === 0 && <h2>Loading...</h2> }
            <Grid item container xs={12} sm={6} md={4} lg={3}> {
                products.map((product) => { 
                    return (
                        <Grid item key={product.id} >
                         <Card>
                                <CardActionArea href={"/product/productId=" + product.id}> 
                                    
                                    <CardMedia style={{height:400, width:800}} image ={product.image.url} alt={product.name}/>

        
                                </CardActionArea>
                            </Card>   
                         {/* <a href={"/product/productId=" + product.id}><img src={product.image.url} alt={product.name} width="750" /></a>  */}
                        </Grid>
                    )
                } )
            }
            </Grid>
    
        </Grid>
    );
}
export default Products;