import { Button, useColorModeValue } from "@chakra-ui/react"
export default function BudgetButton() {
    return (
        <Button
            rounded={"10"}
            bg={"purple.600"}
            color={useColorModeValue("gray.50", "gray.900")}
            _hover={{
                bg: useColorModeValue("purple.600", "purple.700"),
            }}
            transitionDelay={'5'}

        >
            Pedir Orçamento
        </Button>
    )
}
