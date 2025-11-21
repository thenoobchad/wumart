import React, { useContext, useState } from 'react'
import { BiCart, BiHelpCircle, BiUser } from 'react-icons/bi'

import { FaSearch } from 'react-icons/fa'
import { FiPackage } from 'react-icons/fi'
import { GrCart } from 'react-icons/gr'
import { TbLogout } from 'react-icons/tb'

import  {Link, useNavigate} from "react-router-dom"
import { ShopContext } from '../../context/ShopContext'

export const Header = () => {
  const { token, setToken, getTotalCartItems } = useContext(ShopContext)


  const [isActive, setIsActive] = useState(false)
const navigate = useNavigate()

  const handleClick = () => {
    setIsActive(!isActive)
  }


  const logout = () => { 
    localStorage.removeItem("token")
    setToken("");
    navigate("/")
  }
  
  return (
		<header
			className="bg-white flex flex-col w-full  border border-zinc-300 sticky top-0 right-0 z-10">
			<div className="grid grid-flow-dense grid-cols-12 w-full max-w-6xl mx-auto h-28 md:h-20 items-center px-4">
				{/* title */}
				<div className="col-span-6 md:col-span-2 flex items-center md:justify-center gap-4">
					<Link to="/">
						<h4 className="font-bold text-xl text-gray-600 font-stretch-10% ">
							Wumart
						</h4>
					</Link>
				</div>

				{/* search bar */}
				<div className="col-span-12 md:col-span-7  whitespace-nowrap justify-between flex h-11 bg-zinc-100 rounded-full p-1">
					<input
						type="text"
						placeholder="Search for products..."
						className="w-4/5 px-4 bg-transparent outline-none  h-full rounded-sm text-sm"
					/>

					<button
						className="px-3 rounded-full flex items-center justify-center  md:text-white h-auto bg-red-600
           ">
						<div className="md:hidden">
							<FaSearch className="text-white" />
						</div>
						<div className="hidden md:flex text-sm font-semibold">Search</div>
					</button>
				</div>

				{/* menu links */}
				<div className="col-span-6 md:col-span-3  flex items-center justify-end gap-4 md:gap-4">
					<div className="flex flex-col relative">
						<button
							onClick={handleClick}
							className="flex items-center gap-2  cursor-pointer hover:bg-red-600 bg-zinc-100 rounded-full p-1">
							<span>
								<BiUser className="text-gray-700 hover:text-white" size={23} />
							</span>
						</button>

						{isActive && (
							<div className="absolute top-10 -left-15 sm:-left-8 w-[150px] bg-white border rounded-md border-zinc-100 z-1000">
								<ul className="flex flex-col">
									{token ? (
										<>
											<Link
												to="/myorders"
												className="text-sm px-4 py-2  hover:bg-green-100 flex gap-2 items-center">
												<span>
													<FiPackage />
												</span>
												Orders
											</Link>

											<p
												onClick={() => logout()}
												className="text-sm px-4 py-2 hover:bg-green-100 flex gap-2 items-center">
												<TbLogout />
												Log Out
											</p>
										</>
									) : (
										<div className="flex text-sm px-2 mx-2 py-2 flex-col  gap-2 items-start">
											<Link to="/signup" className="hover:underline w-full">
												Login
											</Link>
											<Link className="hover:underline">Help</Link>
										</div>
									)}
								</ul>
							</div>
						)}
					</div>
					<button className="hidden sm:flex items-center gap-2  cursor-pointer hover:bg-red-600 bg-zinc-100 rounded-full p-1">
						<BiHelpCircle
							className="text-gray-700 hover:text-white"
							size={23}
						/>
					</button>
					<Link
						to="/cart"
						className="flex relative mr-4  items-center gap-2  cursor-pointer hover:bg-red-600 bg-zinc-100 rounded-full p-1">
						<GrCart
							className=" rounded-md text-gray-700 hover:text-white"
							size={23}
						/>
						{!!getTotalCartItems() && (
							<span className="bg-red-600 text-white text-sm absolute -top-2 -right-3 w-5 h-5 rounded-full shadow-sm flex justify-center font-semibold">
								{getTotalCartItems() > 0 ? getTotalCartItems() : null}
							</span>
						)}
					</Link>
				</div>
			</div>
		</header>
	);
}
