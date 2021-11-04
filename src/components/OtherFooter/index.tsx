import * as React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import Logo from '../Logo'
import { Copyright } from './Copyright'
import { SocialMediaLinks } from './SocialMediaLinks'

export default function OtherFooter() {
    return(
    <>
        <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="8" px={{ base: '4', md: '8' }}>
            <Stack>
            <Stack direction="row" spacing="4" align="center" justify="space-between">
                <Logo />
                <SocialMediaLinks />
            </Stack>
            <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
            </Stack>
        </Box>
    </>
    )
}