import {commerce} from "../../lib/commerce.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import { Grid } from "@material-ui/core";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            {console.log(product.assets)}
            <ImageGallery showPlayButton={false} items={product.assets.map((asset) => {
                return {original:asset.url}
            })
        }/>
        
        </Grid>
        <Grid item xs={12} md={6}>
            <h4>{product.name}</h4>
            
            <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </Grid>
    </Grid>
  );                  
}

 export default Product;