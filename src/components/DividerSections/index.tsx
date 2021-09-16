import { Divider, useColorModeValue } from '@chakra-ui/react'

export default function DividerSections(){
    return(
        <Divider  h="1px" my='10' bg={useColorModeValue('purple.800','gray.50')} size='2' />
    )
}