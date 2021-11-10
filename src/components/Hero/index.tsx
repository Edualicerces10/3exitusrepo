import ImageHero from '../../../public/img/marketlaunch.svg'

import Image from 'next/image'
import {
    Box,
    Flex,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';
{/*import BudgetButton from '../BadgetButton';*/}
import DividerSections from '../DividerSections';
import { motion } from 'framer-motion';

  export default function HeroSection() {
    return (
        <Box>
            
      <Stack 
        // minH={'80vh'}
        direction={{ base: 'column', md: 'row' }}

        bgImage="url('/img/wave.svg')"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"

        minHeight="90vh"
        px={{ base: '4', md: '8' }}
      >
        <Flex align={'center'} justify={'center'}>
          <Stack spacing={6} maxW={'lg'}>
          <Text
            mb='12'
            fontSize="2xl"
            display="flex"
            justifyContent="flex-start"
            color="#6B46C1"
            opacity="0.7"
            >
            <motion.a
                animate={{ rotate: 80 }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 0.9
                }}

                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
            >
            👋
            </motion.a>
            Olá, seja bem-vindo</Text>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                fontWeight='500'
                as={'span'}
                // position={'relative'}
                >
                {/* Sua empresa de
                Marketing Digital */}
                Criamos sua <Text color="#6B46C1" opacity="0.7"> experiência Digital </Text>
              </Text>
            </Heading>
            <Text as='p' fontSize={{ base: 'md', lg: 'lg', md: 'md'}}>
            <Text
              color="#6B46C1"
              display="inline"
              fontWeight='700'
            >
                3Exitus
            </Text> a empresa que vai ajudar você e sua empresa a elevar o seu negócio, dando um ar mais moderno e profissional, vamos ajudar você ganhar uma posição no mundo digital.
            </Text>
            {/*<Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <BudgetButton />
            </Stack>
            */}
          </Stack>
        </Flex>
        <Flex>
          <Image
            alt={'Login Image'}
            objectFit={'fill'}
            src={ImageHero}
          />
        </Flex>
      </Stack>
        <DividerSections />
        </Box>
    );
  }
