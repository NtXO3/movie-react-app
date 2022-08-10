import 'styled-components'

export const theme = {
    colors: {
        primary: Object.assign('rgb(252, 71, 71)', {
            hover: 'rgba(252, 71, 71, 0.8)',
        }),
        secondary: Object.assign('rgb(90, 105, 143)', {
            hover: 'rgba(90, 105, 143, 0.8s)',
        }),
        white: Object.assign('#FFFFFF', {
            dark: '#F2F2F2'
        }),
        background: Object.assign('rgb(16, 20, 30)', {
            accent: 'rgb(22, 29, 47)',
        }),
    },
    ui: {
        borderRadius: {
            small: '4px',
            medium: '8px',
            large: '16px',
            extraLarge: '20px',
            circle: '50%'
        }
    }
} as const