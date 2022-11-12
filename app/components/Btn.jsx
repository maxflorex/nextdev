import Link from 'next/link'
import React from 'react'

const Btn = (props) => {
    return (
        <a href={props.url} className='bg-mx-500 p-4 cursor-pointer text-mx-100 uppercase text-xl font-bold hover:bg-mx-300 hover:text-mx-500 hover:scale-105'>
            {props.title}
        </a>
    )
}

export default Btn