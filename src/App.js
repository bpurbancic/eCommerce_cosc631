import Commerce from "@chec/commerce.js"

function App() {
    const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY,true);
    commerce.products.list().then(response=>console.log(response.data));
    return(
        <div>
            <h2>
                We R Toys
            </h2>
           
        </div>
    )
}

export default App;
