import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';

function Navigation() {
  const cartitem= useSelector((state)=>state.cart)
  return (

    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}><h4 className='text-color-black'>REDUX-PROJECT</h4></Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/cart'}><h3 className=''><FaShoppingCart/>{cartitem.length}</h3></Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation