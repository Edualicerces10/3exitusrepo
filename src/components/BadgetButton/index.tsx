import { Button, useColorModeValue } from '@chakra-ui/react'

export default function BudgetButton() {
    return(
        <Button
          rounded={'10'}
          bg={'purple.600'}
          color={useColorModeValue('gray.900','gray.50')}
          _hover={{
          bg:
          useColorModeValue('purple.800','purple.900')
        }}>
            Pedir Orçamento
        </Button>
    )
}