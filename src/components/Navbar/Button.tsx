import { Button as ButtonLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import Link from 'next/link'
import { ActiveLink } from './ActiveLink'

interface LinkProps extends ChakraLinkProps {
    href: string
    children: string
}

export const LinkButton = ({ href, children}: LinkProps) => {
    return(

        <ButtonLink
            weight="500"
            variant="ghost"
            w="full"
        >
            <Link href={href}>{children}</Link>
        </ButtonLink>
    )
}