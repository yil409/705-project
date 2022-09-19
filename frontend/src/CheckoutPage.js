import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { useNavigate } from "react-router-dom";
import useShoppingCartProducts from "./useShoppingCartProducts";
import axios from 'axios';

export default function CheckoutPage() {
    const { cart, clearCart } = useContext(AppContext);
    const productsInCart = useShoppingCartProducts();

    const navigate = useNavigate();

    function handlePay() {

        axios.post('/api/orders', cart)
            .then(() => {
                clearCart();
                alert('Thank you for your purchase!');
                navigate('/history', { replace: true });
            })
            .catch(err => alert(err));
    }

    return (
        <>
            <h1>🚀Rocket Game Corner 🚀 - Checkout</h1>
            <ul>
                {productsInCart.map((group, index) => (
                    <li key={index}>{group.count} {group.product.name}, 🪙{group.product.cost.toLocaleString('en-NZ')}ea</li>
                ))}
            </ul>
            <p><strong>Total cost</strong> 🪙{productsInCart.totalCost.toLocaleString('en-NZ')}</p>
            <button onClick={handlePay}>Pay now</button>
        </>
    );
}