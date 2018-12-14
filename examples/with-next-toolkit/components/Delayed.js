import React from 'react'
import { withLoader } from 'next-toolkit'
// import apiConnect from 'next-toolkit'
import Nav from '../components/nav'

export function Delayed ({ delayed }) {
  return (
    <div>
      <h1>This page was {delayed ? 'slow' : 'fast'}</h1>
      <Nav />
    </div>
  )
}

Delayed.getInitialProps = async () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ delayed: true })
    }, 3000)
  })
}

export const DelayedWithLoader = withLoader(() => <div>loading...</div>)(
  Delayed
)

Delayed.defaultProps = {
  delayed: false
}
