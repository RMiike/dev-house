import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Dashboard = () => {
  return (
    <MContainer fluid >

      Dashboard

    </MContainer>
  )
}

export default Dashboard

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