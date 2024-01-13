
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'
import FeautredProducts from '../../components/feautredProducts/FeautredProducts'
import Slider from '../../components/slider/Slider'
import './Home.scss'
const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeautredProducts type="featured"/>
      <Categories/>
      <FeautredProducts type="Trending"/>
      <Contact/>
    </div>
  )
}

export default Home