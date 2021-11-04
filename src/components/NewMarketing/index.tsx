import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react"
import { Image } from "./Image"
import { Text } from "./Text"

export default function NewMarketing() {
    return (
        <>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab _focus={{boxShadow: "none"}}>Social Media</Tab>
                    <Tab _focus={{boxShadow: "none"}}>Lançamentos</Tab>
                    <Tab _focus={{boxShadow: "none"}}>Gestão de Trafego</Tab>
                    <Tab _focus={{boxShadow: "none"}}>Planejamento Estrategico</Tab>
                    <Tab _focus={{boxShadow: "none"}}>Design Gráfico</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel
                        display='flex'
                    >
                        <Image 
                            src='/img/socialmedia.svg'
                            alt='marketing'
                        />
                        <Text text="é o conjunto de ações e técnicas de marketing digital para promover posicionamento de marcas, produtos ou serviços nas redes sociais, sendo hoje em dia considerado um dos componentes principais da estratégia de marketing de uma empresa!" />
                    </TabPanel>
                    <TabPanel display='flex'>
                        <Image 
                            src='/img/lancamento.svg'
                            alt='marketing'
                        />
                       <Text text="é uma metodologia de marketing que tem como objetivo gerar grandes fluxos de receita em um curto espaço de tempo. É um evento com data, hora e limite de vendas ou tempo, que costuma acontecer de 1 a 2 vezes por ano, com dia certo para a abertura e fechamento do seu checkout!" />
                    </TabPanel>
                    <TabPanel display='flex'>
                        <Image 
                            src='/img/media.svg'
                            alt='marketing'
                        />
                        <Text text="é uma estratégia que consiste em trazer mais usuários para seu site ou redes sociais através de anúncios. Neste trabalho, o gestor de tráfego segmenta públicos (focando numa audiência interessada em seu produto/serviço) e analisa métricas para gerenciar os visitantes que seus canais estão recebendo!" />
                    </TabPanel>
                    <TabPanel display='flex'>
                        <Image 
                            src='/img/Investment.svg'
                            alt='marketing'
                        />
                        <Text text="é uma série de ações que ajudam a atingir os objetivos de sua empresa por meio de canais de marketing escolhidos e estudados profundamente com base em suas informações e no seu público-alvo!" />
                    </TabPanel>
                    <TabPanel display='flex'>
                        <Image 
                            src='/img/layer1.svg'
                            alt='marketing'
                        />
                        <Text text="é a forma de apresentar o conteúdo e guiar o usuário para o próximo passo sem que ele se perca ou desista no caminho!" />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
