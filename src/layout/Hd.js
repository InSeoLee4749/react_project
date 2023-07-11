import React from "react";
import hd from "../scss/hd.module.css";
import { Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';



export default function Hd(props) {

    return (
    <header>
    <Navbar className="fixed-top d-block" expand="lg">
        <Navbar.Brand as="h1"><a href="#top"><img src="./img/svg/The_Body_Shop_logo.svg"></img></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
            <Scrollspy  currentClassName="active">
                {
                props.dbsrc.gnb.map( (v, x) =>{
                    return  <li><Nav.Link href={"#"+v.href}>{v.title}</Nav.Link></li>
                })  
            
                }
            
            </Scrollspy>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </header>
    );
}
