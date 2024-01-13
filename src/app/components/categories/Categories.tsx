import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categoryContainer'>
      <div className='divContainer'>
        <img src="https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <Link className='link' to='/products/1'><button>Show Details</button></Link> 
      </div>
      <div className='divContainer rowSpan'>
        <img src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Link className='link' to='/products/1'><button>Show Details</button></Link>
      </div>
      <div className='divContainer'>
        <img src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Link className='link' to='/products/1'><button>Show Details</button></Link>
      </div>
      <div className='divContainer'>
        <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Link className='link' to='/products/1'><button>Show Details</button></Link>
      </div>
      <div className='divContainer'>
        <img src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Link className='link' to='/products/1'><button>Show Details</button></Link>
      </div>
      <div className='divContainer columnSpan '>
        <img src="https://images.pexels.com/photos/1300571/pexels-photo-1300571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Link className='link' to='/products/1'><button>Show Details</button></Link>
      </div>
    </div>
  )
}

export default Categories