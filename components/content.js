import styled from 'styled-components'
import Card from './card'
import { useSelector } from 'react-redux'

const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Content = props => {
  const { robots, search } = useSelector(state => state.robots)
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <StyledContent>
      {
        filteredRobots.map(robot =>  (
            <Card
              key={robot.name}
              data={robot}
            ></Card>
          )
        )
      }
    </StyledContent>
  )
}

export default Content