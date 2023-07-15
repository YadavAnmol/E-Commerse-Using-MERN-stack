import { styled } from "styled-components"

const Container=styled.div`
    background-color: teal;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: white;
    justify-content: center;
`

const Announcement = () => {
  return (
    <Container>Super Deal! Free shipping on oreders above $500</Container>
  )
}

export default Announcement
