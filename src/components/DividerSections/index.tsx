import { Divider, Box, useColorModeValue } from '@chakra-ui/react'

export default function DividerSections(){
    return(
        <Divider
          h="1px"
          mb='10px'
          bg={useColorModeValue('purple.800','gray.50')}
          size='2'
        />
    )
}