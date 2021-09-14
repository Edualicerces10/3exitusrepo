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
// import { Logo } from "@choc-ui/logo";

export default function NabarApp() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    return (
        <Box as="header" mx="auto">
            <Stack spacing="10">
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={1}
                shadow="md"
                mx="auto"
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mx="auto"
                >
                    <Flex>
                        <chakra.a
                            href="/"
                            title="3exitus"
                            display="flex"
                            alignItems="center"
                        >
                            <Logo />
                            {/* <VisuallyHidden>3exitus</VisuallyHidden> */}
                        </chakra.a>
                        <chakra.h1 fontSize="xl" fontWeight="medium">
                            3exitus
                        </chakra.h1>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="brand.500"
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            <Button fontWeight='500' variant="ghost">
                                <Link href="/">Home</Link>
                            </Button>
                            <Button fontWeight='500' variant="ghost">
                                <Link href="/about">Sobre Nós</Link>
                            </Button>
                            <Button fontWeight='500' variant="ghost">Blog</Button>
                            <Button fontWeight='500' variant="ghost">Contactos</Button>
                        </HStack>
                        {/* <Button colorScheme="brand" size="sm">
                            Get Started
                        </Button> */}
                        <ColorModeSwitcher />
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
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

                                <Button w="full" fontWeight='500' variant="ghost">
                                    <Link href="/">Home</Link>
                                </Button>
                                <Button w="full" fontWeight='500' variant="ghost">
                                <Link href="/about">Sobre Nós</Link>
                                </Button>
                                <Button w="full" fontWeight='500' variant="ghost">
                                    <Link href="/blog">Blog</Link>
                                </Button>
                                <Button w="full" fontWeight='500' variant="ghost">
                                    Contactos
                                </Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
        </Stack>
        </Box>
    );
}
