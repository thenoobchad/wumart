import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

export default function Order() {
  const navigate = useNavigate()

  const { getTotalCartAmount, token, all_products, cartItems, url } = useContext(ShopContext)
  
  const [data, setData] = useState({
    firstName:"",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country:"",
    phone:""
    
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => ({...data, [name]: value}))
  }

  useEffect(() => {
    console.log(data)
  },[data])
    
  return (
    <section className='mt-36 md:mt-28 py-10'>
      <form action="" className='px-4 flex flex-col lg:flex-row gap-20 max-w-[750px] xl:max-w-[1200px] mx-auto'>
        {/* Delivery information */}
        <div className='flex flex-1 flex-col gap-3 text-[95%] lg:w-2/3'>
          <h3 className=' text-xl pb-4'>Delivery Information</h3>
          <div className='flex gap-3'>
          <input type="text" name='firstname' placeholder='First Name' onChange={onChangeHandler} value={data.firstName} className='ring-1 ring-slate-900/50 p-1 pl-3  rounded-sm outline-none w-1/2 h-12'
          required
          />
          <input type="text" name='lastname' onChange={onChangeHandler} value={data.lastName} placeholder='Last Name' className='ring-1 ring-slate-900/50 p-1 pl-3  rounded-sm outline-none w-1/2 h-12'
            required
            />
          </div>
       
        <input type="email" name='email' placeholder='Email' onChange={onChangeHandler} value={data.email} className='ring-1 ring-slate-900/50 p-1 pl-3  rounded-sm outline-none h-12'
            required
        />
         <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone Number' className='ring-1 ring-slate-900/50 p-1 pl-3  rounded-sm outline-none h-12 '
            required
        />
         <input type="text" name='street' placeholder='Street' onChange={onChangeHandler} value={data.street} className='ring-1 ring-slate-900/50 p-1 pl-3  rounded-sm outline-none h-12'
            required
        />
        <div className='flex gap-3'>
            <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' className='ring-1 ring-slate-900/50 p-1 pl-3  rounded-sm outline-none h-12 w-1/2'
            required
        />
         <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' className='ring-1 ring-slate-900/50 p-1 pl-3  rounded-sm outline-none h-12 w-1/2'
            required
          />
        </div>
        <div className='flex gap-3'>
          <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder="Zip Code" className='ring-1 ring-slate-900/50 p-1 pl-3  rounded-sm outline-none h-12 w-1/2'
            required
        />
         <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder="Country" className='ring-1 ring-slate-900/50 p-1 pl-3  rounded-sm outline-none h-12 w-1/2'
            required
          />
          </div>
        </div>

        {/* Cart total */}
        <div className='lg:w-1/3'>
          {getTotalCartAmount() > 0 && (
             <div className='container'>
             <h4 className='text-md pb-4'>Summary</h4>
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
 
             <button onClick={() => navigate("/order")} className='w-52 bg-green-600 h-12 text-white font-semibold'>Proceed to Payment</button>
           </div>
          )}
         
        </div>
      </form>
    </section>
  )
}
