import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" variant="light" bg="light">
            <Container>
            <Navbar.Brand href="#">User Directory</Navbar.Brand>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header