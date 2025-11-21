import React from 'react'
import { useParams } from 'react-router-dom'
import { all_products } from '../assets/data'
import { CategoryItem } from '../components/category-item'

export default function Category() {

  const params = useParams()
  

  const filteredItems = all_products.filter(item => ((item.category).toLowerCase() === params.category))
   
 
  return (
      <section className='mt-40 md:mt-34 w-full bg-muted'>
      <h4 className='text-center bg-white border border-zinc-300 py-2  text-xl text-zinc-800 capitalize mt-30'>Shop by category</h4>

      <div className='flex gap-4 p-2'>
        {
          filteredItems.map((product) => (
            
            <CategoryProduct product={product} />
          ))
}
      </div>
      </section>
  )
}

const CategoryProduct = ({product}) => {
  return (
    <div className='hover:border border-zinc-200 bg-white rounded-sm'>
    <div className='w-[160px] xs:w-[190px] sm:w-[200px] md:w-[220px]'>
      <img src={`${product.image}`} alt="flashimg" style={{
    backgroundSize: "cover",
    backgroundClip: "initial",
    height: "100%",
    width:"100%",
    }} />
    </div>
    <div className='p-2'>
        <h4 className="text-sm lg:text-md">{(product.name).slice(0, 20)}...</h4>
        <p className='text-xs pb-2 italic'>{(product.description).slice(0, 28)}...</p>
        <p className='mb-4  text-md lg:text-md '><span className="line-through">₦</span> {product.price}</p>
      
      </div>
  </div>
  )
}