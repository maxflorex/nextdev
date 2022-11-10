"use client"

import React, { Suspense, useState } from 'react'
import Hero from './components/Hero'
import Bar from './components/Bar'
import Designer from './components/Designer'
import Cards from './components/Cards'
import loading from './loading'

const page = () => {

	return (
		<div className='bg-mx-200 relative'>
			<Hero />
			<Bar />
			<Suspense fallback={loading}>
				<Cards />
			</Suspense>
			<Designer />
		</div>
	)
}

export default page