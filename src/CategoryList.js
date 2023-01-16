import { namesAndCategories } from './data'
import './CategoryList.css'


function CategoryList(props) {
  const { category, onClick } = props
  return (
    <div className='CategoryList'>
        {namesAndCategories.map(obj => {
          const { name, count } = obj
          const className = name === category ? 'selected' : ''
          return (
            <button
              className={className}
              onClick={() => onClick(name)} // first onClick is button's function and second is State's onClick
            >
              {name}
              <span> {count} </span>
            </button>
          )
        })}
  	</div>
  )
}

export default CategoryList
