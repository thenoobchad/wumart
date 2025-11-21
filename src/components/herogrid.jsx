import React from 'react'


import billboard from "../assets/dill2.jpg"
import { categories } from '../constant';

export const Herogrid = () => {

  return (
		<div className='w-full'>
			{/* MOBILE CATEGORY */}
			<MobileCategoriesMenu />

			<section className="w-full rounded-lg p-2 my-2 md:h-full  mx-auto relative">
				<div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-4 h-full w-full md:gap-4 relative">
					
					

					{/* BANNER  */}

					<div className="md:col-span-12 row-span-4 w-full text-white rounded-lg bg-white p-2">
						<div className="grid h-full grid-cols-12 gap-2 grid-row-4">
							<div className="col-span-7  md:row-span-4 h-full">
								<img
									src={`${billboard}`}
									alt="billboard"
									className="rounded-lg"
									style={{
										backgroundSize: "cover",
										backgroundClip: "initial",
										height: "100%",
										width: "100%",
									}}
								/>
							</div>

							{/* SIDE BANNERS */}

							<div className="col-span-5 grid  md:row-span-4 h-full gap-2">
								<div className="bg-orange-500 md:row-span-2 h-full rounded-md">
									post1
								</div>
								<div className="bg-pink-500 md:row-span-2 h-full rounded-md">
									post@
								</div>
							</div>
						</div>
          </div>
          

          
				</div>
			</section>

			<section className="p-4 ">
				{/* GOOD DEALS AND COMMISSIONS */}
				<div className="flex bg-white py-2 px-3 gap-2 overflow-x-auto rounded-sm">
					
				</div>
			</section>
		</div>
	);
}



//Mobile Categories Menu Component
const MobileCategoriesMenu = () => {
  return (
		<div className="md:hidden flex gap-4  px-4 pb-2 bg-white overflow-x-auto border-b border-zinc-300 scrollbar-hide">
			{categories.map((category, i) => (
				<a
					href="#"
					key={i}
					className="flex gap-2 items-center text-sm whitespace-nowrap text-gray-800 hover:bg-zinc-100/50 p-2 rounded-full">
					<span>{<category.icon/>}</span>
					{category.name}
				</a>
			))}
		</div>
	);
}


//Desktop Categories Menu Component

