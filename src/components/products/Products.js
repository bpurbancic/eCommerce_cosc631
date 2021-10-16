import {commerce} from "../../lib/commerce.js";
import {useEffect, useState} from "react";

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
    <div>
        { products.length === 0 && <h2>Loading...</h2> }
        <main> {
        products.map((product) => { 
        return (
            <a href={"/product/productId=" + product.id}><img src={product.image.url} alt={product.name}/></a> 
        )
        } )
    }
        </main>
    
    </div>
);
}
export default Products;