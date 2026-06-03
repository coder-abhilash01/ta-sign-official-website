import { ChevronDownIcon } from "lucide-react"
import { Link } from "react-router-dom"

const DropDown = ({items, label})=>{
  return (
    
        <li className='relative hidden xl:flex group hover:text-blue-700 items-center gap-1 cursor-pointer text-nowrap z-5'>
          <span >{label}</span> <ChevronDownIcon size={20} className='group-hover:rotate-180 transition duration-200'/>
        <div className='absolute w-50 bg-white top-full left-0 
         rounded-md shadow-lg border invisible translate-y-2 
        group-hover:visible group-hover:translate-y-0 transition-all
        duration-200  flex justify-center text-black  '>
          <ul className='w-full flex flex-col  gap-1 text-sm  '>
           { items.map((item,i ) =>(
           <li key={item.title}>
  <Link
    to={item.link}
    className="block hover:text-black border-b w-full py-2 px-2 hover:bg-gray-100 transition duration-300 rounded"
  >
    {item.title}
  </Link>
</li>))}
            </ul>
        </div></li>
  )
}

export default DropDown