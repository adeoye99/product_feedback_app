import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    marginTop ?: string,
}

function AddFeedBackButton({ marginTop }: Props): ReactElement {
    return (
         <button className={`bg-[#AD1FEA] text-white p-3 font-semibold rounded-lg lg:${marginTop}`}>
            <Link to = "/newfeedback">
                Add Feedback  +
            </Link>
           
         </button>
    )
}

export default AddFeedBackButton
