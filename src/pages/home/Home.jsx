import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Features from '../../components/features/Features'
import List from '../../components/list/List'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Features />
        <div style={{height:"680px",top:"70%",position:"relative"}}></div>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home