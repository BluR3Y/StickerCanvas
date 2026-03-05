import { useState } from "react";
import { useWallpaperListener } from "./hooks/useWallpaperListener";
import StickerBomb from "./features/stickerbomb/StickerBomb";
import defaultBackgroundImg from "./assets/images/graffiti-art.jpg";


function App() {
    const [backgroundUrl, setBackgroundUrl] = useState(defaultBackgroundImg);
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
        <StickerBomb
            backgroundImage={backgroundUrl}
            stickerImages={stickerUrls}
        />
    )
}

export default App;