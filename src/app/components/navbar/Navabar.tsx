import { FavoriteBorderOutlined, KeyboardArrowDownOutlined, PersonOutlineOutlined, Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import './Navbar.scss'
import { useState } from "react";
import Cart from "../cart/Cart";


const Navabar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="leftSection">
          <div className="item">
            <img src="/public/img/en.png" alt="Language" />
            <KeyboardArrowDownOutlined />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlined />
          </div>

          <div className="item">
            <Link className="link" to="/product/1">Women</Link>
          </div>

          <div className="item">
            <Link className="link" to="/product/2">Men</Link>
          </div>

          <div className="item">
            <Link className="link" to="/product/3">Child</Link>
          </div>
        </div>

        <div className="middleSection">
          <Link className="link" to='/'>Zstore</Link>
        </div>


        <div className="rightSection">
          <div className="item">
            <Link className="link" to="">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="">Stores</Link>
          </div>
          <div className="icons">
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon" onClick={() =>  setOpen((prev:boolean) => !prev) }>
              <ShoppingCartOutlined />
              <span>0</span>

            </div>
          </div>

        </div>
      </div>
      {open &&<Cart/>}
    </div>
  )
}

export default Navabar