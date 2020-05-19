import React from 'react';
import { Container, Row, Media, Button } from 'react-bootstrap'
import LogoHome from '../../assets/logoHome.png'
import NewQuote from '../../assets/quote.png'
import Quote from '../../assets/quoteHome.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <MContainer fluid >
      <Container>
        <Row className="justify-content-center">
          <Media className="text-center mt-2 mb-2">
            <img src={LogoHome} alt="logo-paginaprincipal"
              width={87}
              height={87}
            />
          </Media>
        </Row>
        <Row className="justify-content-center">
          <Media className="text-center mt-2 mb-2">
            <img src={Quote} alt="logo-paginaprincipal"
              width={171}
              height={43}
            />
          </Media>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Media className="text-center mt-2 mb-2">
            <img src={NewQuote} alt="blissfulvacation"
            width={344}
            height={61}
            />
          </Media>
        </Row>
      </Container>
      <Container style={{ marginTop: '75px' }}>
        <Row className="justify-content-center">
          <Link
            to='signin'
          >
            <MButton

              variant="light"
            >
              Login
        </MButton>
          </Link>
        </Row>
        <Container>
          <Row  style={{ margin: '20px auto' }} className="justify-content-center">
            <span style={{color:'#fff'}}>--------------------- or ---------------------</span>
          </Row>
        </Container>

        <Row className="justify-content-center">

          <Link
            to='signup'
          >
            <MButton
              variant="outline-light"
            >
              Create an account
        </MButton>
          </Link>
        </Row>
      </Container>
    </MContainer>
  );
};

export default Home;

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

const MButton = styled(Button)`
  width: 343px;
  height: 50px;
  border-radius: 50px;
`
