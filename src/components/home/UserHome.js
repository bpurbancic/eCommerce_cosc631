import { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";

function UserHome({id, emailAddress}) {

  const [custEmail, setCustEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    commerce.customer.getToken(id).then((response) =>
      {
        console.log("**Email: " + custEmail);
        setLoggedIn(true);
        console.log("***User id: " + id);
      });
  })

  useEffect(() => {
    if (loggedIn) {
      commerce.customer.about().then((customer) => {
        setCustEmail(customer.email);
        console.log("*** customer, email: " + customer, commerce.customer.id(emailAddress));
      }
        )
    }
  })
    
    return (
      <div>
      <h2>Welcome email placeholder</h2>
      
      </div>
      
  );
}

export default UserHome;