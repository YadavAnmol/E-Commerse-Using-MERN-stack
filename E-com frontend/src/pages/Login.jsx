import { styled } from "styled-components"

const Container=styled.div`
    width: 100vw;
    height:100vh;
    margin-top: -22px;
    /* overflow: hidden; */
    /* padding: -10px; */
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    center;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper=styled.div`
width:25%;
padding: 15px;
background-color: white;
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form=styled.form`
display: flex;
flex-direction:column;`

const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;
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
const Link=styled.a`
    margin: 10px 0px;
    text-decoration: underline;
    font-size: 12px;
    cursor: pointer;
`
const Login = () => {
  return (
    <Container>
         <Wrapper>
            <Title>SIGN-IN</Title>
            <Form>
                <Input placeholder="user-name"/>
                <Input placeholder="password"/>
            </Form>
            <Button>LOGIN</Button>
            <br></br><Link>Do You remember your password</Link><br></br>
            <Link>Create a new account</Link>
        </Wrapper>
    </Container>
  )
}

export default Login