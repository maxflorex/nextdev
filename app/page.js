import React from 'react'
import { Nav } from './components'

const page = () => {

  return (
    <div className='bg-mx-200 p-2 flex gap-4 uppercase'>
      <Nav title='home' />
      <Nav title='projects' />
      <Nav title='about' />
    </div>
  )
}

export default page