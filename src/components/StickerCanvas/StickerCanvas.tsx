import React, { useEffect, useState, type MouseEvent } from "react";
import { StyledCanvas } from "./StickerCanvas.styles";

const MIN_HOLD_DURATION = 400;  //ms

export default function StickerCanvas({
    children,
    backgroundImage
}: {
    children: React.ReactNode;
    backgroundImage?: string;
    onClickCallback?: () => void;
    onSlideCallback?: () => void;
    onHoldCallback?: () => void;
}) {
    // const [isDown, setIsDown] = useState(false);
    const [interactStartTime, setInteractStartTime] = useState<number | null>(null);


    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        setInteractStartTime(Date.now());
    }

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!interactStartTime) return;
        event.preventDefault();

    }

    const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
        const interactEndTime = Date.now();
        console.log(interactEndTime - interactStartTime!)
    }


    return (
        <StyledCanvas
            $backgroundImage={backgroundImage}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
        >
            {children}
        </StyledCanvas>
    )
}