import logo from "../../images/logo.png";
import Button from "./button/Button";
import { Hero, HeroContainer, NavList, NavWrapper} from "./Header.styled";

export default function Header() {
    return (
        <HeroContainer>
            <NavWrapper>
                    <NavList>
                    <li><a href="#about">About</a></li>
                    <li><a href="#prices">Prices</a></li>
                    <li><a href="#works">Our works</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                    </NavList> 
                    <Button/>
            </NavWrapper>
            <Hero>
                <a href="/"><img 
                className="logo"
                src={logo}
                alt="green logotype"
                /></a>
            </Hero>      
        </HeroContainer>
        
    )
}