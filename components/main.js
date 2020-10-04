import styled from 'styled-components'
import AppLayout from './app-layout'

const StyledMain = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to right, #8BB0C4, #79d184);
  background-size: cover;
`

const Main = () => {
  return (
    <StyledMain>
      <AppLayout></AppLayout>
    </StyledMain>
  )
}

export default Main