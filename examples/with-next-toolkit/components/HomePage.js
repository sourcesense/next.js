import React from 'react'
import { withLoader } from 'next-toolkit'

const Home = () => (
  <div>
    HELLO WORLD
  </div>
)

export default Home

export const HomeWithLoader = withLoader()(Home)
