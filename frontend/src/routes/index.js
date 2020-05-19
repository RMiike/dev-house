import React from 'react'
import { useAuth } from '../context/auth'
import AuthRoute from './authroute'
import PrivateRoute from './privateroute'
import { Dots } from 'react-activity'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const Route = () => {
  const { signed, loading } = useAuth()
  if (loading) {
    return (
      <MainDiv>
        <DotsContainer>
          <Dots color='#222' size={100} />
        </DotsContainer>
      </MainDiv>
    )
  }
  return (!signed ? <AuthRoute /> : <PrivateRoute />
  )
}

export default Route

const MainDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DotsContainer = styled(Container)`
height: 80%;
display: flex;
  max-height:940px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`