import styled from "styled-components";
import { padding } from "./baseCss";
const TextStyle = styled.div`
text-align: center;
${padding};
color: ${({ theme }) => theme.TextColor};

`

export {TextStyle}