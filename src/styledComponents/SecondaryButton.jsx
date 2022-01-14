import styled from "styled-components";
import { PrimaryButton } from "./PrimaryButton";

const SecondaryButton = styled(PrimaryButton)`
background-color: ${({theme}) => theme.SecondaryBtnColor};;
&:hover{
    background-color: #c385ec;
}
`
export {SecondaryButton}