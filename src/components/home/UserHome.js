import { useEffect, useState } from "react";
import {useParams} from "react-router";
import { commerce } from "../../lib/commerce";
import { Grid } from "@material-ui/core";

function UserHome({setUserToken, setLoggedIn}) {

  const [custID, setCustID] = useState();
  const [cust, setCust] = useState("");

  let {userToken} = useParams();
  setUserToken(userToken);

  useEffect(() => {
    commerce.customer.getToken(userToken).then((response) =>
      {
        setLoggedIn(true);
        setCustID(response["customer_id"]);
        console.log(response["customer_id"]);
        console.log("***UserToken: " + userToken);
      });
  },[userToken, setLoggedIn]);

  useEffect (() => { 
    if (commerce.customer.isLoggedIn()) {
      setLoggedIn(true);
      setCustID(commerce.customer.id());
    }

  },[setLoggedIn, setCustID]);

  useEffect (() => {
    commerce.customer.about().then((customer) => {
        console.log(customer["email"]);
        setCust(customer);
    });
  },[custID]);

  const [orders, setOrders] = useState([]);

  useEffect (() => {
    if (commerce.customer.isLoggedIn()) {
    commerce.customer.getOrders(custID).then((result) =>
    {   
        console.log(custID);
        console.log(result);
        setOrders(result.data);
    });
  }
  },[custID]);

  if (!custID) {
    return <h2>Please login</h2>
  }
  
    return (
      <div>
        <h2>Welcome... {cust["email"]}</h2>
        { orders.length !== 0 && 
        <h3>Order History</h3>}
        { orders.length === 0 && 
        <h3>Loading order history</h3>}
        <Grid container> {
          
          orders.map((order) => {
            // var timestamp = order.created;
            var orderDate = new Date(0);
            orderDate.setUTCSeconds(order.created);
            return (
              <Grid item key={order.id} xs={12} s={10} md={8}>
                <h4>Order placed: {orderDate.toLocaleDateString()}</h4>
                <p>Order Total: {order.order_value.formatted_with_symbol}</p>
                <p>Order Items:</p>
                <table>
                  <tbody> {
                    order.order.line_items.map((item) => {
                      return(
                        <tr key={item.id}>
                          <td>{item.product_name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.line_total.formatted_with_symbol}</td>
                        </tr>
                      );
                    })
                    }
                  </tbody>
                </table>
                <p></p>
              </Grid>
            )
          })
        }
        </Grid>
      </div>
      // <Grid item container spacing={2}>
      //       <Grid item xs={12} sm={8} md={6}>
      //         <div>
      //           <h2>Welcome... {cust["email"]}</h2>
      //         </div>
      //       </Grid>
      //       <Grid item xs={12} sm={8} md={6}>
      //         <div>
      //           {/* <p>
      //             {orders}
      //           </p> */}
      //         </div>
      //       </Grid>

      // </Grid>
     
      
  );
}

export default UserHome;