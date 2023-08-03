import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <Link href="/"><Image src="/logo.svg" alt="Casual Voyager logo" width={500} height={100}/></Link>
        {/* <ul className="flex justify-between">
            <li>about</li>
            <li>faq</li>
        </ul> */}
    </nav>
  )
}

export default Navbar