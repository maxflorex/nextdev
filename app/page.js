"use client"

import React from 'react'
import Hero from './components/Hero'
import Bar from './components/Bar'
import Designer from './components/Designer'

const page = () => {

  return (
    <div className='bg-mx-200 relative'>
      <Hero />
      <Bar />
      <Designer />
    </div>
  )
}

export default page