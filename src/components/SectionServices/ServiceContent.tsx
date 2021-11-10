import { ReactNode } from 'react'
import { Stack, useColorModeValue } from '@chakra-ui/react'

interface ServiceProps {
    children: ReactNode
}

export const ServiceContent = ({ children }: ServiceProps) => {
    return (
      <Stack
        bg={useColorModeValue('white','gray.800')}
        boxShadow="dark-lg"
        py={3}
        px={2}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        minH={430}
        >
        {children}
      </Stack>
    );
  };