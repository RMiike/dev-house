import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../../../context/auth'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logoHome.png'

const Header = () => {
  const { handleLogout } = useAuth()
  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    setIsActive(!isActive)
  }

  return (
    <Container>
      <SubContainer>
        <Image src={Logo} />
        <Hamburguer
          onClick={handleClick}
        >
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Hamburguer>
        <NavLink
          isActive={isActive}
        >
          <Links><A to='/dashboard'>Home</A></Links>
          <Links><A to='/'>Hospedar</A></Links>
          <Links><Button onClick={handleLogout}>Sair</Button></Links>
        </NavLink>
      </SubContainer >
    </Container >
  )
}

export default Header



const Container = styled.nav`
width: 100%;
background: #EEEEEE;
height: 10vh;
`
const SubContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  border-bottom: 1px solid rgba(170, 170, 170, 0.4);
  width: 90%;

`
const Image = styled.img`
  height: 90%;
`



const Hamburguer = styled.div`
@media screen and (max-width: 768px){
   cursor: pointer;
   margin: 15px ;
   display: flex;
   flex-direction: column;
   z-index:2;
  }
`
const Line = styled.div`
@media screen and (max-width: 768px){
     width: 30px;
     background: #3098D2;
    height: 3px;
    margin: 0 5px 5px;
  }

`

const Button = styled.button`
  border: none;
color: #3098D2;

`

const NavLink = styled.ul`
  display:flex;
  flex-direction: row;
  width: 50%;
  height: 100%;
  justify-content: space-around;
  margin-left: auto;
  align-items: center;
  @media screen and (max-width: 768px){
    flex-direction: column;
    top:0;
    position: fixed;
     width: 100%;
     height: 100vh;
    background: #EEEEEE;
    clip-path:  ${props => props.isActive ? "circle(1000px at 90% -10%)" : "circle(100px at 90% -10%)"};
    -webkit-clip-path: ${ props => props.isActive ? "circle(1000px at 90% -10%)" : "circle(100px at 90% -10%)"};
    transition: all 1s ease-out;
  }
`

const A = styled(Link)`
color: #3098D2;
text-decoration: none;
font-size: 16px;
`
const Links = styled.li`
display: flex;
list-style: none;
`
