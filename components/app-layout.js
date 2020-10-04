import styled from 'styled-components'
import Header from './header'
import Content from './content'

const StyledAppLayout = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header></Header>
      <Content></Content>
    </StyledAppLayout>
  )
}

export default AppLayout