
import React from 'react'
//import { ButtonNavBar } from './ButtonNavBar'
import './NavBar.css'
//import { MenuItems } from './MenuItems'
import * as ReactBootStrap from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {
    return (
        <>
        <ReactBootStrap.Navbar bg="primary" variant="dark">
          <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">Navbar</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav.Link href="#nosotros">NOSOTROS</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#servicios">SERVICIOS</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#clientes">CLIENTES</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#contactanos">CONTACTANOS</ReactBootStrap.Nav.Link>
            <div>
            <ReactBootStrap.Button variant="warning">INGRESAR</ReactBootStrap.Button>{' '}
            </div>

          </ReactBootStrap.Nav>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        
      </>




        // <div className="container">
        //     <nav className="grid-container">
        //         <h1 className="header">Imagen1</h1>
        //         <div className="navBar">

        //             <ul className="nav-menu">
        //                 <li>
        //                     <a href="#">NOSOTROS</a>
        //                 </li>

        //                 <li>
        //                     <a href="#">SERVICIOS</a>
        //                 </li>

        //                 <li>
        //                     <a href="#">CLIENTES</a>
        //                 </li>

        //                 <li>
        //                     <a href="#">CONTACTANOS</a>
        //                 </li>

        //             </ul>
        //             <ul>
        //                 <ButtonNavBar />
        //             </ul>          

        //         </div>
        //     </nav>
        // </div>
    )
}

