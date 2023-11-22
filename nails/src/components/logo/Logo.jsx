import logo from "../../images/logo.svg";
import styled from "styled-components";

export default function Logo() {
    return (
         <LogoLink href="/"><LogoImage src={logo } alt="BeauBe logo" width="40" />BeauBe</LogoLink>
    )
}

const LogoLink = styled.a`
display: inline-flex;
flex-direction: column;
align-items: center;
`;

const LogoImage = styled.img`
width: 60px;
`;