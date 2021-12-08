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
  },[userToken]);

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

  useEffect (() => {
    commerce.customer.getOrders(custID).then((orders) =>
    {   
        console.log(custID);
        console.log(orders);
    });
  },[custID]);

  
    
    return (
      <Grid item container spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
              <div>
                <h2>Welcome... {cust["email"]}</h2>
              </div>
            </Grid>

      </Grid>
     
      
  );
}

export default UserHome;