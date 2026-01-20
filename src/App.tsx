import { useState } from "react";
import { useWallpaperListener } from "./hooks/useWallpaperListener";


function App() {
    const [backgroundUrl, setBackgroundUrl] = useState('');
    const [stickerUrls, setStickerUrls] = useState<string[]>([]);

    useWallpaperListener({
        onBackgroundImage: (imgUrl) => {
            setBackgroundUrl(imgUrl);
        },
        onStickerDirFilesLoaded: (urls) => {
            setStickerUrls(urls);
        }
    });

    return (
        <>
        <h1>Background URL: {backgroundUrl ? backgroundUrl : "Empty"}</h1>
        <ul>{stickerUrls.length === 0 ? <li>No Sticker Urls</li> : stickerUrls.map((url, index) => (
            <li key={index}>{url}</li>
        ))}</ul>
        </>
    )
}

export default App;