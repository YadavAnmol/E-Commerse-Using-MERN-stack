import { Search } from '@mui/icons-material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux'

const Container = styled.div`
    /* height: 60px; */
    /* font-style: bold; */
    /* background-color: #fe7474; */
`;

const Wrapper=styled.div`
    /* padding: 10px 10px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Lang=styled.span`
  cursor: pointer;
`
const Searchcontainer=styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Center=styled.div`
    flex: 1;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
const Logo=styled.h1`
  font-weight: bold;
`
const Right=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Menuitem=styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px ;
`
const Item=styled.input`
  border: none;

`


const Navbar = () => {
  const quantity=useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <Searchcontainer>
            <Item/>
            <Search style={{color:"grey",fontsize:15}}/>
          </Searchcontainer>
        </Left>
        <Center><Logo>LAMA.</Logo></Center>
        <Right>
          <Menuitem>REGISTER</Menuitem>
          <Menuitem>SIGN-IN</Menuitem>
          <Menuitem>
          <Badge badgeContent={quantity} color="secondary">
            <ShoppingCartTwoToneIcon/>
          </Badge>
          </Menuitem>
          </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
