import { ReactNode } from 'react';
import { Text, useColorModeValue } from '@chakra-ui/react'

export const ServiceText = ({ children }: { children: ReactNode }) => {
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.400','gray.600')}
        fontSize={'sm'}>
        {children}
      </Text>
    );
  };