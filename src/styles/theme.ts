import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "616480",
            "400": "#797D9A",
            "300": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    color: {
        'purple.600': '#5c0099',
        'purple.50': '#FAF5FF',
        'purple.100': '#E9D8FD',
        'purple.200': '#D6BCFA',
        'purple.300': '#B794F4',
        'purple.400': '#9F7AEA',
        'purple.500': '#805AD5',
        // 'purple.600': '#6B46C1',
        'purple.700': '#553C9A',
        'purple.800': '#44337A',
        'purple.900': '#322659',
        
    },
    styles: {
        global: {
            _focus:{shadow: false},
            body: {
                // bg: 'gray.900',
                // color: 'gray.50'   
                '&::-webkit-scrollbar': {
                    width: '10px',
                },
                '&::-webkit-scrollbar-track': {
                    bg: 'gray.50'
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '24px',
                    border: '1px solid #5C0099'
                },
            },
        }
    }
})