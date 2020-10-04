import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../store/robots/robots.meta'

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const SearchInput = styled.input`
  outline: none;
  width: 80%;
  margin: 1em 0;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1.2rem;
`

const Header = props => {
  const dispatch = useDispatch()

  const { search } = useSelector(state => state.robots)

  const onSearchChange = (e) => {
    dispatch(actionCreators.searchChange(e.target.value))
  }

  return (
    <StyledHeader>
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search robot by name"
      ></SearchInput>
    </StyledHeader>
  )
}

export default Header