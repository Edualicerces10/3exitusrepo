import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
const ColorTheme = extendTheme({ config })
export default ColorTheme