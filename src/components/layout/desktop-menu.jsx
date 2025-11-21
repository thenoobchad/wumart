import { categories } from "../../constant";
import deal1 from "../../assets/deal1.jpg"


export const DesktopCategoryMenu = () => {
    return (
			<div
				className="hidden md:!sticky top-24 left-0 md:grid md:col-span-3 row-span-4 min-w-[200px] 
             mt-4 ml-2 h-fit">
				<div className="flex flex-col gap-2 justify-center bg-white w-full p-3  rounded-lg">
					{categories.map((category, i) => (
						<a
							href="#"
							key={i}
							className="flex gap-2 items-center text-[14px] whitespace-nowrap text-gray-800 hover:pl-1 border-zinc-100 p-[2px] transition-all delay-150 underline w-full">
							<span>{<category.icon />}</span>
							{category.name}
						</a>
					))}
			</div>
			<div className="overflow-hidden mt-3 rounded-sm">
				<img src={deal1} alt="ads" />
			</div>
			</div>
		);
};
