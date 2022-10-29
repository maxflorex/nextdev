"use client"

import { useRouter } from 'next/router'
import React from 'react'

const page = () => {

    const router = useRouter()

    console.log(router);

    return (
        <div>page</div>
    )
}

export default page