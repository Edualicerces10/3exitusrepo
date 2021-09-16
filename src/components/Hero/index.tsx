import ImageHero from '../../../public/img/marketlaunch.svg'
import Image from 'next/image'
import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';
import BudgetButton from '../BadgetButton';

  export default function HeroSection() {
    return (
      <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex align={'center'} justify={'center'}>
          <Stack spacing={6} maxW={'lg'}>
          <Text mb='12' fontSize="2xl"> 👋 Olá, seja bem-vindo</Text>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                fontWeight='normal'
                as={'span'}
                position={'relative'}>
                Sua empresa de
                Marketing Digital
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
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
            objectFit={'cover'}
            src={ImageHero}
          />
        </Flex>
      </Stack>
    );
  }