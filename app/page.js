"use client"

import React, { Suspense, useEffect, useState } from 'react'
import Arrow from './components/svg/Arrow'
import Container from './components/style/Container'
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import ProjectList from './components/ProjectList'
import { hygraph, PROJECTS } from './components/api/graphcms'
import About from './components/About'
import Footer from './components/Footer'
import ArrowBtn from './components/style/ArrowBtn'

// const loadData = async () => {
// 	const response = await hygraph.request(PROJECTS);
// 	return response
// }

const page = () => {
	const [projects, setProjects] = useState({})

	// useEffect(() => {
	// 	loadData().then((res) => {
	// 		setProjects(res)
	// 	}).catch((err) => {
	// 		console.log(err);
	// 	})
	// }, [])

	return (
		<>
			<Navigation />
			<Container bg='bg-mx-100 min-h-[70vh] flex items-center'>
				<div className="flex flex-col gap-4">
					<div className="flex gap-1">
						<h3 className='line-through'>Hello World </h3>
						<h3>I'm Max Flores</h3>
					</div>
					<h1 className='text-6xl font-bold'>UX/UI Designer &</h1>
					<h1 className='text-6xl font-bold'>Full-stack Engineer</h1>
					<div className="mr-auto">
						<ArrowBtn title='See my works' />
					</div>
				</div>
				<div className="absolute right-4 bottom-40">
					<div className="after:content-[url(/down.svg)] after:absolute after:top-16 flex justify-center">
						<p className='rotate-90'>Scroll Down</p>
					</div>
				</div>
			</Container>
			<Intro />
			<ProjectList />
			<About />
			<Footer />
		</>
	)
}

export default page