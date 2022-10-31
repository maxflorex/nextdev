import React from 'react'

const Container = (props) => {

    return (
        <div className='container mx-auto p-4 flex justify-between items-center'>
            {props.children}
        </div>
    )
}

export default Container
