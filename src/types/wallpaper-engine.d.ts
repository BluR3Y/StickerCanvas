
// // 1. Define the shape of the properties object from Wallpaper Engine
// interface WallpaperProperty<T> {
//     value: T;
// }

// interface WallpaperEngineProperties {
//     background?: WallpaperProperty<string>;
//     images?: WallpaperProperty<string[]>;
// }

// // 2. Define the Props
// interface UseWallpaperListenerProps {
//     onBackgroundChange?: (value: string) => void;
//     onImagesChange?: (value: string[]) => void;
// }

// // 3. Augment the global Window interface so TypeScript knows about the listener
// interface Window {
//     wallpaperPropertyListener: {
//         applyUserProperties: (properties: WallpaperEngineProperties) => void;
//         setPaused?: (isPaused: boolean) => void;
//     };
// }

// Type definitions for Wallpaper Engine Web Wallpapers
// Based on documentation: https://docs.wallpaperengine.io/en/web/customization/properties.html

declare global {
    interface Window {
        /**
         * The main listener object for Wallpaper Engine events.
         * You must assign your event callbacks to this object.
         */
        wallpaperPropertyListener: WallpaperPropertyListener;

        /**
         * Request a random file from a directory property configured in "ondemand" mode.
         * Used to cycle through images or videos without loading them all at once.
         * @param propertyName The exact key of your directory property (e.g., "customrandomdirectory").
         * @param callback Function that receives the property name and the selected file path.
         */
        wallpaperRequestRandomFileForProperty(
            propertyName: string,
            callback: (propertyName: string, filePath: string) => void
        ): void;
    }
}

export interface WallpaperPropertyListener {
    /**
     * Triggered when the wallpaper is loaded or when a user changes a property.
     * Contains only the properties that have changed (or all on load).
     */
    applyUserProperties?: (properties: WallpaperUserProperties) => void;

    /**
     * Triggered for "fetchall" directory properties when files are added or modified.
     * @param propertyName The name of the property that triggered the event.
     * @param changedFiles Array of file paths that were added or modified (all paths must be prepended with file:///).
     */
    userDirectoryFilesAddedOrChanged?: (propertyName: string, changedFiles: string[]) => void;

    /**
     * Triggered for "fetchall" directory properties when files are removed.
     * @param propertyName The name of the property that triggered the event.
     * @param removedFiles Array of file paths that were removed.
     */
    userDirectoryFilesRemoved?: (propertyName: string, removedFiles: string[]) => void;

    /**
     * Optional: Triggered when the playback state changes (e.g., paused/unpaused).
     */
    setPaused?: (isPaused: boolean) => void;
}

/**
 * Represents the collection of properties passed to applyUserProperties.
 * Keys match the property keys defined in your project.json.
 */
export interface WallpaperUserProperties {
    backgroundImgFile: WallpaperProperty<string>;
    stickerImgDir: WallpaperProperty<string>;
    [key: string]: WallpaperProperty<any> | undefined;
}

/**
 * Generic interface for a single user property.
 */
export interface WallpaperProperty<T> {
    /**
     * The value of the property.
     */
    value: T;

    /**
     * Available specifically for 'combo' properties to get the display text label.
     */
    text?: string;
}

// --- Helper Types for Specific Properties ---

/**
 * Color property value is a string of 3 numbers separated by spaces (0.0 - 1.0).
 * Example: "1.0 0.5 0.0" -> Needs parsing to CSS RGB.
 */
export type WEColorProperty = WallpaperProperty<string>;

/**
 * Slider property value is a number within the defined range.
 */
export type WESliderProperty = WallpaperProperty<number>;

/**
 * Checkbox property value is a boolean.
 */
export type WEBooleanProperty = WallpaperProperty<boolean>;

/**
 * Combo property value is the "hidden value" string/number.
 * Also contains a .text property for the label.
 */
export type WEComboProperty = WallpaperProperty<string | number>;

/**
 * File property value is a raw path string.
 * Note: You must prepend 'file:///' to use this in CSS/HTML.
 */
export type WEFileProperty = WallpaperProperty<string>;