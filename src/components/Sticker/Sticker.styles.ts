import styled, { css } from "styled-components";
import type { StickerPositionData } from "./Sticker.types";

// const circleStyles = css`
//     border-radius: 50%;
// `;

// const ovalStyles = css`
//     aspect-ratio: 2;
//     border-radius: 50%;
// `;

// const triangleStyles = css`
//     width: 0;
//     height: 0;
//     border-left: 50px solid transparent;
//     border-right: 50px solid transparent;
//     border-bottom: 100px solid red;
// `;

const defaultStyles = css`
    border-radius: 8px;
`;

export const StyledSticker = styled.div<{
    $position?: StickerPositionData;
    $animationDuration: number;
    $hasBakeCB: boolean;
    $isMounted: boolean;
}>`
    position: ${({$position}) => $position ? "absolute" : "relative"};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    will-change: transform;
    padding: 8px;
    ${defaultStyles}

    ${({$position, $hasBakeCB, $animationDuration, $isMounted}) => $position && css`
        left: 0;
        top: 0;
        z-index: 10;
        transform: translate(${$position.x}px, ${$position.y}px) translate(-50%, -50%) rotate(${$position.rotation}deg) ${$hasBakeCB && css`scale(${$isMounted ? $position.scale : 0.1})`};
        ${$hasBakeCB && css`
            transition: ${$animationDuration}ms cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity ${$animationDuration}ms ease-out;
            opacity: ${$isMounted ? 1 : 0};
        `}
    `}

    background-color: red;
`;