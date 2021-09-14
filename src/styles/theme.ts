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
        body: 'Poppins'
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