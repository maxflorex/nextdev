"use client"

import React, { Suspense, useState } from 'react'
import Arrow from './components/svg/Arrow'
import Container from './components/style/Container'

const page = () => {

	return (
		<Container bg='bg-mx-100'>
			<div className="flex flex-col gap-4">
				<div className="flex gap-1">
					<h3 className='line-through'>Hello World </h3>
					<h3>I'm Max Flores</h3>
				</div>
				<h1 className='text-6xl font-bold'>UX/UI Designer &</h1>
				<h1 className='text-6xl font-bold'>Full-stack Engineer</h1>
				<div className="flex gap-2 before:content-[url(/elipse.svg)] items-center">
					<h1 className='text-xl font-bold '>See my works</h1>
					<Arrow />
				</div>
			</div>
		</Container>
	)
}

export default page