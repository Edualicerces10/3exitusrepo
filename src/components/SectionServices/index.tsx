import {
  Box,
  Stack,
} from '@chakra-ui/react';
import { ServiceText } from './ServiceText';
import { ServiceTitle } from './ServiceTitle';
import { ServiceHeading } from './ServiceHeading';
import { Service } from './Service';
import { ServiceContent } from './ServiceContent';
import DividerSections from '../DividerSections';
import { ServiceImage } from './ServiceImage';

export default function SectionServices() {
  return (
    <Box
    // bgImage="url('/img/blob.svg')" 
    // backgroundRepeat="no-repeat"
    // bgPosition="center"
    >
    {/* bg={useColorModeValue('gray.100', 'gray.700')} */}
    <Box
      minHeight="90vh"
      px={{base: '4', md:'8'}}
      py={2}
      as={Stack}
      spacing={12}

      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
      bgImage="url('/img/blobBottom.svg')"      
      >
      {/* <Container maxW={'7xl'} py={2} as={Stack} spacing={12}> */}
        <ServiceTitle heading={'Áreas de Actuação'} text="" />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
            <Service>
            <ServiceContent>
              <ServiceHeading>Marketing Digital</ServiceHeading>
              <ServiceText>
                Usamos diversas técnicas de Marketing Digital para criarmos uma boa relação e dar mais visibilidade e atrair mais clientes para o seu negócio!
              </ServiceText>
            <ServiceImage src='/img/marketing.svg' alt='Marketing Plans'/>
            </ServiceContent>
          </Service>
          <Service>
            <ServiceContent>
              <ServiceHeading>Desenvolvimento Web</ServiceHeading>
              <ServiceText>
                Desenvolvemos websites modernos e com designers intuítivos...!
                Desenvolvemos websites modernos!
              </ServiceText>
              <ServiceImage src='/img/webdev.svg' alt='Devices for web development'/>
            </ServiceContent>
          </Service>
          <Service>
            <ServiceContent>
              <ServiceHeading>Desenvolvimento de Apps</ServiceHeading>
              <ServiceText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </ServiceText>
              <ServiceImage src='/img/mobdev.svg' alt='Devices for mobile development'/>
            </ServiceContent>
          </Service>
        </Stack>
      {/* </Container> */}
    </Box>
    <DividerSections />
    </Box>
  );
}