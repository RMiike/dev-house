import React from 'react';
import styled from 'styled-components'
import { useAuth } from '../../context/auth'
import { GoLocation } from 'react-icons/go'
import {Link } from 'react-router-dom'
import 'react-activity/dist/react-activity.css';

const GridComponent = ({ data }) => {
  const { deletHouse,  } = useAuth()
  return (

    <Container >
      <Grid >
        {
          data.map((item) => {
            return (
              <div key={item.id}>
                <GridItem>
                  <ImgDiv>
                    <IMG src={item.thumbnail_url} alt="container img" />
                  </ImgDiv>
                  <ContentDiv>
                    <ContentDivTop>
                      <H1>{item.description}</H1>
                      <SpanPreco>$ {item.price}</SpanPreco>
                    </ContentDivTop>
                    <ContentDivBottom>
                      <SpanDiv>
                        <SpanLoc> <GoLocation /> {item.location}</SpanLoc>

                      </SpanDiv>
                      <EditButton to={`/house/${item.id}`}  >Editar</EditButton>
                      <EditButton onClick={(e) => { if (window.confirm('Você tem certeza que quer deletar esta casa?'))deletHouse(item.id) }}>Excluir</EditButton>
                    </ContentDivBottom>
                  </ContentDiv>
                </GridItem>
              </div>
            )
          })
        }
      </Grid>
    </Container>

  );
};

export default GridComponent;


const Grid = styled.div`
  display: grid;
  grid-template-columns: 577px 577px;
  grid-gap: 10px;
  margin: 5px 0 20px;

  @media screen and (max-width: 1154px){
    display: grid;
  grid-template-columns: 577px;
  grid-gap: 10px;
  margin: 5px 0 20px;
  }
`


const GridItem = styled.div`
display: flex;
justify-content: space-between;
min-width: 577px;
border-radius: 20px;
height: 182px;
padding: 5px;
background: #FAFAFA;
box-shadow: 0px 13px 33px rgba(0, 0, 0, 0.05);
`

const ImgDiv = styled.div`
margin: auto 24px;
width: 193px;
height: 133px;
`
const ContentDiv = styled.div`
margin: auto;
display: flex;
flex-direction: column;
`
const IMG = styled.img`
width: 100%;
height: 100%;
border-radius: 20px;
`
const H1 = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 37px;
letter-spacing: 1px;
color: #444444;
`
const EditButton = styled(Link)`
width: 78px;
height: 26px;
color: rgba(0, 42, 255, 0.75);
border:none;
border-radius: 20px;
background: transparent;
&:hover {
    color: black;
    transition: 0.7s;
  }
`
const SpanPreco = styled.span`
min-width: 180px;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
color: #888888;
`

const ContentDivTop = styled.div`
display:flex;
flex-direction: column;
width: 300px;
height: 64px;
`
const SpanLoc = styled.span`
text-overflow: ellipsis;  white-space: nowrap;
  overflow: hidden;
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 43px;
letter-spacing: 1px;
color: #222222;
`
const SpanDiv = styled.div`
display: flex;
align-items: center;
  width: 180px;
  height: 30px;
`
const ContentDivBottom = styled.div`
display:flex;
justify-content: space-between;
width: 331.34px;
height: 45px;
padding: 10px;
margin-top: 10px;
`


const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width: 100%;
  padding-top: 10px;
  max-width: 1820px;
background: #EEEEEE;

`
