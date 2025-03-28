import { Box, Container, Flex, Link, Text, VStack} from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" bg="#230f8c" color="white" py='50px' mt='100px'>
      <Container maxW="container.lg">
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
          
          {/* Links institucionais */}
          <VStack align="flex-start" spacing={2}>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Sobre</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Termos de Uso</Link>
            <Link href="#" _hover={{ textDecoration: "underline" }}>Política de Privacidade</Link>
          </VStack>

          {/* Informações de contato */}
          <VStack align="flex-end" spacing={2}>
            <Text>Email: suporte@diobank.com</Text>
            <Text>Telefone: (11) 4400-9999</Text>
          </VStack>

        </Flex>

        {/* Direitos autorais */}
        <Text mt={10} textAlign="center" fontSize="sm">
          © {new Date().getFullYear()} DIO Bank. Todos os direitos reservados.
        </Text>
      </Container>
    </Box>
  );
}
