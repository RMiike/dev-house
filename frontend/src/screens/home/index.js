import React from 'react';
import LogoHome from '../../assets/logoHome.png'
import Quote from '../../assets/quote.png'
import BestPlace from '../../assets/bestplace.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <Spash>
      <Div>
        <SVGIMG src={BestPlace} alt="BestPlaceDev" />
      </Div>
      <Section>
        <DivLogo>
          <DHome src={LogoHome} alt="Logo" />
          <div style={{ width: '38px', height: '10px', background: '#FFFFFF', margin: "28px 0 22px" }}></div>
          <DQuote src={Quote} alt="Blissful Vacation" />
        </DivLogo>
        <DivButton>
          <LoginBtn as={Link} to='/signin'>Entrar</LoginBtn>
          <Span>ou</Span>
          <SignBtn as={Link} to='/signup'>Criar conta</SignBtn>
        </DivButton>
      </Section>

    </Spash>
  );
};

export default Home;

const Spash = styled.div`
display: flex;
flex-direction: row;
width: 100%; 
height: 100vh;
align-items: center;
`
const Section = styled.section`
width: 343px;
height: 416px;

`
const Div = styled.div`
width: 702px;
height: 269px;
margin: 0 50px;
`
const SVGIMG = styled.img`
  width: 100%;
  height: 100%;
`

const DivLogo = styled.div`
  width: 300px;
height: 247px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const DHome = styled.img`
width: 107px;
height: 113px;
`
const DQuote = styled.img`
margin-bottom: 10px;
  width: 300px;
  height: 74px;
`

const DivButton = styled.div`
width: 343px;
height: 159px;
display: flex;
flex-direction: column;
`

const LoginBtn = styled.button`

display: flex;
align-items: center;
justify-content: center;
width: 343px;
height: 50px;
border-radius: 50px;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 12.6667px;
letter-spacing: 1px;
color: #999;
background: #EEEEEE;
box-shadow: 0px 13px 27px rgba(0, 0, 0, 0.1);
&:hover {
    background: transparent;
    color: #fff;
    border: 1px solid #fff;
    transition: 0.7s;
  }
`
const SignBtn = styled.button`

display: flex;
align-items: center;
justify-content: center;
border-radius: 50px;
width: 343px;
height: 49px;
background: rgba(238, 238, 238, 0.0001);
border: 2px solid rgba(238, 238, 238, 0.5);
box-sizing: border-box;
color: #fff;
font-style: normal;
font-weight: 500;
font-size: 12.6667px;
line-height: 43px;
&:hover {
    background: #fff;
    color: #999;
    transition: 0.7s;
  }

`
const Span = styled.span`
  width: 100%;
height: 43px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 43px;
text-align: center;
letter-spacing: 4px;
text-transform: uppercase;
color: #FFFFFF;
`