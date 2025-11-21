// import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { hoodie } from "../../public/products"

import { ProductDescription } from "../components/product-detais"
import { MdFavorite } from "react-icons/md"

export default function Product() {

  // const { all_products } = useContext(ShopContext)
  
  const { productId } = useParams()
  console.log(productId)


  // const product = all_products.find((e) => e._id === productId)

  // console.log(product)
  // if (!product) {
  //   return <div className="mt-38 md:mt-28 text-2xl font-semibold text-center">
  //    <p className="mt-40 mb-15"> Product not Found.</p></div>
  // }
  // const id = productId

  return (
		<section className="h-full w-full p-2 text-sm mb py-4">
			<div className="grid grid-cols-12 gap-2">
				<div className="col-span-12 sm:col-span-6 rounded-lg flex flex-col gap-2">
					<div className="bg-white p-2">
						<img src={hoodie} alt="image" />
						<h4 className="uppercase font-semibold text-lg">
							Aeon Fan 18 40W Rechargeable
						</h4>
						<h1 className="font-semibold text-lg ">#64,000</h1>
						<p className="font-semibold text-sm text-zinc-500 line-through mb-4">
							#95,000
						</p>
						<div className="flex gap-4 mb-4">
							<span>Quantity:</span>
							<div>+ 4 -</div>
						</div>
						<div className="flex items-center gap-4">
							<button className="bg-red-600 text-white px-3 py-2 text-sm font-semibold rounded-full my-2">
								Add to Cart
							</button>
							<button className="flex items-center gap-2">
								<MdFavorite
									size={30}
									className="bg-zinc-200 p-1 rounded-full text-white hover:text-red-600"
								/>{" "}
								Save for Later
							</button>
						</div>
					</div>

					<div className="bg-white p-2">
						<h4>Overview</h4>
						<ul>
							<li>18 inch</li>
							<li>40W Power</li>
							<li>DC 12V Input</li>
						</ul>
					</div>
					<div>
						<h4>Similar Items You May Like</h4>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-6  rounded-lg">
					<div className="bg-white p-2">
						<h4>Same Day Delivery Available in:</h4>
						<p>Lagos</p>
					</div>
					<div className="bg-white p-2">
						<h4 className="w-full border-b border-zinc-100 mb-3">
							Delivery & Returns
						</h4>
						<div>
							<p>Delivery</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Cupiditate repellendus adipisci corrupti quaerat modi voluptate
								aperiam saepe consequatur voluptates provident!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
