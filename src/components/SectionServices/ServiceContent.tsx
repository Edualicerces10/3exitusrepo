import { ReactNode } from 'React'
import { Stack, useColorModeValue } from '@chakra-ui/react'

export const ServiceContent = ({ children }: { children: ReactNode }) => {
    return (
      <Stack
        bg={useColorModeValue('gray.800','white')}
        boxShadow={'lg'}
        py={3}
        px={2}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        >
        {children}
      </Stack>
    );
  };