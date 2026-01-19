
export const theme = {
    colors: {
        primary: '#3b82f6',
        secondary: '#64748b',
        background: '#ffffff',
        text: '#0f172a',
        error: '#ef4444',
    },
    spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
    },
    borderRadius: '0.5rem',
} as const;

export type Theme = typeof theme;