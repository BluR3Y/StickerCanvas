import { useEffect } from "react";
import type { WallpaperUserProperties } from "../types/wallpaper-engine";

/**
 * A hook to bridge Wallpaper Engine properties to React state.
 * @param {Object} handlers - Callback functions for specific property changes
 */
export function useWallpaperListener({
    onBackgroundImage,
    onStickerDirFilesLoaded
}: {
    onBackgroundImage?: (url: string) => void;
    onStickerDirFilesLoaded?: (urls: string[]) => void;
}) {
    useEffect(() => {
        // Check if we are actually in Wallpaper Engine
        // Cast to 'any' initially to allow assignment if it doesn't exist yet
        if (!(window as any).wallpaperPropertyListener) {
            (window as any).wallpaperPropertyListener = {};
        }

        // Define Standard Property Listener
        window.wallpaperPropertyListener.applyUserProperties = (properties: WallpaperUserProperties) => {
            // 1. Background Image (File)
            if (properties.backgroundImgFile && properties.backgroundImgFile.value && onBackgroundImage) {
                // Wallpaper Engine returns "C:\Path\To\File.jpg"
                // We must prepend "file:///" for the browser to read it securely
                const safeUrl = 'file:///' + properties.backgroundImgFile.value;
                onBackgroundImage(safeUrl);
            }
        };

        // Define Directory Listener
        window.wallpaperPropertyListener.userDirectoryFilesAddedOrChanged = (propertyName, changedFiles) => {
            // Check if this event is for our specific property
            if (propertyName === 'StickerImgDir' && onStickerDirFilesLoaded) {
                // Wallpaper Engine returns raw paths like "C:\Images\Img.jpg"
                // We map them to "file:///C:\Images\Img.jpg"
                const validUrls = changedFiles.map(file => 'file:///' + file);
                onStickerDirFilesLoaded(validUrls);
            }
        }

        // window.wallpaperPropertyListener.userDirectoryFilesRemoved = (propertyName, removedFiles) => {
        // // Optional: You could implement logic to remove specific stickers here
        // // For now, we usually just ignore this in simple wallpapers
        // };

        return () => {};
    }, [onBackgroundImage, onStickerDirFilesLoaded]);
}