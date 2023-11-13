import styled from "styled-components";

export const HeroContainer = styled.div`
position: relative;

`;

export const NavList = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;

& > li {
transform: scale(1);
transition: transform 500ms ease;
}

& > li:hover {
    transform: scale(1.15);
}

& > li:not(:last-child){
  margin-right: 15px;
}

& a {
    color: var(--main-txt-color);
    transition: color 500ms ease;
}
& a:hover {
    color: var(--text-color);
}
`;

export const NavWrapper = styled.div`
position: absolute;
width: 100%;
padding: 32px 48px;
z-index: 1;

display: flex;
justify-content: space-between;
align-items: center;
`

export const Hero = styled.div`
position: relative;
margin: 0 auto 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color: var(--main-color);
`;