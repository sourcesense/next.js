import React from 'react'
import { withLoader } from 'next-toolkit'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <h1>HELLO WORLD</h1>
    <Nav />
  </div>
)

export default Home

export const HomeWithLoader = withLoader()(Home)
