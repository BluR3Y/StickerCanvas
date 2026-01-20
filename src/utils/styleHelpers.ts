
// Helper to ensure valid CSS units
export const toCssValue = (value: string | number): string => {
    return typeof value === 'number' ? `${value}px` : value;
}

export const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
    } : { r: 1, g: 1, b: 1 };
  };

export const rgbToHex = (r: number, g: number, b: number): string => {
    return (
        "#" +
        [r,g,b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            })
            .join("")
    );
}