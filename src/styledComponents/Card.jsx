import styled from "styled-components";
import { margin} from '../styledComponents/baseCss'

const Card = styled.div`
display: inline-flex;
width: 70vh;
background-color:${({theme}) => theme.CardColor} ;
box-shadow: 5px 10px 18px #888888;
border-radius: 35px;
${margin}
&:hover{
    background-color: #60e79d;
}
`
export {Card}