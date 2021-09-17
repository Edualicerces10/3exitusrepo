import { ReactNode } from 'react'
import { Heading, useColorModeValue } from '@chakra-ui/react'

export const ServiceHeading = ({ children }: { children: ReactNode }) => {
    return (
      <Heading
        color={useColorModeValue('gray.400','gray.600')}
        as={'h3'}
        fontSize={'xl'}
      >
        {children}
      </Heading>
    )
  }