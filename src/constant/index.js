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

export const user = {
	id: "1212084734734",
	email: "chiddielueme@gmail.com",
	role:"user",
	cart: {},
	favorites:{},
}

export const products = [
	{
		_id: "376476764329823",
			title: "A Hoodie",
			slug: "white-cotton-hoodie-xxl",
			tags: ["hoodie", "cotton", "oversized"],
			desc: "White Cotton New XXL German",
			price: 349088,
			category: "clothes",
			inventory: { quantity: 5, inStock: true },
			images: [],
			createdAt: "22023-10-01T12:00:00Z",
			updatedAt: "2023-10-05T12:00:00Z",
		},
];

//When user completes an order → Update "Frequently Bought Together"

export const product_recommendations = [
	{
		productId: "5421431762517",
		similarProducts: [],
		frequentlyBoughtTogether: [

		],
		 updatedAt: ("2025-11-22T03:00:00Z"),
  		generatedBy: "collaborative-filtering-v3"
	}
] 

//When user clicks/views a product → Update "Recently Viewed"

export const user_behaviours = [
	{
		userId: "user_2323434234",
		recentlyViewed: [
			{ productId: "434242432342", viewedAt: ("2025-11-22T03:00:00Z") },
			{productId: "434242432342", viewedAt: ("2025-11-22T03:00:00Z")},
		]
	}
]
