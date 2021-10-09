
import { Box, SimpleGrid, Icon } from "@chakra-ui/react"
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc"
import DividerSections from "../DividerSections"
import { Feature } from "./Feature"



export default function SectionFeactures() {
    return (
    <>
    <Box 
        p={4} 
        px={{ base: "4", md: "8" }}
    >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                title={"Lifetime Support"}
                text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
            />
            <Feature
                icon={<Icon as={FcDonate} w={10} h={10} />}
                title={"Unlimited Donations"}
                text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
            />
            <Feature
                icon={<Icon as={FcInTransit} w={10} h={10} />}
                title={"Instant Delivery"}
                text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
            />
        </SimpleGrid>
    </Box>
    <DividerSections />
    </>
    )
}
