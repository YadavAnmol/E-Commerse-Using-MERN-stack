import React from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
    flex: 1;
    margin: 2px;
    height: 70vh;
    position: relative;
`
const Image=styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
`
const Info=styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title=styled.h1`
    color: white;
    margin-bottom:10px ;
`
const Button=styled.button`
    background-color: white;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    color: gray;
    padding: 8px;
    cursor: pointer;
    
`
import {Link} from "react-router-dom"
const CategoryItem = ({item}) => {
  return (
    
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>
                {item.title}
            </Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
    
  )
}

export default CategoryItem