import React, { useContext } from 'react'
import {ShopContext} from "../context/ShopContext"
import { TbTrash } from 'react-icons/tb';
import {  useNavigate} from 'react-router-dom';

export default function Cart() {
const navigate = useNavigate()
  const { all_products, cartItems, removeFromCart, getTotalCartAmount, url } = useContext(ShopContext);


  return (
    <section className='mt-36 md:mt-26'>
      <div className='py-10'>

        {getTotalCartAmount() === 0 ? (
          <h4 className='w-full text-center'>Please add items to Cart</h4>
        ):(
          <table className='w-full'>
          <thead>
            <tr className='border-b border-slate-900/20 text-gray-500 text-xs md:text-sm py-12 text-start'>
              <th className='p-1 text-left'>Products</th>
              <th className='p-1 text-left'>Title</th>
              <th className='p-1 text-left'>Price</th>
              <th className='p-1 text-left'>Quantity</th>
              <th className='p-1 text-left'>Total</th>
              <th className='p-1 text-left'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((product) => {
              if (cartItems[product._id] > 0) {
                return (
                  <tr key={product._id} className='border-b border-slate-900/20 text-gray-700 p-6 text-sm'>
                    <td className='p-1'>
                      <img src={url+"/images/"+product.image} alt="" height={43} width={43} className='rounded-sm ring-1 ring-slate-900/5 m-1'/>
                    </td>
                    <td className='p-1'>
                      <div className='line-clamp-3'>{product.name}</div>
                    </td>
                    <td className='p-1'>
                      ${product.price}
                    </td>
                    <td className='p-1'>
                     {cartItems[product._id]}
                    </td>
                    <td className='p-1'>
                     ${product.price * cartItems[product._id]}
                    </td>
                    <td className='p-1'>
                      <div className='text-lg'>
                        <TbTrash onClick={() => removeFromCart(product._id)} />
                        </div>
                    </td>
                  </tr>
                )
              }
              return null
            })}
          </tbody>
        </table>

        )}

       
        {/* Cart Details */}

        <div>
          {getTotalCartAmount() > 0 && (
             <div className='container'>
             <h4>Summary</h4>
             <div>
               <div className='flex justify-between py-3'>
                 <h4>Subtotal:</h4>
                 <h4>${getTotalCartAmount()}
 
                 </h4>
               </div>
               <hr className='h-[2px] bg-slate-900/15' />
               <div className='flex justify-between py-3'>
                  <h4 className='font-semibold'>Shipping Fee:</h4>
                 <h4 className='text-gray-700 font-semibold'>${getTotalCartAmount() === 0 ? 0 : 2}</h4>
 
               </div>
 
               <hr className='h-[2px] bg-slate-900/15' />
               <div className='flex justify-between py-3'>
                  <h4 className='font-semibold'>Total:</h4>
                 <h4 className=' font-semibold'>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h4>
 
               </div>
             </div>
 
             <button onClick={() => navigate("/order")} className='w-52 bg-green-600 h-12 text-white font-semibold'>Proceed to Checkout</button>
           </div>
          )}
         
        </div>
      </div>
    </section>
  )
}
