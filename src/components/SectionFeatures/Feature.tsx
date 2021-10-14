import { ReactElement } from "react"
import { Text, Stack, Flex } from "@chakra-ui/react"

interface FeatureProps {
    title: string
    text: string
    icon: ReactElement
}

export const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack
            px={{ base: '4', md: '8' }}
            rounded={'lg'}
        >
            <Flex
                w={16}
                h={16}
                display='flex'
                align={"center"}
                justify={"center"}
                rounded={"full"}
                color={"purple.600"}
                bg={"gray.100"}
            >
                {icon}
            </Flex>
            <Text
              fontWeight={600}
            >{title}</Text>
            <Text>{text}</Text>
        </Stack>
    )
}