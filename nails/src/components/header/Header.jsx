import Button from "../button/Button";
import Logo from "../logo/Logo";
import MobileMenuButton from "../mobile-menu/Mobile";
import { NavList, NavWrapper} from "./Header.styled";

export default function Header() {
    return (  
        <>
                <NavWrapper>
                <Logo/>
                        <MobileMenuButton /> 
                        <>
                        <NavList>
                            <li><a href="#about">About</a></li>
                            <li><a href="#prices">Prices</a></li>
                            <li><a href="#works">Our works</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                        </NavList>
                        <Button />
                        </>
                </NavWrapper>
        </>
    )
}