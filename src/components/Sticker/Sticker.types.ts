import type { ComponentProps } from "react";
import type React from "react";

export interface StickerPositionData {
    x: number;
    y: number;
    rotation: number;
    scale: number;
}

export interface StickerOutlineData {
    color: string;
    width: number;
    shadowOpacity?: number;
}

export interface StickerProps extends ComponentProps<'div'> {
    children: React.ReactNode;
    id: string;
    position?: StickerPositionData;
    onReadyToBake?: (id: string, domElement: HTMLDivElement | null, data: StickerPositionData) => void;
    // outline?:
    //     | ({ type: 'static'; shape: string } & StickerOutlineData)
    //     | ({ type: 'custom' } & StickerOutlineData)
}