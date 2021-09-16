import { Container, Box } from '@chakra-ui/react'


export default function TextError404() {
    return(
        <Box
            w="100%"
            mt='10'
            py='2'
            pr='3'
            borderRadius='5'
            borderX='4px'
            textAlign="center"
        >
            A página solicitada não existe 😢❌...
        </Box>
    )
}