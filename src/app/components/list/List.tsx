import './List.scss'
import { products } from '../../../constants'
import Card from '../card/Card'
interface ListProbs {
  categoryId: number,
  sort: string,
  maxPrice: number
}
const List = ({ categoryId, sort, maxPrice }: ListProbs) => {
  return (

    <div className="right">
      <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />


      <div className='list'>
        {products.map((item) => (<Card key={item.id} item={item} />))}
      </div>
    </div>

  )
}

export default List