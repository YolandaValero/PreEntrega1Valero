import { FaShoppingCart } from "react-icons/fa"

const CartWidget = () => {
    return (
        <div className="cart">
            <FaShoppingCart/>
            <p className="contador">10</p>
        </div>
    )
}

export default CartWidget
