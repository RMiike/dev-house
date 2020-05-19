import React, { useState } from 'react';
import styled from 'styled-components'
import { FiArrowLeftCircle } from 'react-icons/fi'

import BGSvg from '../../assets/bgsignin.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const SignIn = () => {
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()

  const { handleLogin } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    handleLogin(email, pass)
  }
  return (
    <Container style={{ background: `url(${BGSvg})` }}>
      <Form>
        <HeaderContainer>
          <H1>Entrar</H1>

          <Link to='/'>  <FiArrowLeftCircle size={32} color='#444' /></Link>
        </HeaderContainer>
        <Input
          type="email"
          placeholder="name@example.com"
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => { setPass(e.target.value) }}
        />
        <EntrarButton
          onClick={handleSubmit}
        >
          Entrar
        </EntrarButton>
      </Form>
      <RodapeDiv>
        <Span>Não está cadastrado?  <Link style={{ textDecoration: 'none', color: '#222' }} to='signup'>Cadastre-se</Link></Span>
      </RodapeDiv>
    </Container>
  );
};

export default SignIn;


const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%; 
height: 100vh;
align-items: center;
justify-content: center;
`


const RodapeDiv = styled.div`
margin-top: 35px;
text-align:center;
border-top: 1px solid rgba(255,255,255,0.25);
width: 403px;
height: 51px;
`
const HeaderContainer = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-around;
`

const Span = styled.span`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 12.6667px;
line-height: 43px;
  color: rgba(255,255,255,.9);
`

const Form = styled.form`
opacity: 0.76;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 423px;
height: 392px;
background: #DDDDDD;
box-shadow: inset 0px 3px 13px rgba(0, 0, 0, 0.03);

border-radius: 25px;
`

const EntrarButton = styled.button`
border-radius: 50px;
color: #fff;
width: 343px;
height: 50px;
background: linear-gradient(0deg, rgba(0, 42, 255, 0.75) 15.55%, rgba(5, 159, 255, 0.75) 76.83%, rgba(38, 0, 255, 0.75) 100%), #E9486D;

box-shadow: 0px 10px 27px rgba(0, 0, 0, 0.1);
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 12.6667px;
line-height: 43px;
text-align: center;
letter-spacing: 1px;
color: #FFFFFF;
margin-top: 50px;
&:hover {
  background: linear-gradient(0deg, rgba(0, 42, 255, 0.75) 15.55%, rgba(5, 159, 255, 0.75) 76.83%, rgba(38, 0, 255, 0.75) 100%), #000;

    transition: 0.7s;
  }
`
const Input = styled.input`
width: 343px;
height: 44px;
border: none;
  outline:none;
  border-radius:0;
  border-bottom: 2px solid rgba(0, 42, 255, 0.75);
  background: transparent;
  font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 15.6667px;
line-height: 43px;
letter-spacing: 1px;
margin: 10px 0 ;
opacity: 1;
color: #222;
`

const H1 = styled.h1`
margin-bottom: 20px;
  font-size: 28px;
  color: #444;
  line-height: 34.7px;
`