import React, { useEffect, useRef, useState } from "react";
import type { StickerProps } from "./Sticker.types";
import { StyledSticker } from "./Sticker.styles";

const animation_duration = 400;

const Sticker = React.memo<StickerProps>(({
    children,
    position,
    onReadyToBake,
    outline = false,
    id,
    ...props
}) => {
    const [isMounted, setIsMounted] = useState(false);

    const elementRef = useRef<HTMLDivElement>(null);
    const hasBakeCB = onReadyToBake !== undefined;

    useEffect(() => {
        if (!onReadyToBake || !position) return;

        // Entrance animation
        requestAnimationFrame(() => setIsMounted(true));

        // Schedule baking
        const timer = setTimeout(() => {
            onReadyToBake(id, elementRef.current, position);
        }, animation_duration + 50) // Small buffer after animation ends

        return () => clearTimeout(timer);
    }, [id, onReadyToBake, position]);

    return (
        <>
            <StyledSticker
                $animationDuration={animation_duration}
                $hasBakeCB={hasBakeCB}
                $position={position}
                $isMounted={isMounted}
                $outline={outline}
                {...props}
            >
                {children}
            </StyledSticker>
        </>
    )
});

export default Sticker;