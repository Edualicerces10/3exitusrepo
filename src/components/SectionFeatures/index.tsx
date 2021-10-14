
import { Box, SimpleGrid, Icon } from "@chakra-ui/react"
import { IoRocketSharp, IoDiamondSharp, IoEyeSharp } from "react-icons/io5"
import DividerSections from "../DividerSections"
import { Feature } from "./Feature"

export default function SectionFeactures() {
    return (
    <>
    <Box 
        p={4} 
        px={{ base: "2", md: "6" }}
    >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
                icon={<Icon as={IoRocketSharp} w={10} h={10} />}
                title={"Missão"}
                text={
                    "Ser refefência no sector de prestação de serviços de Marketing Digital!"
                }
            />
            <Feature
                icon={<Icon as={IoEyeSharp} w={10} h={10} />}
                title={"Visão"}
                text={
                    "Tornar o serviço de Marketing Digital uma ferramenta que geradora de riquezas para as empresas!"
                }
            />
            <Feature
                icon={<Icon as={IoDiamondSharp} w={10} h={10} />}
                title={"Valores"}
                text={
                    "Foco no cliente, qualidade da resposta, eficiência, proatividade, ética e confidêncialidade!"
                }
            />
        </SimpleGrid>
    </Box>
    <DividerSections />
    </>
    )
}
