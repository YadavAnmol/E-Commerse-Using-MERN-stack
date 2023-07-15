import { styled } from "styled-components"

const Container=styled.div`
    width: 100vw;
    height:100vh;
    margin-top: -22px;
    /* overflow: hidden; */
    /* padding: -10px; */
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper=styled.div`
width:40%;
padding: 15px;
background-color: white;
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form=styled.form`
display: flex;
flex-wrap:wrap;`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px ;
    padding: 10px;
`
const Agreement=styled.span`
    font-size: 12px;
    /* margin: 20px ; */
`
const Button=styled.button`
margin: 20px 0px;
padding: 20px 10px;
width: 40%;
border: none;
background-color: teal;
cursor: pointer;
color: white;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="user-name"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
            </Form>
            <Agreement>
                By creating an account, I consent to the proccessing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Create</Button>
        </Wrapper>
    </Container>
  )
}

export default Register