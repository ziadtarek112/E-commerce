import { Link } from 'react-router-dom'
import './Card.scss'


const Card = ({ item }) => {
    return (
        <Link className='link' to={`/products/${item.id}`}>
            <div className='card'>
                <div className="image">
                    {item.isNew && <span className="new">New Item  </span>}
                    <img src={item.img} alt="img1" className='mainImage' />
                  { item.img2 && <img src={item.img2} alt="img2" className = 'secondImg' />}
                </div>
                <h3>{item.title}</h3>
                <div className="prices">
                    <h2 className='oldPrice'>{item.oldPrice}$</h2>
                    <h2>{item.price}$</h2>
                </div>
            </div>
        </Link>

    )
}

export default Card