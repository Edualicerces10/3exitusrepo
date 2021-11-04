import { Text as ChakraText } from '@chakra-ui/react'

interface TextProps {
    text: string
}

export const Text = ({ text }: TextProps) => {
    return (
        <ChakraText
            as="p"
            align="center"
            lineHeight='10'
            fontSize={'xl'}
            marginX="12"
            marginY="auto"
        >
            {text}
      </ChakraText>
    );
  };