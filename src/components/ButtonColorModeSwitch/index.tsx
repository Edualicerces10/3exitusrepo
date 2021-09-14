import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
  } from "@chakra-ui/react"
  import { FaSun } from 'react-icons/fa'
  import { CgMoon } from 'react-icons/cg'
  type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">
  
  export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(CgMoon, FaSun)
  
    return (
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        // color="current"
        marginLeft="2"
        _focus={{shadow: false}}
        onClick={toggleColorMode}
        color={useColorModeValue("gray.700", "yellow")}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
    )
  }