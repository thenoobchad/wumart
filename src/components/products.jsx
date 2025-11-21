import { Item } from "./item";


export default function Products() {
  return (
		<div className="p-2">
			products
			<div className="bg-white grid grid-cols-12 gap-4 grid-rows-2 mx-auto w-full p-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((product, i) => (
          
          <Item key={i} />
				))}
			</div>
		</div>
	);
}
