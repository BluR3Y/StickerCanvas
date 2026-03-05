import type { Meta, StoryObj } from '@storybook/react-vite';
import StickerCanvas from './StickerCanvas';

const meta: Meta<typeof StickerCanvas> = {
    title: 'Slaps/Canvas',
    component: StickerCanvas
};

export default meta;

type Story = StoryObj<typeof StickerCanvas>;

export const Default: Story = {
    args: {
        
    }
}