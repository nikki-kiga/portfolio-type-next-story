import * as React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  )
}

export default NavBar;
