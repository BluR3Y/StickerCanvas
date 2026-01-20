import type { Meta, StoryObj } from '@storybook/react-vite';
import Sticker from './Sticker';
import { ArrowDownNarrowWide } from 'lucide-react';

const meta: Meta<typeof Sticker> = {
    title: 'Slaps/Sticker',
    component: Sticker
}

export default meta;

type Story = StoryObj<typeof Sticker>;

export const Default: Story = {
    args: {
        children: <ArrowDownNarrowWide color='blue' size={20}/>,
        position: {
            x: 100,
            y: 100,
            rotation: 30,
            scale: 2
        },
        onReadyToBake: () => console.log('lol')
    }
}

export const Image: Story = {
    args: {
        children: <img src='/images/metallica_logo.png' style={{objectFit: 'contain', maxHeight: '300px', maxWidth: '90vw'}} />,
        position: {
            x: 100,
            y: 100,
            rotation: 30,
            scale: 1
        },
        onReadyToBake: () => console.log('lol')
    }
}