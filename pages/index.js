import Head from 'next/head'
import Main from '../components/main'

import { actionCreators } from '../store/robots/robots.meta'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Home = props => {
  const dispatch = useDispatch()

  const getRobots = () => {
    dispatch(actionCreators.getRobots())
  }

  useEffect(() => {
    getRobots();
  })

  return (
    <div>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100vh;
        }
      `}
      </style>
      <Head>
        <title>Robots App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main></Main>
    </div>
  )
}

export default Home