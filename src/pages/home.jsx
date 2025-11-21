


import { Herogrid } from '../components/herogrid'



import { SiteDetails } from '../components/site-details'
import Products from '../components/products'

export default function Home() {
  return (
    <main className='w-screen'>
      <Herogrid />
      {/* <FlashSales/> */}
      {/* <Categories/>  */}
      
      <Products />
     
      {/* <SiteDetails /> */}
    </main>
  )
}


