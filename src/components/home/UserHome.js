import { useEffect, useState } from "react";
import {useParams} from "react-router";
import { commerce } from "../../lib/commerce";

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
        console.log("***UserToken: " + userToken);
      });
  })

  // Sarah's version
  useEffect (() => {
    commerce.customer.about().then((customer) => {
        console.log(customer["email"]);
        setCust(customer);
    });
  },[custID]);

  // useEffect (() => )
    
    return (
      <div>
        <h2>Welcome... {cust["email"]}</h2>
      
      </div>
      
  );
}

export default UserHome;