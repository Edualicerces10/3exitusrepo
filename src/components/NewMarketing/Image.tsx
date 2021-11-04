import { Box, Image as ChakraImage } from '@chakra-ui/react'


interface ImageProps {
    src: string
    alt: string
}

export const Image = ({ src, alt }: ImageProps) => {
    return(
        <Box
            w="100%"
        >
            <ChakraImage
                objectFit={'fill'}
                src={src}
                alt={alt}
            />
        </Box>
    )
}