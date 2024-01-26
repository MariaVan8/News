import React from 'react'
import Article from '../components/Article'
import Aside from '../components/Aside'

function Homepage() {
  return (
    <>
      <div className="main-headings">
        <h1>Welcome to RainCity Report</h1>
        <h2>Where you can get the lastest news on this year's upcoming developers</h2>
      </div>
      <div className="content">
        <Article />
        <Aside />
      </div>
    </>
  )
}

export default Homepage