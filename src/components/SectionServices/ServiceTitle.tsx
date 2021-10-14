import { Stack, Heading, Text } from "@chakra-ui/react"

interface TitleProps {
    heading: string
    text: string  
}

export const ServiceTitle = ({ heading, text}: TitleProps) => {
    return (
    <Stack spacing={0} align={'center'} >
        <Heading 
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight='500'
        >
            {heading}
        </Heading>
        <Text>{text}</Text>
    </Stack>
    )
}