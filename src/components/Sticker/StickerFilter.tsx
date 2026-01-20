import React from "react";
import { hexToRgb } from "../../utils/styleHelpers";

export default function StickerFilter({
    id,
    outlineColor,
    outlineWidth,
    shadowOpacity
}: {
    id: string;
    outlineColor: string;
    outlineWidth: string;
    shadowOpacity?: number;
}) {
    const rgb = hexToRgb(outlineColor);
}