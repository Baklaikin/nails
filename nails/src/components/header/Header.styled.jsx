import styled from "styled-components";
import { sizes } from "../../utils/sizes";


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

@media ${sizes.mobile}{
    display: none;
}
`;

export const NavWrapper = styled.div`
margin: 0 auto;
padding: 24px 16px;
max-width: 1280px;
display: flex;
justify-content: space-between;
align-items: center;

@media ${sizes.tablet}{
padding: 32px 24px;
}

@media ${sizes.desktop}{
padding: 36px 32px;
}
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

export const HeaderContainer = styled.div``;