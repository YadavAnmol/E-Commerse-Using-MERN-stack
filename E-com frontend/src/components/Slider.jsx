import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import {sliderItems} from "../data.js"

const Container=styled.div`
    width: 100%;
    height: 100vh;
    /* margin-top: 20px; */
    display: flex;
    /* background-color: aqua; */
    margin-left: 0%;
    position: relative;
    overflow: hidden;
`

const Arrow=styled.div`
    /* background-color: #ba2c2c; */
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props=>props.direction==="left" && "10px"};
    right: ${props=>props.direction==="right" && "10px"};
    margin: auto;
    z-index: 2;
    cursor: pointer;
` 
const Wrapper=styled.div`
    height: 100%;
    /* width: 100vh; */
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide=styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #${props=>props.bg}
`
const Imgcontainer=styled.div`
    height: 100%;
    flex: 1;
    
`
const Image=styled.img`
    height: 80%;
     border-radius: 10px;
`
const Info=styled.div`
    flex: 1;
    padding: 50px;
    
`
const Title=styled.h1`
    font-size: 70px;
`
const Desc=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
`
const Button=styled.button`
    padding: 10px;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
`
const Slider = () => {
  
  const [slideIndex,setSlideIndex]=useState(0);  
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                <Imgcontainer>
                    <Image src={item.img}></Image>
                </Imgcontainer>
                <Info>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </Info>
                </Slide>
            ))}
            
        </Wrapper>
        <Arrow direction="right"  onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider