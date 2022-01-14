import styled from "styled-components";
import { Card } from ".";
import { margin } from "./baseCss";

const AboutCard = styled(Card)`
background-color: ${({theme})=> theme.AboutCard};
margin: 2rem 2rem;
&:hover{
background-color: #fc9c70;
}
`
export {AboutCard}