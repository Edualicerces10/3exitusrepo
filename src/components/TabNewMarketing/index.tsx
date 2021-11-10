import {
    Accordion,
    Box,
} from "@chakra-ui/react"
import AccordionItem from "./AccordionItem"

export default function TabNewMarketing() {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem title="Social Media" text="O profissional de social media é responsável por gerir e interagir com os canais de comunicação de pessoas públicas, empresas ou até mesmo projetos pessoais.
            é ele quem planeja e cria conteúdos para serem compartilhados nas redes sociais.
            Também publica dentro dessas plataformas, interage com outros usuários, analisa resultados e faz tudo acontecer.
            então, atualiza, monitora e cria conteúdo relevante." />

            <AccordionItem title="Lançamentos" text="Lançamento é uma estrategia de marketing comumente usado para vendas que consiste na exposição de uma marca ou produto para o maior número de pessoas interessadas num tempo determinado.
            Normalmente o lançamento é constituido por 3 etapas antes do evento, o evento e depois do evento.
            O antes do evento serve para avisar ao seu público interessado (leads) ou até mesmo criar um público do zero que o seu evento está prestes a acontecer.
            O evento serve para entregar algo de valor para a sua audiência.
            Depois do evento é onde é feita uma oferta seja de um produto ou serverviço!" />

            <AccordionItem title="Gestão de Trafego" text="Nada mais é do que trafego recebido através de investimento em anúncios online, feito comumente nas plataformas Facebook e Google!" />

            <AccordionItem title="Branding" text="Se você tem uma marca, esse é um compromisso que deve ser levado a sério. Porque a sua força no mercado e mesmo a percepção que o público tem dela dependem de ações que favoreçam os seus objetivos.
            marcar presença na mente do consumidor, ser uma escolha lógica quando uma necessidade de compra surge, ter identidades e personalidades reconhecidas.
            Branding é uma estratégia de gestão da marca, envolvendo todas as ações que tem por objetivo torná-la mais forte e mais presente no mercado, sendo reconhecida pelo público, admirada e desejada por aquilo que oferece!" />

            <AccordionItem title="Ecommerce" text="E-commerce é uma modalidade de comércio em que as compras e vendas são feitas pela internet.
            No comércio eletrônico, o fabricante ou revendedor disponibiliza seus produtos em uma plataforma virtual própria e as transações são realizadas online.
            A finalidade central do e-commerce é permitir que o consumidor faça compras de maneira rápida e fácil!" />  
        </Accordion>
    )
}
