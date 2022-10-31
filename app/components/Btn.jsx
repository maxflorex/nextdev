import Link from 'next/link'
import React from 'react'

const Btn = (props) => {
    return (
        <a href={props.url} className='bg-mx-400 p-2 rounded cursor-pointer'>
            {props.title}
        </a>
    )
}

export default Btn