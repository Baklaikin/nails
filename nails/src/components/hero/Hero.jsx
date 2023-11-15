import { sizes } from "../../utils/sizes";
import { HeroContainer } from "../header/Header.styled";
import styled from "styled-components";

export default function Hero() {
    return (
            <HeroSection>
                {/* <a href="/"><img 
                className="logo"
                src={logo}
                    alt="green logotype"
                    width="300"
           />BeauBe</a> */}
           <h1>BeauBe</h1>
           <p>No one can stop you of being beau</p>
            </HeroSection>      
   )
}

const HeroSection = styled.section`
padding: 24px 16px;
background-color: var(--main-color);

@media ${sizes.tablet}{
padding: 32px 24px;
}
@media${sizes.desktop}{
padding: 48px 32px;  
}
`;