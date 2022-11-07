"use client"

import React from 'react'
import Hero from './components/Hero'
import Bar from './components/Bar'
import Designer from './components/Designer'
import { hygraph, PROJECTS } from './components/graphcms'

const getData = async () => {
  const { projects } = await hygraph.request(PROJECTS)
  return projects
}

const page = () => {

  const getProjects = async () => {
    const items = await getData()

    return console.log(items)
  }

  getProjects()

  return (
    <div className='bg-mx-200 relative'>
      <Hero />
      <Bar />
      <Designer />
    </div>
  )
}

export default page