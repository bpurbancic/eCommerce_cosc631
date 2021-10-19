import {commerce} from "../../lib/commerce.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import { Grid } from "@material-ui/core";

function Product () {
const { productId } = useParams();
 const [product, setProduct] = useState([]);
 useEffect(() => {
     commerce.products.retrieve(productId).then(result => {
         console.log(result);
         setProduct(result);
     });
 }, [productId]);
 
               return product.length === 0 ? <h2>Loading...</h2> : (
    <Grid container>
        <Grid item xs={12} md={6}>
            <img src= {product.image.url} alt={product.name}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <h4>{product.name}</h4>
            <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </Grid>
    </Grid>
  );                  
}

 export default Product;