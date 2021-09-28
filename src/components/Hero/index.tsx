import ImageHero from '../../../public/img/marketlaunch.svg'

import Image from 'next/image'
import {
    Box,
    Flex,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';
import BudgetButton from '../BadgetButton';
import DividerSections from '../DividerSections';
import { motion } from 'framer-motion';
import { AnimationType } from 'framer-motion/types/render/utils/types';
import { Presence } from 'framer-motion/types/components/AnimateSharedLayout/types';

  export default function HeroSection() {
    return (
        <Box
        >
            
      <Stack 
        // minH={'80vh'}
        direction={{ base: 'column', md: 'row' }}

        bgImage="url('/img/wave.svg')"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"

        minHeight="90vh" px={{ base: '4', md: '8' }}
      >
        <Flex align={'center'} justify={'center'}>
          <Stack spacing={6} maxW={'lg'}>
          <Text
            mb='12'
            fontSize="2xl"
            display="flex"
            justifyContent="flex-start"
            >
            <motion.a
                // animate={{ rotate: 60 }}  
                // transition={{ repeat: Infinity, duration: 20 }}

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
                fontWeight='normal'
                as={'span'}
                // position={'relative'}
                >
                Sua empresa de
                Marketing Digital
              </Text>
            </Heading>
            <Text InactiveBorder fontSize={{ base: 'md', lg: 'lg' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Pariatur odio vel obcaecati minima animi quis labore 
              facere rem repudiandae quibusdam.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <BudgetButton />
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
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