import { StyledStickerBomb } from "./StickerBomb.styles";

export default function StickerBomb({
    backgroundImage,
    stickerImages
}: {
    backgroundImage: string;
    stickerImages: string[];
}) {


    return (
        <StyledStickerBomb
            $backgroundImage={backgroundImage}
        >
            <h1>{stickerImages.length ? "Not Empty" : "Empty"}</h1>
        </StyledStickerBomb>
    )
}