import {commerce} from "./lib/commerce.js"
// Above line is from 10/6 zoom recording but I can't get it to work, with c or C.
import {useEffect, useState} from "react"

function App() {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        commerce.products.list().then(result => {
            console.log("Retrieved the results");
            setProducts(result.data);
        }); 
    }, []);  // the empty array [] is 2nd argument to useEffect()
            // It tells React to only re-execute when it detects a change

    //const { productId } = useParams();
    //const [product, setProduct] = useState([undefined]);
    //useEffect(() => {
    //    commerce.products.retrieve(productId).then(result => {
    //        console.log(result);
    //        setProduct(result);
    //    });
    //}, [productId]);
    
  
    return(
        <div>
            <header>
            <h1>We R Toys</h1>
            <h2>Products</h2>
           </header>
           <main>
               { products.length === 0 && <p>Loading...</p> }
               {
                   products.map((product) => {
                       //return <p key={product.id}>{product.name}</p>
                       // Above should get rid of key error. It didn't work for me.
                       //return <p>{product.name}</p>  
                        return <img key={product.id} src={product.image.url} alt={product.name}/>
                        // Above was taken from a slide image at 52 min of 10/6 zoom video
                        //return <a href={product.url}><img src={product.image.url} alt={product.name} /></a>
                        //Above was supposed to make image clickable.
                    })
               }
           </main>
        </div>  
    )
}

export default App;
