import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { DesktopCategoryMenu } from './desktop-menu'

export const Layout = ({children}) => {
  return (
      <div className='w-full flex flex-col'>
      <Header />
      <div className='flex w-full  md:max-w-5xl mx-auto'>
        <DesktopCategoryMenu/>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
