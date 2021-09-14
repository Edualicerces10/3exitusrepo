import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="#" aria-label="Instagram" target="_blank" icon={<FaInstagram fontSize="30px" />} />
    <IconButton as="a" href="#" aria-label="Facebook" target="_blank" icon={<FaFacebook fontSize="30px" />} />
    <IconButton as="a" href="#" aria-label="Linkedin" target="_blank" icon={<FaLinkedin fontSize="30px" />} />
  </ButtonGroup>
)
