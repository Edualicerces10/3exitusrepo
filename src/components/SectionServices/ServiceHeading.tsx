import { ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

export const ServiceHeading = ({ children }: { children: ReactNode }) => {
    return (
      <Heading
        as={'h3'}
        fontSize={'xl'}
      >
        {children}
      </Heading>
    )
  }