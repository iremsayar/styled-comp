import styled from "styled-components";
import { margin, padding } from "./baseCss";

const PrimaryButton = styled.button`
display: flex;
background-color: ${({theme})=> theme.PrimaryBtnColor};
border-radius: 35px;
box-shadow: 5px 5px 5px #8883837e;
border: white;
padding: 1rem 3rem;
margin: 2rem 0;
width: 100%;
justify-content: center;
&:hover{
    background-color: #f5bba0;
}
`
export {PrimaryButton}
