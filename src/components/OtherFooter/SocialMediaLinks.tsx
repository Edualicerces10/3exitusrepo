import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" target="_blank" href="https://www.linkedin.com/in/exitus-angola-5170a5224/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="30px" />} />
    <IconButton as="a" target="_blank" href="https://www.facebook.com/3Exitus-100279382375415" aria-label="FacebookFaFacebook" icon={<FaFacebook fontSize="30px" />} />
    <IconButton as="a" target="_blank" href="https://www.instagram.com/3exitus/" aria-label="InstaFaInstagram" icon={<FaInstagram fontSize="30px" />} />
  </ButtonGroup>
)