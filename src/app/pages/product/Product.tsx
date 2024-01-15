
import { images } from '../../../constants'
import { useState } from 'react';
import './Product.scss'
import Counter from '../../components/counter/Counter';
import { AddShoppingCart, Balance, FavoriteBorder } from '@mui/icons-material';
const Product = () => {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className='product'>
      <div className='left'>
        <div className="mainImg">
          <img src={images[imgIndex]} alt="main Image" />
        </div>

        <div className="subImgs">
          <img src={images[0]} alt="" onClick={() => setImgIndex(0)} />
          <img src={images[1]} alt="" onClick={() => setImgIndex(1)} />
        </div>
      </div>

      <div className="right">
        <h2>Title</h2>
        <span className='price'>199$</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facere doloribus molestiae beatae accusantium doloremque quia totam impedit, quae hic. Est aliquam dolorum unde, alias officiis aliquid dolore quo magni?</p>
        <Counter />
        <button className='add'>
          <AddShoppingCart />
          Add to Cart
        </button>
        <div className="links">

          <div className="item">
            <FavoriteBorder />
            Add to Wishlist
          </div>
          <div className="item">
            <Balance />
            Add to Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor : Polo</span>
          <span>Product Type : T-Shirt</span>
          <span>Tag : T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className='info'>
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product