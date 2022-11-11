import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Live Generous Llama</title>
        <meta property="og:title" content="Live Generous Llama" />
      </Helmet>
    </div>
  )
}

export default Home
