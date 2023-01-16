import data from './data'
import './ProductList.css'

import Product from './Prodduct'

function ProductList(props) {
	const { category } = props

  return (
    <div className='ProductList'>
      {data.filter((obj) => { return obj.category === category || category === 'All'
}).map(obj => {
				return (
					<Product {...obj} />
        )
    	})}
  	</div>
  )
}

export default ProductList