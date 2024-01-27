import React from 'react'
import Top from './Component/Top'
import Proposal from './Component/Proposal'
import Background from './Component/Background'
import Goals from './Component/Goals'
import Process from './Component/Process'
import Outcomes from './Component/Outcomes'
import Ceo from './Component/Ceo'
import Topz from './Component/Element/Topz'
import Calculator from './Component/Element/Calculator'
import Terms from './Component/Element/Terms'
import Ready from './Component/Element/Ready'
import About from './Component/Element/About'
import Youtube from './Component/Youtube'
import Team from './Component/Team'
import Footer from './Component/Footer'

const Page = () => {
  return (
    <div className=' font-oxygen overflow-x-hidden'>
        <Top/>
        <Proposal/>
        <Background/>
        <Goals/>
        <Process/>
        <Outcomes/>
        <Ceo/>
        <Topz/>
        <Calculator/>
        <Terms/>
       <Ready/>
       <About/>
       <Youtube/>
       <Team/>
       <Footer/>
    </div>
  )
}

export default Page