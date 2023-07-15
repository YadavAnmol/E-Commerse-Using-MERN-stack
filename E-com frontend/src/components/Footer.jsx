import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import { styled } from "styled-components"

const Container=styled.div`
    display: flex;
`
const Left=styled.div`
    flex: 1;
`
const Logo=styled.h1`

`
const Desc=styled.p`
    margin: 20px,0px;
`
const SocialCont=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`
const Center=styled.div`
    flex: 1;
    padding: 10px;

`
const Title=styled.h3`
    margin-bottom: 20px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right=styled.div`
    flex: 1;
    padding: 10px;


`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dolores fugiat minima id magni, adipisci vel fugit molestias accusantium in, perferendis optio asperiores consequuntur libero non est corporis eos neque.</Desc>
            <SocialCont>
                <SocialIcon color="3B5999">
                    <Facebook></Facebook>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE"> 
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialCont>
        </Left>
        <Center>
           <Title>Useful Links</Title>
           <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
           </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer