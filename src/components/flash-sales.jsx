

//DATA
import { useContext } from 'react'
import { flash_sales } from '../assets/data'
import { Item } from './item'
import { ShopContext } from '../context/ShopContext'


export const FlashSales = () => {
  const {all_products} = useContext(ShopContext)

  
  if (!all_products || all_products.length == 0) return <p className='w-full text-center'>Loading...</p>
  
  return (
     <section className='w-screen md:p-4'>
            <div className='w-full'>
              <div className='flex justify-between bg-green-700 py-2 px-4 border border-zinc-300  text-white '>
                <span className='text-lg'>Flash Sales</span>
    
                <p>Time Left: <span>11h : 13m : 08s</span></p>
    
                <p className='underline'>See all</p>
              </div>
    
        <div className='p-1 bg-white flex gap-2 overflow-x-auto'>
          
          {
<<<<<<< HEAD:client/src/components/flash-sales.jsx
            all_products.map((product) => (
              <Item product={product} key={product._id} />
=======
            flash_sales.map((product) => (
              <FlashSaleItem {...product} key={product.id} />
>>>>>>> parent of c29a100 (product page):src/components/flash-sales.jsx
            ))
          }
              </div>
    
              
            </div>
    
          </section>
  )
}
