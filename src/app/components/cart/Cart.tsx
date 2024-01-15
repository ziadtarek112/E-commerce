import './Cart.scss'
import { cartData } from '../../../constants'
import CartItem from './CartItem'
const Cart = () => {
    return (
        <div className='cart'>
            <h1 className='title'>Products in your cart</h1>
            {cartData.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <div className="total">
                <span>Subtotal</span>
                <span>123$</span>
            </div>
            <button className='checkout'>Proceed to Checout</button>
            <div className='reset'>Reset Cart</div>
        </div>
    )
}

export default Cart