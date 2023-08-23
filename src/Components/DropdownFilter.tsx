import React, { ReactElement ,Ref } from 'react'

interface Props {
    filterRef ?: Ref<HTMLDivElement> 
    
}

function DropdownFilter({  filterRef }: Props): ReactElement {
    return (
        <div ref = {filterRef} >
            <ul className='border h-[140px]'>
                <li>Most Vote</li>
                <li>Least Votes</li>
                <li>Most Comments</li>
                <li>least Comments</li>
            </ul>
        </div>
    )
}

export default DropdownFilter
