
//CATEGORIES
import homeoffice from "./image_3.png"
import gadgets from "./image_4.png"
import appliances from "./image_2.png"
import fashion from "./image_6.png"
import healthbeauty from "./image_11.png"
import computing from "./image_12.png"
import gaming from "./image_10.png"

//ALL PRODUCTS
import powerpack from "./image_5.png"

//DEALS
import awoof from "../assets/awoof.png"
import unlock from "./deal1.jpg"
import percent from "../assets/deal3.png"


export const deals = [
    {
        id:1,
        title: "Awoof deals",
        image: awoof
    },
    {
        id:2,
        title: "Unlock Deals",
        image: unlock
    },
    {
        id:3,
        title: "Up to 60% Off",
        image: percent
    },
]

export const flash_sales = [
    {
        id:1,
        name: "Silver Crest Tuner",
        price: 23652.00,
        stock: 141.00,
        image: percent
    },
    {
        id:2,
        name: "LED Lighting, 6 Packs",
        price: 4052.00,
        stock: 21.00,
        image: awoof
    }
]

export const categories = [
    {
        name: "Electronics",
        image: appliances
    },
    {
        name: "Phones & tablets",
        image: gadgets
    },
        {
        name: "Health & Beauty",
        image: healthbeauty
    },
    {
        name: "Home & Office",
        image: homeoffice
    },
    {
        name: "Fashion",
        image: fashion
    },
    // {
    //     name: "Baby Products",
    //     image: kids
    // },
    {
        name: "Computing",
        image: computing
    },
    {
        name: "Gaming",
        image: gaming
    },
    // {
    //     name: "Other categories",
    //     image: kids
    // },

]

export const all_products = [
    {
        _id: "1",
        name: "Elegant Stripped Flutter Sleeve Overlap Collar Peplum Blouse",
        image: powerpack,
        price: 120.00,
        description: "Elevate your style with our elegant and chic blouse, featurig full colour",
        category:"Fashion"
    },
    {
        _id: "2",
        name: "LCD 42 Inch TV",
        image: powerpack,
        price: 34220.00,
        description: "Smart TV, State of the art display and connectivity",
        category:"Electronics"
    }
]