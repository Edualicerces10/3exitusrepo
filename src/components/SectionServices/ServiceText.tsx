import { ReactNode } from 'react';
import { Text } from '@chakra-ui/react'

export const ServiceText = ({ children }: { children: ReactNode }) => {
    return (
        <Text
        textAlign={'center'}
        fontSize={{ base: 'md', lg: 'lg', md: 'lg'}}
        >
        {children}
      </Text>
    );
  };