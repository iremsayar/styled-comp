import React from 'react'
import routes from '../routes'
import {Nav} from '../styledComponents'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { padding} from '../styledComponents/baseCss'
const Links = styled(Link)`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 30px;
    color: #000000;
    text-decoration: none;
    ${padding}
    &:hover{
        color: #5c5c5c;
        font-size: 34px;
    }
`


function Navbar() {
    return (
        <div>
            <Nav>
                
                {
                    routes.map(item =>
                        <Links
                            to={item.path}>{ item.title}
                            </Links>
                           )
                }
            </Nav>
        </div>
    )
}

export default Navbar
