import React, { useState } from 'react';
import axios from '../../services/api'
import { useHistory } from 'react-router-dom'
import { Container, Form, ToggleButton, Button } from 'react-bootstrap'
import { FiArrowLeftCircle } from 'react-icons/fi'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState()
  const [keepLogged, setKeepLogged] = useState()
  const history = useHistory()
  // const[pass, setPass]= useState()

  async function handleSubmit(e) {
    e.preventDefault()
    const user = await axios.get(`sessions?email=${email}`).catch((e) => { if (e) alert('User not found!') })
    if (user) {
      history.replace('/')
      return
    }
  }
  return (
    <MContainer fluid >
      <SContainer>
        <HeaderContainer>
          <H1>Sign In</H1>
          <Link to='/'>  <FiArrowLeftCircle size={32} /></Link>
        </HeaderContainer>
        <DForm
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <FormControl
              type="email"
              placeholder="name@example.com"
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </Form.Group>
          {/* <Form.Group>
            <FormControl
              type="password" 
              placeholder="Password" 
              onChange={(e)=>{ setPass(e.target.value) }}
            />
          </Form.Group> */}
          <LContainer>
            <span>Keep me logged in</span>
            <MToggleButton
              type='checkbox'
              style={{ backgroundColor: 'transparent' }}
              checked={keepLogged}
              onClick={() => { setKeepLogged(!keepLogged) }}
            />
          </LContainer>
          <MButton type='submit'>Login</MButton>
        </DForm>
      </SContainer>
      <RContainer>
        <Span>Not a user? <Link to='signup'>Sign Up</Link></Span>
      </RContainer >
    </MContainer>
  );
};

export default SignIn;

const MContainer = styled(Container)`
   width: 100%;
    max-width: 1820px;
    height: 100vh;
    display:flex;
    flex-direction: column;
    background-image: linear-gradient(200deg, #CFD3E3 , #E7E9FB, #3098D2 80%);
  justify-content: center;
  align-items: center;
`

const HeaderContainer = styled(Container)`
  display: flex;
  margin: 45px auto 21px;
  justify-content: space-around;  
`

const H1 = styled.h1`
  color: #444444;
  font-size: 28px;
`


const DForm = styled(Form)`
  margin-bottom: 18px;
`

const SContainer = styled(Container)`
border-radius: 20px;
background-color: #F2F2F2;
border: 1px solid #F2F2F2;
display:flex;
flex-direction: column;
  align-items: center;
  max-width: 423px;
  max-height: 392px;
`
const FormControl = styled(Form.Control)`
  width: 323px;
  height: 43px;

  border: none;
  outline:none;
  border-radius:0;
  border-bottom: 2px solid blue;
  background: #F2F2F2;

  &:focus{
    border: none;
  background: #F2F2F2;
  }
`
const MToggleButton = styled(ToggleButton)`
padding:0;
margin: 0;
  background-color: transparent;
  border: none;
`
const LContainer = styled(Container)`
  display:flex;
  justify-content: space-around;
  margin-bottom: 36px;

`

const MButton = styled(Button)`
 width: 323px;
 border-radius: 50px;
  height: 43px;
  border: none;
  background-image: linear-gradient( #2c0684, #0a34d8, #9082ff);
  margin-bottom: 39px;
`
const RContainer = styled(Container)`
  position:relative;
  width: 423px;
  border-top: 1px solid #fff;
  bottom: -42px;
  text-align: center;
`
const Span = styled.span`
  color: #fff;
  font-size: 13px;
`