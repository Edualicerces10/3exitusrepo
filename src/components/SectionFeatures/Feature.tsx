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
            my={5}
            border='1px solid red'
            rounded={'lg'}
        >
            <Flex
                w={16}
                h={16}
                display='flex'
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                bg={"gray.100"}
            >
                {icon}
            </Flex>
            <Text
              fontWeight={600}
            >{title}</Text>
            <Text color={"gray.600"}>{text}</Text>
        </Stack>
    )
}