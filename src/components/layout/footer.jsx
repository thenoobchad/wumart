import { MdEmail, MdPhone, MdSearch, MdSend, MdWhatsapp } from "react-icons/md";


const topMenu = [
	{
		icon: MdEmail,
		name: "Email support",
		meta: "wumart@gmail.com",
	},
	{
		icon: MdPhone,
		name: "Phone support",
		meta: "wumart@gmail.com",
	},
	{
		icon: MdWhatsapp,
		name: "Whatsapp",
		meta: "0806 815 6622, 0912 210 2494",
	},
];



export const Footer = () => {
    return (
			<section>
				<div className="w-full h-full flex bg-red-600 text-white flex-col">
					<div className="w-full grid grid-cols-12 mx-auto max-w-5xl p-2">
						{topMenu.map((m, i) => (
							<div
								key={i}
								className="col-span-4 md:col-span-3 flex justify-start items-center gap-2 text-sm py-4">
								<div className="">{<m.icon size={20} />}</div>
								<div className="text-white">
									<h4 className="uppercase">{m.name}</h4>
									<p>{m.meta}</p>
								</div>
							</div>
						))}
						<div className="col-span-4 md:col-span-3 bg-zinc-300 rounded-full pl-3 pr-1 py-1 flex justify-between md:h-8 w-full md:mt-5">
							<input
								type="text"
								placeholder="Enter email"
								className="bg-transparent outline-none text-black text-sm w-full"
							/>
							<button className="bg-red-700 px-3 p-1 rounded-full ">
								<MdSend color="white" />
							</button>
						</div>
					</div>
				</div>
				<div className="w-full bg-zinc-900 h-10 text-white mx-auto p-2 items-center justify-center flex">
					<h4>Develop by Runetech (Chuddi) with Grit @2025</h4>
				</div>
			</section>
		);
}
