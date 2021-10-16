import {commerce} from "../../lib/commerce.js";
import {useEffect, useState} from "react";
import {useParams} from "react-router";

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
    <div>
        <main>
            <img src= {product.image.url} alt={product.name}/>
            <br></br>
            <h4>{product.name}</h4>
            <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </main>
    </div>
  );
               
           

}

 export default Product;