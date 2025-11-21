


import { Herogrid } from '../components/herogrid'
import { FlashSales } from '../components/flash-sales'
import { Categories } from '../components/categories'


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


