// import { BellIcon } from '@chakra-ui/icons'
import { Box, HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'


export default function TopContacts() {
    return(
        <Box as="section">
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          py="2"
          px={{ base: '3', md: '6', lg: '8' }}
          color="white"
          bg="purple.600"
        >
          <HStack spacing="3">
            {/* <Icon as={BellIcon} fontSize="2xl" h="10" /> */}
            <Text fontWeight="normal">
            Contacto:<b><u> 928609651 </u></b>
            </Text>
          </HStack>
          <Box w={{ base: 'full', sm: 'auto' }} flexShrink={0}>
            email: <b><u> oi@3exitus.com </u></b>
          </Box>
        </Stack>
      </Box>
    )
}