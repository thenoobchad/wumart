

export const CategoryItem = ({ item }) => {
    

  return (
    <a href={`/category/${(item.name).toLowerCase().replace(/\s/g, "")}`} 
      
      className='md:col-span-2 flex-col min-w-[100px] hover:shadow-sm hover:border border-zinc-300 rounded-xs' key={item.name}>
      <div><img src={`${item.image}`} alt="image" style={{
      backgroundSize: "cover",
      height: "100%",
      width:"100%",
      
    }}  />
    </div>
    
      <p className='whitespace-nowrap text-[10px] md:text-sm text-center py-2 pb-3 text-gray-700 px-1'>{item.name}</p>
  
  </a>
  )
}

