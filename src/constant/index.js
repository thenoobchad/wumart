import { BiFridge } from 'react-icons/bi'
import { FaTv } from 'react-icons/fa'
import { LuBaby } from 'react-icons/lu'
import { MdDevicesOther, MdOutlinePhoneAndroid } from 'react-icons/md'
import { PiCaretCircleRightBold, PiGameControllerBold, PiTShirtBold } from 'react-icons/pi'
import { RiHome6Line } from 'react-icons/ri'
import { TbHealthRecognition } from 'react-icons/tb'

export const categories = [
	{
		id: 1,
		name: "Electronics",
		href: "#",
		icon: MdDevicesOther,
	},
	{
		id: 2,
		name: "Phones & Tablets",
		href: "#",
		icon: MdOutlinePhoneAndroid,
	},
	{
		id: 3,
		name: "Appliances",
		href: "#",
		icon: BiFridge,
	},
	{
		id: 4,
		name: "Health & Beauty",
		href: "#",
		icon: TbHealthRecognition,
	},
	{
		id: 5,
		name: "Home & Office",
		href: "#",
		icon: RiHome6Line,
	},
	{
		id: 6,
		name: "Fashion",
		href: "#",
		icon: PiTShirtBold,
	},
	{
		id: 7,
		name: "Baby Products",
		href: "#",
		icon: LuBaby ,
	},
	{
		id: 8,
		name: "Computing",
		href: "#",
		icon: FaTv,
	},
	{
		id: 9,
		name: "Gaming",
		href: "#",
		icon: PiGameControllerBold,
	},
	{
		id: 10,
		name: "Other categories",
		href: "#",
		icon: PiCaretCircleRightBold,
	},
];
