import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a? Perferendis quas labore dolorum reprehenderit tenetur molestias repellat assumenda corporis commodi at saepe deleniti sunt cum harum, quo perspiciatis maxime!</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a? Perferendis quas labore dolorum reprehenderit tenetur molestias repellat assumenda corporis commodi at saepe deleniti sunt cum harum, quo perspiciatis maxime!</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
            <span className="logo">Zstore</span>
            <span className="copyright">&copy; All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer