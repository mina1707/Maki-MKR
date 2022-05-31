import React from 'react'
import { Link } from 'react-router-dom'
import NavBarStyles from './NavBar.module.css';
import { Navbar, Container, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';




const NavBar = (props) => {




  return (
    <Navbar variant="dark" bg="dark">
      <Container >
        <div className={NavBarStyles.modif} >
        <img width="60px" height="60px" src ="makithree.webp" alt="makipic"/>
          <h1 style={{color:"white"}}>Maki MKR</h1>
        </div>

        <div>
          <p className={NavBarStyles.textmodify}><FaShoppingCart /> {props.makiCount} makis</p>
        </div>
      </Container>
    </Navbar>

  )
}

export default NavBar