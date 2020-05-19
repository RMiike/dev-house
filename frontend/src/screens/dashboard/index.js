import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import Grid from '../../components/dashboardgrid'
import { Spinner } from 'react-activity'
import { useAuth } from '../../context/auth'
import axios from '../../services/api'

const Dashboard = () => {
  const { id } = useAuth()
  const [data, setData] = useState()
  useEffect(() => {
    async function handleFetching() {
      const houses = await axios.get(`dashboard`, {
        headers: {
          user_id: id
        }
      })
      setData(houses.data)
    }
    handleFetching()
  }, [data])

  if (!data) {
    return (
      <DotContainer>
        <Spinner color='#222' size={100} />
      </DotContainer>
    )
  }
  return (
    <MContainer >
              <TitleDiv>
                <Title>Minhas casas</Title>
                <AddButton to='/house'>+ Adicionar</AddButton>
              </TitleDiv>
      <Grid data={data} />
    </MContainer >

  )
}

export default Dashboard


const MContainer = styled.div`

  width: 100%;
  height: 90vh;
  max-width: 1820px;
background: #EEEEEE;
`
const DotContainer = styled.div`
  width: 100%;
  display: flex;
justify-content: center;
align-items:center;
  height: 90vh;
  max-width: 1820px;
background: #EEEEEE;
`
const TitleDiv = styled.div`
padding-top: 20px;
margin: 0 auto 20px;
display:flex;
flex-direction: row;
justify-content: space-between;
height: 65.5px;
width: 80%;
`
const Title = styled.h1`
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 35px;letter-spacing: 1px;
color: #444444;
`
const AddButton = styled(Link)`
display:flex;
justify-content: center;
align-items: center;
box-shadow: 0px 10px 27px rgba(0, 0, 0, 0.1);
width: 128px;
height: 46px;
color: #fff;
border-radius: 20px;
background: linear-gradient(0deg, rgba(0, 42, 255, 0.75) 15.55%, rgba(5, 159, 255, 0.75) 76.83%, rgba(38, 0, 255, 0.75) 100%), #E9486D;
&:hover {
  background: linear-gradient(0deg, rgba(0, 42, 255, 0.75) 15.55%, rgba(5, 159, 255, 0.75) 76.83%, rgba(38, 0, 255, 0.75) 100%), #000;

    transition: 0.7s;
  }
`