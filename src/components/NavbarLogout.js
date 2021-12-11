
import { commerce } from "../lib/commerce";
import { useHistory } from 'react-router-dom';


function NavbarLogout({handleEmptyCart, setUserToken}) {
    console.log(commerce.customer.isLoggedIn());
    commerce.customer.logout();
    const history = useHistory();
    handleEmptyCart();
    setUserToken("");

    history.push("/Products")
    
    return (
        <div>
            
        </div>
    );
    
    
}

export default NavbarLogout;