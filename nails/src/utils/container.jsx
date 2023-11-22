import styled from "styled-components";
import { sizes } from "./sizes";

export const Container = styled.section`
padding: 24px 16px;

@media ${sizes.tablet}{
padding: 32px 24px;
}
@media${sizes.desktop}{
padding: 48px 32px;  
}
`;