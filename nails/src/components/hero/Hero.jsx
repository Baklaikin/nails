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
           <Title>BeauBe</Title>
           <Text>No one can stop you of being beau</Text>
            </HeroSection>      
   )
}

const HeroSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 24px 16px;
background-color: var(--main-color);
text-align: center;
height: 600px;

@media ${sizes.tablet}{
padding: 32px 24px;
}
@media${sizes.desktop}{
padding: 48px 32px;  
}
`;

const Title = styled.h1`
font-size: 100px;
color: var(--text-color);
`;

const Text = styled.p`
font-size: 23px;
// color: var(--text-color);
`;

