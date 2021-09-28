import { Button, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
export default function BudgetButton() {
    return (
        <motion.button
            
        whileHover={{ scale: 1.01 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        >
            <Button
                rounded={"10"}
                bg={"purple.600"}
                color={useColorModeValue("gray.900", "gray.50")}
                _hover={{
                    bg: useColorModeValue("purple.800", "purple.900"),
                }}
                transitionDelay={'5'}
            >
                Pedir Orçamento
            </Button>
        </motion.button>
    )
}
