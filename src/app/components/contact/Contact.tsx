import { Facebook, Google, Pinterest, Twitter } from '@mui/icons-material'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <div>BE IN TOUCH WITH US:</div>

            <div className='email'>
                <input type="text" placeholder="Enter your e-mail" />
                <button>Join Us</button>
            </div>
            <div className='icons'>
                <Facebook/>
                <Twitter/>
                <Google/>
                <Pinterest/>
            </div>
        </div>
    </div>
  )
}

export default Contact