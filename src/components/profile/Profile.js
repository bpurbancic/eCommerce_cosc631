import { commerce } from "../../lib/commerce";
import { useEffect, useState } from "react";

function Profile() {
    // Note: Customer should always be logged when they come to this page.
    // But to be safe we check login status anyway.

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect (() => {
        commerce.customer.about().then((customer) => {
            console.log(customer);
            setFullName(customer["firstname"] + " " + customer["lastname"]);
            setEmail(customer["email"]);
            setPhone(customer["phone"]);
            
        });
      });

    return (
        <div>
            <h2>Profile Information</h2>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )

}

export default Profile;