import React, { ReactElement ,Ref } from 'react'

interface Props {
    filterRef ?: Ref<HTMLDivElement> 
    
}

function DropdownFilter({ filterRef }: Props): ReactElement {
    return (
        <div ref = {filterRef}  className=' h-auto rounded-lg md:w-[30%] text-black absolute top-[80px] z-40 bg-white shadow-md '>
            <ul className=''>
                <li className='border-b-2 p-4 text-sm text-[#647196] hover:text-[#AD1FEA] hover:cursor-pointer'>Least Upvotes</li>
                <li className='border-b-2 p-4 text-sm text-[#647196] hover:text-[#AD1FEA] hover:cursor-pointer'>Least Upvotes</li>
                <li className='border-b-2 p-4 text-sm text-[#647196] hover:text-[#AD1FEA] hover:cursor-pointer'>Most Comments</li>
                <li className=' p-4 text-sm text-[#647196] hover:text-[#AD1FEA] hover:cursor-pointer'>Least Comments</li>
            </ul>
        </div>
    )
}

export default DropdownFilter
