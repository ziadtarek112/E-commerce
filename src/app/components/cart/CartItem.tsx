import { Delete } from "@mui/icons-material"
import {Product} from '../../../models/index'

import './Cart.scss'
interface CartItemProps {
    item : Product
}
const CartItem = ({item}:CartItemProps) => {
  return (

    <div className="item">
        <img src={item.img} alt="product image" />
        <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,20)}</p>
            <div className="price">1 x ${item.price}</div>
        </div>
        <Delete className="delete"/>
    </div>

  )
}

export default CartItem