import {
  Button,
  chakra,
  HTMLChakraProps,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const SubscribeForm = (props: HTMLChakraProps<'form'>) => {
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <FooterHeading>Subscreva-se na nossa newsletter</FooterHeading>
        <Text>Seja notificado quando adicionarmos novos conteúdos ou novidades interessantes para você.</Text>
        <Stack spacing="4" direction={{ base: 'column', md: 'row' }}>
          <Input
            bg={useColorModeValue('white', 'inherit')}
            placeholder="Insira o seu melhor email"
            type="email"
            required
            focusBorderColor={useColorModeValue('blue.500', 'blue.300')}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue('gray.500', 'whiteAlpha.700'),
            }}
          />
          <Button
        //   "#5C0099"
            type="submit"
            color= {useColorModeValue('white', '#5C0099')}
            colorScheme='purple'
            flexShrink={0}
            width={{ base: 'full', md: 'auto' }}
          >
            Subscriva-se
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  )
}
