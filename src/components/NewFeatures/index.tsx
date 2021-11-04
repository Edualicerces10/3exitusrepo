import { Box, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'

import { IoRocketSharp, IoDiamondSharp, IoEyeSharp } from 'react-icons/io5'
import { MdStars, MdRemoveRedEye, MdEmojiFlags } from 'react-icons/md'

import Feature from './Feature'

export const NewFeature = () => (
  <Box as="section" mx="auto" py="12" px={{ base: '6', md: '8' }}>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
      <Feature title="Missão" icon={<MdStars color={'#6B46C1'} />}>
        Ser refefência no sector de prestação de serviços de Marketing Digital!
      </Feature>
      <Feature title="Visão" icon={<MdRemoveRedEye color={'#6B46C1'} />}>
        Tornar o serviço de Marketing Digital uma ferramenta que geradora de riquezas para as empresas.
      </Feature>
      <Feature title="Valores" icon={<MdEmojiFlags color={'#6B46C1'} />}>
        Foco no cliente, qualidade da resposta, eficiência, proatividade, ética e confidêncialidade!
      </Feature>
    </SimpleGrid>
  </Box>
)