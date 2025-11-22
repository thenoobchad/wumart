import React, {  } from 'react'
import {ShopContext} from "../context/ShopContext"
import { TbTrash } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { hoodie } from '../../public/products';
import { Md1kPlus, MdAdd } from 'react-icons/md';
import { BiMinus } from 'react-icons/bi';

export default function Cart() {
const navigate = useNavigate()
  // const { all_products, cartItems, removeFromCart, getTotalCartAmount, url } = useContext(ShopContext);

  const getTotalCartAmount = () => {
    return 4
  }
  const total = 3

  return (
		<section className="w-full p-2 min-h-screen">
			<div className="w-full">
				<h4 className="my-2 text-zinc-800 font-semibold">Shopping Cart </h4>
				{total === 0 ? (
					<h4 className="w-full text-center">Please add items to Cart</h4>
				) : (
					<table className="w-full">
						<thead>
							<tr className="border-b border-zinc-500/20 text-zinc-700 text-sm py-12 text-start font-semibold">
								<td className="py-4 text-left">Item Details</td>
								<td className="p-1 text-left">Quantity</td>
								<td className="p-1 text-left">Price</td>
								<td className="p-1 text-left">Action</td>
							</tr>
						</thead>

						<tbody>
							{[1, 2, 3, 4, 5].map((c, i) => (
								<tr key={i} className="bg-white border-b border-zinc-100">
									<td className="py-4 text-left p-1">
										<div className="flex gap-4">
											<img
												src={hoodie}
												alt="product"
												width={100}
												height={100}
											/>
											<div className="text-sm">
												<h4>AEON FAN 18 40W RECHARGEABLE </h4>
												<p>
													Sold by <span>Wumart</span>
												</p>
											</div>
										</div>
									</td>
									<td className="p-1 text-left">
										<div className="flex gap-3 items-center">
											<MdAdd size={25} className="bg-zinc-300 rounded-full" /> 4{" "}
											<BiMinus size={25} className="bg-zinc-300 rounded-full" />
										</div>
									</td>
									<td className="p-1 text-left">
										<div>
											<h4 className="text-lg">#256,000</h4>
											<h4 className="text-xs">#64,000 x 4 items</h4>
										</div>
									</td>
									<td className="p-1 text-left  ">
										<div className="flex flex-col">
											<button className="underline text-sm">Remove item</button>
											<button className="underline text-sm">
												Save for Later
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>

						{/* <tbody>
							{all_products.map((product) => {
								if (cartItems[product._id] > 0) {
									return (
										<tr
											key={product._id}
											className="border-b border-slate-900/20 text-gray-700 p-6 text-sm">
											<td className="p-1">
												<img
													src={url + "/images/" + product.image}
													alt=""
													height={43}
													width={43}
													className="rounded-sm ring-1 ring-slate-900/5 m-1"
												/>
											</td>
											<td className="p-1">
												<div className="line-clamp-3">{product.name}</div>
											</td>
											<td className="p-1">${product.price}</td>
											<td className="p-1">{cartItems[product._id]}</td>
											<td className="p-1">
												${product.price * cartItems[product._id]}
											</td>
											<td className="p-1">
												<div className="text-lg">
													<TbTrash
														onClick={() => removeFromCart(product._id)}
													/>
												</div>
											</td>
										</tr>
									);
								}
								return null;
							})}
						</tbody> */}
					</table>
				)}

				{/* Cart Details */}

				<div>
					{getTotalCartAmount() > 0 && (
						<div className="container">
							<div>
								<div className="flex justify-between py-3">
									<h4>Subtotal:</h4>
									<h4>${getTotalCartAmount()}</h4>
								</div>

								<div className="flex justify-between py-3">
									<h4 className="font-semibold">Shipping Fee:</h4>
									<h4 className="text-gray-700 font-semibold">
										${getTotalCartAmount() === 0 ? 0 : 2}
									</h4>
								</div>

								<div className="flex justify-between py-3">
									<h4 className="font-semibold">Total:</h4>
									<h4 className=" font-semibold">
										${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
									</h4>
								</div>
							</div>

							<button
								onClick={() => navigate("/order")}
								className="w-52 bg-red-600 h-12 text-white font-semibold rounded-full">
								Proceed to Checkout
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
