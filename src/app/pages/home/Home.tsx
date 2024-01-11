
import FeautredProducts from '../../components/feautredProducts/FeautredProducts'
import Slider from '../../components/slider/Slider'
import './Home.scss'
const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeautredProducts type="featured"/>
    </div>
  )
}

export default Home