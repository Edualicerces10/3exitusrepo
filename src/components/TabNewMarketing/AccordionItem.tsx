import { AccordionButton, AccordionIcon, AccordionItem as AccordionItemChakra, AccordionPanel, Box } from '@chakra-ui/react'

interface AccordionProps {
    title: string
    text: string
}

export default function AccordionItem({ title, text }: AccordionProps) {
    return(
        <AccordionItemChakra>
            <h2>
                <AccordionButton _focus={{boxShadow: "none"}}>
                    <Box flex="1" textAlign="left">
                        {title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {text}
            </AccordionPanel>
        </AccordionItemChakra>
    )
}