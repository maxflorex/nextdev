import Link from 'next/link'
import React from 'react'

const Nav = (props) => {
    return (
        <a href={props.title.toLowerCase()} className='bg-mx-400 p-2 rounded cursor-pointer'>
            {props.title}
        </a>
    )
}

export default Nav