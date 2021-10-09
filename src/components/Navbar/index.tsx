import React from "react";
import Link from "next/link";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    // VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    Stack,
    IconButton,
    CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../Logo";
import { ColorModeSwitcher } from "../ButtonColorModeSwitch";
import { LinkButton } from "./Button";
// import { Logo } from "@choc-ui/logo";

export default function NabarApp() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    return (
        <Box role="contentheader" mx="auto">
            <Box as="header">
                <Stack spacing="10">
                    <React.Fragment>
                        <chakra.header
                            bg={bg}
                            w="full"
                            px={{ base: '4', md: '8' }}
                            py={1}
                            shadow="md"
                        >
                            <Flex
                                alignItems="center"
                                justifyContent="space-between"
                                mx="auto"
                            >
                                <Flex>
                                    <Link href="/" passHref>
                                    <chakra.a
                                        title="3exitus"
                                        display="flex"
                                        alignItems="center"
                                    >
                                            <Logo />
                                        {/* <VisuallyHidden>3exitus</VisuallyHidden> */}
                                    </chakra.a>
                                    </Link>
                                    <chakra.h1
                                        fontSize="xl"
                                        fontWeight="medium"
                                    >
                                        3exitus
                                    </chakra.h1>
                                </Flex>
                                <HStack
                                    display="flex"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <HStack
                                        spacing={1}
                                        mr={1}
                                        color="brand.500"
                                        display={{
                                            base: "none",
                                            md: "inline-flex",
                                        }}
                                    >
                                        <LinkButton href="/" >Home</LinkButton>
                                        <LinkButton href="/about" >Sobre Nós</LinkButton>
                                        <LinkButton href="/bolg" >Blog</LinkButton>
                                        <LinkButton href="/contactus" >Contactos</LinkButton>
                                    </HStack>
                                    {/* <Button colorScheme="brand" size="sm">
                            Get Started
                        </Button> */}
                                    <ColorModeSwitcher />
                                    <Box
                                        display={{
                                            base: "inline-flex",
                                            md: "none",
                                        }}
                                    >
                                        <IconButton
                                            display={{
                                                base: "flex",
                                                md: "none",
                                            }}
                                            aria-label="Open menu"
                                            fontSize="20px"
                                            color={useColorModeValue(
                                                "gray.800",
                                                "inherit"
                                            )}
                                            variant="ghost"
                                            icon={<AiOutlineMenu />}
                                            onClick={mobileNav.onOpen}
                                        />

                                        <VStack
                                            pos="absolute"
                                            top={0}
                                            left={0}
                                            right={0}
                                            display={
                                                mobileNav.isOpen
                                                    ? "flex"
                                                    : "none"
                                            }
                                            flexDirection="column"
                                            p={2}
                                            pb={4}
                                            m={2}
                                            bg={bg}
                                            spacing={3}
                                            rounded="sm"
                                            shadow="sm"
                                        >
                                            <CloseButton
                                                aria-label="Close menu"
                                                onClick={mobileNav.onClose}
                                            />

                                            <LinkButton href="/" >Home</LinkButton>
                                            <LinkButton href="/about" >Sobre Nós</LinkButton>
                                            <LinkButton href="/bolg" >Blog</LinkButton>
                                            <LinkButton href="/contactus" >Contactos</LinkButton>
                                        </VStack>
                                    </Box>
                                </HStack>
                            </Flex>
                        </chakra.header>
                    </React.Fragment>
                </Stack>
            </Box>
        </Box>
    );
}
