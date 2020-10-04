import styled from 'styled-components'


const niceGradients = [
  ['#314755', '#26a0da'],
  ['#2b5876', '#4e4376'],
  ['#e65c00', '#F9D423'],
  ['#2193b0', '#6dd5ed'],
  ['#cc2b5e', '#753a88'],
  ['#1488CC', '#2B32B2'],
  ['#005AA7', '#FFFDE4'],
]

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #14223A;
  margin: 1em 0;
  border-radius: 30px;
  box-shadow: 5px 5px 40px #756878;
  background-size: cover;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 0px 0px;
  background-image: linear-gradient(${props => props.deg}deg, ${props => props.grad1}, ${props => props.grad2});
`

const StyledHeader = styled.div`

`

const StyledBody = styled.div`
  padding: .7em;
  color: white;
`

const StyledBodyTitle = styled.div`

`

const StyledBodySub = styled.div`
  color: #A3A5B7;
  font-size: .8rem;
`

const StyledFooter = styled.div`
  padding: .7em;
`

const StyledFooterTitle = styled.div`
  color: white;
`

const StyledFooterSub = styled.div`
  margin-top: .4em;
  color: #AB8474;
  font-size: .7rem;
`


const Card = ({ data }) => {
  const randomIndex = Math.floor(Math.random() * niceGradients.length);
  const randomDeg = Math.floor(Math.random() * 180 + 45)

  return (
    <StyledCard>
      <StyledHeader>
        <StyledImage
          src={`https://robohash.org/${data.username}?size=200x200`}
          grad1={niceGradients[randomIndex][0]}
          grad2={niceGradients[randomIndex][1]}
          deg={randomDeg}
        ></StyledImage>
      </StyledHeader>
      <StyledBody>
        <StyledBodyTitle>{data.name}</StyledBodyTitle>
        <StyledBodySub>website: {data.website}</StyledBodySub>
        <StyledBodySub>email: {data.email}</StyledBodySub>
      </StyledBody>
      <StyledFooter>
        <StyledFooterTitle>Company</StyledFooterTitle>
        <StyledFooterSub>{data.company.name}</StyledFooterSub>
        <StyledFooterSub>{data.company.catchPhrase}</StyledFooterSub>
      </StyledFooter>
    </StyledCard>
  )
}

export default Card