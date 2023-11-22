import styled from "styled-components";
import { Container } from "../../utils/container";
import Placeholder from "../../images/placeholder.png";

export default function OurWorks() {
    return (
        <Container id="works">
            <WorksTitle>Our works</WorksTitle>
            <WorksList>
                <li><img src={Placeholder} alt="nails picture" width="120px"/></li>
                <li><img src={Placeholder} alt="nails picture" width="120px"/></li>
                <li><img src={Placeholder} alt="nails picture" width="120px"/></li>
                <li><img src={Placeholder} alt="nails picture" width="120px"/></li>
                <li><img src={Placeholder} alt="nails picture" width="120px"/></li>
                <li><img src={Placeholder} alt="nails picture" width="120px"/></li>
            </WorksList>
        </Container>
    )
}

const WorksTitle = styled.h3`
visibility: hidden;
`;

const WorksList = styled.ul`
display: grid;
& > li:not(:last-child){
    margin-bottom: 12px;
}
`;