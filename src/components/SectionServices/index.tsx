import {
  Box,
  Stack,
  Container,
  useColorModeValue,
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
    <>
    {/* bg={useColorModeValue('gray.100', 'gray.700')} */}
    <Box>
      <Container maxW={'7xl'} py={2} as={Stack} spacing={12}>
        <ServiceTitle heading={'Somos especializados em'} text="" />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
            <Service>
            <ServiceContent>
              <ServiceHeading>Marketing Digital</ServiceHeading>
              <ServiceText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </ServiceText>
            <ServiceImage src='/img/marketing.svg' alt='Marketing Plans'/>
            </ServiceContent>
          </Service>
          <Service>
            <ServiceContent>
              <ServiceHeading>Desenvolvimento Web</ServiceHeading>
              <ServiceText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
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
      </Container>
    </Box>
    <DividerSections />
    </>
  );
}