import styled from "styled-components";
import { sizes } from "../../utils/sizes";

export const OrderButton = styled.button`
width: 100px;
height: 48px;
border-radius: 4px;
background-color: var(--main-color);
color: var(--text-color);
border: none;
font-size: 16px;
transform: scale(1);
transition: transform 500ms ease;

@media ${sizes.mobile}{
    display: none;
}

&:focus,
&:hover {
    transform: scale(1.1);
}
`;