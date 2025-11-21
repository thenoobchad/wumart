import React from 'react'
import { CategoryItem } from './category-item'
import { categories } from "../assets/data.js"

export const Categories = () => {


  return (
    <section className='w-screen p-4'>
      <div className='flex overflow-x-auto overflow-hidden md:grid grid-cols-12 p-2 grid-rows-2 bg-white rounded-sm gap-4'>
        {
          categories.map((item) => (
            <CategoryItem item={item} key={item.name} />
          ))
        }
    
            </div>
  
          </section>
  )
}
