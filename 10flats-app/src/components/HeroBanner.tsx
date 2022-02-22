import React from 'react'

type Props = {}

function HeroBanner({}: Props) {
  return (
    <>
      <div className="flex flex-row ">
        <div className="flex-col">
          <h1 className="capitalize text-7xl text-white">Welcome to 10Flats</h1>
          <h3 className="capitalize text-5xl text-white">
            Search and Find Luxury House
          </h3>
        </div>
        <div className="flex-col">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fb449ff821d2b5bd579a0eb/1628790748571-H91ZHOUP6K8M31RFOY0M/luxury+homes.jpg?format=600w"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
