import {commerce} from "../../lib/commerce.js";
import {useEffect, useState} from "react";
import { Grid } from "@material-ui/core";

function Products () {

    const [products, setProducts] = useState([]);
    useEffect(() => {
    commerce.products.list().then(result => {
        console.log(result);
        setProducts(result.data);
    }); 
}, []);  // the empty array [] is 2nd argument to useEffect()
        // It tells React to only re-execute when it detects a change

return  (
    <Grid container direction='column'>
        { products.length === 0 && <h2>Loading...</h2> }
        <Grid item container xs={12} sm={6} md={4} lg={3}> {
            products.map((product) => { 
            return (
                <a href={"/product/productId=" + product.id}><img src={product.image.url} alt={product.name} width="750" /></a> 
            )
        } )
    }
        </Grid>
    
    </Grid>
);
}
export default Products;