// run rafce to get a functional component fast
// npm install react-icons - to start the project from scratch and to run on localhost:3000
// npm start - to view changes on Local: http://localhost:3000

import React from 'react'

// instead of importing all the components one by one, an alternative way is to create a .js file 
// inside components that export them and then: import { Article, Brand, CTA } from './components'
// BUT for better coding experience, create another folder to hold larger components => containers
// Think of 'containers' as the bigger section of the page
// this makes our code much clearer. The below two lines would have been 9 lines
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import {Brand, CTA, Navbar} from './components';

import './App.css'; // this has all the major styles of the App


const App = () => {
  return (
    <div className = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App
