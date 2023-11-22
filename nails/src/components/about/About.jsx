import styled from "styled-components";
import { sizes } from "../../utils/sizes";
export default function About() {
    return (
        <AboutSection id="about">
            <AboutTitle>Who are we</AboutTitle>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid assumenda, quidem debitis eaque consequuntur quibusdam voluptate, amet quasi autem nisi, iure tempore quae ratione odit aspernatur porro dolor voluptates in.
            Praesentium laudantium molestiae dignissimos quae architecto voluptatum laborum modi, asperiores soluta deserunt. Odit iure esse possimus explicabo accusamus quos sint. Tempora quasi perferendis eius libero nisi! Corrupti eos recusandae exercitationem?
            Alias, vero quasi deleniti debitis autem rem libero illum aspernatur, odio sed earum unde delectus? Vitae sapiente a quaerat vel, repellat ipsa quis sed odio quisquam magni blanditiis omnis exercitationem.
            Veniam minus cumque non totam veritatis provident sapiente dignissimos ab eos dicta fugiat nostrum ut, qui architecto ad odio! Odit quia eveniet rerum harum consequatur quis repellendus quam architecto eos!</p>
        </AboutSection>
    )
}

const AboutSection = styled.section`
padding: 24px 16px;

@media ${sizes.tablet}{
padding: 32px 24px;
}
@media${sizes.desktop}{
padding: 48px 32px;  
}`;

const AboutTitle = styled.h2`
text-align: center;
margin-bottom: 20px;
color: var(--main-txt-color);
`;