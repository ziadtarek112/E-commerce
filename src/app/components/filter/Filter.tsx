import './Filter.scss'

interface FilterProps {
    setMaxPrice: (price: number) => void,
    setSort: (sort: string) => void
}

const Filter = ({setMaxPrice , setSort}:FilterProps) => {
    return (

            <div className="left">
                <div className="filterItem">

                    <h2>Products Categories</h2>

                    <div className="inputItem">
                        <input type="checkbox" id="1" />
                        <label htmlFor="1">Shoes</label>
                    </div>

                    <div className="inputItem">
                        <input type="checkbox" id="2" />
                        <label htmlFor="2">Skirts</label>
                    </div>

                    <div className="inputItem">
                        <input type="checkbox" id="3" />
                        <label htmlFor="3">Coats</label>
                    </div>

                </div>


                <div className="filterItem">

                    <div className='inputItem'>
                        <span>10</span>
                        <input type="range" min={0} max={1000} onChange={e=>setMaxPrice(+e.target.value)} />
                        <span>1000</span>
                    </div>

                    <div className='inputItem'>
                        <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/>
                        <label htmlFor="asc">Price (Lowest to Highest)</label>
                    </div>

                    <div className='inputItem'>
                        <input type="radio" id='dsc' value='dsc' name='price'onChange={e=>setMaxPrice('desc')}/>
                        <label htmlFor="dsc">Price (Highest to Lowest)</label>
                    </div>
                </div>


            </div>
    )
}

export default Filter