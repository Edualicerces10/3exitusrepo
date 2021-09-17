import { ReactNode } from "react";
import { Stack, Heading, Text } from "@chakra-ui/react"

interface TitleProps {
    heading: string
    text: string  
}

export const ServiceTitle = ({ heading, text}: TitleProps) => {
    return (
    <Stack spacing={0} align={'center'} >
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
    </Stack>
    )
}