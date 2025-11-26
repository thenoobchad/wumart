import { GrFavorite } from "react-icons/gr";
import {hoodie } from "../../public/products/index"
import {Link} from "react-router-dom"

export const Item = () => {
  return (
		<Link
			to="/product/12333"
			className=" rounded-lg flex flex-col col-span-4 sm:col-span-3 row-span-1 items-center justify-center relative">
			<GrFavorite className="absolute top-2 right-2 text-red-600" />
			<div className=" flex-1 flex items-end justify-end">
				<img src={hoodie} alt="product" className="w-full object-cover " />
			</div>
			<div className="flex flex-col w-full my-2">
				<h1 className="text-zinc-700">Hoodie XXL</h1>
				<p className="text-sm text-zinc-500 md:text-xs">
					LCD Screen 56 Samsung...
				</p>
				<h4 className="font-semibold text-sm">₦56,000</h4>
			</div>
		</Link>
	);
}
