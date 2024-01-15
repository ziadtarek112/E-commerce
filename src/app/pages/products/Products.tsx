
import './Products.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Filter from '../../components/filter/Filter';
import List from '../../components/list/List';
const Products = () => {
  const {id} = useParams();
  const categoryId = +id!;
  const [maxPrice ,setMaxPrice] = useState(0);
  const [sort , setSort] = useState('') ; 
  return (
    <div className='products'>
      <Filter setMaxPrice = {setMaxPrice} setSort = {setSort}/>
      <List categoryId = {categoryId} sort={sort} maxPrice = {maxPrice} />
    </div>

  )
}

export default Products