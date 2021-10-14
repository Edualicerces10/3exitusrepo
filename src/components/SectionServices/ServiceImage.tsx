import { Image } from '@chakra-ui/react'


interface ImageProps {
    src: string
    alt: string
}

export const ServiceImage = ({ src, alt }: ImageProps) => {
    return(
        <Image
            h="250"
            w='100vw'
            objectFit="contain"
            src={src}
            alt={alt}
      />
    )
}