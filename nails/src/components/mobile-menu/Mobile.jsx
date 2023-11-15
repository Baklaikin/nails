import Logo from "../logo/Logo";
import MobileIcon from "../../images/mobile-menu.svg";
import styled from "styled-components";
import { sizes } from "../../utils/sizes";

export default function MobileMenuButton() {
    return ( 
        <MobileButton></MobileButton>
    )
}

const MobileButton = styled.button`
width: 40px;
height: 40px;
background-color: transparent;
background-image: url(${MobileIcon});
background-repeat: no-repeat;
background-size: cover;
border: none;
display:none;

@media ${sizes.mobile}{
    display: block;
}
`;