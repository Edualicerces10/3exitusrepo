import {
  Box,
  Flex,
  Stack
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ButtonColorModeSwitch'
import Logo from '../Logo'
import TopContacts from '../TopContacts'

export default function OtherNavbar() {
  return (
    <>
      <TopContacts />
      <Box as="header" role="contentheader" mx="auto" px={8}>
        <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Logo />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
            <ColorModeSwitcher />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}