import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { createCartSummary } from "./useShoppingCartProducts";
import styles from './OrdersPage.module.css';
import useGet from "./useGet";

/**
 * Renders a list of orders obtained from the API.
 */
export default function OrdersPage() {

    const { products } = useContext(AppContext);

    // TODO Swap this out for an API call to /api/orders.
    const { data: orders } = useGet('/api/orders', []);

    // Turn orders from a list of product ids into a summary format as shown in the user's shopping cart
    const orderSummaries = orders.map(order => ({ id: order._id, summary: createCartSummary(products, order.order) }));

    return (
        <>
            <h1>🚀Rocket Game Corner 🚀 - My Order History</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Order #</th>
                        <th>Products ordered</th>
                        <th>Total cost</th>
                    </tr>
                </thead>
                <tbody>
                    {orderSummaries.map(os => (
                        <tr key={os.id}>
                            <td>{os.id}</td>
                            <td>{getOrderSummaryString(os.summary)}</td>
                            <td>🪙{os.summary.totalCost.toLocaleString('en-nz')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

/**
 * Turns an order summary into a string, e.g. 1 Abra, 2 Nidorina, 1 Porygon
 */
function getOrderSummaryString(summary) {
    return summary.map(line => `${line.count} ${line.product.name}`).join(', ');
}