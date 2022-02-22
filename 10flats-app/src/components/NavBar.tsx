import React from 'react'
import { BeakerIcon } from '@heroicons/react/solid'

type Props = {}

function NavBar({}: Props) {
  return (
    <div>
      <span className="text-orange-600 font-bold flex flex-row">
        <BeakerIcon className="h-5 w-5 text-blue-500" /> HOME
      </span>
    </div>
  )
}

export default NavBar
