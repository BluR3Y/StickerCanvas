import styled, { css } from "styled-components";

export const StyledCanvas = styled.div<{
    $backgroundImage?: string;
}>`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    ${({$backgroundImage}) => $backgroundImage && css`
        background-image: url(${$backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    `}
    background-color: black;
`;