import React from 'react'
import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Media, Nav, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <Container fluid='md' style={{ borderBottom: '1px solid #baf3fc' }}>
      <Row className="justify-content-md-center" xs={2} md={4}>
        <Col xs={4} md={2}>
          <Media as={Link} to='/' className="text-center mt-2 mb-2">
            <img src={Logo} alt="logo-paginaprincipal"
              width={160}
              height={82}
            />
          </Media>
        </Col>
        <Col xs={8} md={6} >
          <Nav
            className="text-center mt-4 mb-4"
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={8} md={4}>

          <Button
            as={Link}
            to='/signup'
            className=" mt-4 mb-4"
          >
            Cadastrar
        </Button>
          <Button
            as={Link}
            to='/signin'
            variant="outline-primary"
            className=" mt-4 mb-4 ml-4"
          >
            Entrar
        </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
