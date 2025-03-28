import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header";
import { 
    Center,
    Input,
    Box,
    Button,
    HStack
  } from '@chakra-ui/react'
import { login } from '../../services/login';


export const Layout =  ()  => {
    return (
        <Box minHeight='100vh' backgroundColor='#230f8c' padding='25px' >
            <Header />
            <Box background='#FFFFFF' borderRadius='25px' padding='15px' mt='40px'>
                <Center fontSize='20px' p='10px'>
                    <h1>Faça o Login</h1>
                </Center>
                <Input placeholder='email' marginTop='5px' />
                <Input placeholder='password' marginTop='5px' type='password' />
                <HStack spacing='10px' justify='center' p='15px'>
                    <Button onClick={login} bg="#693cc3" size="sm" w="120px">
                        Log In
                    </Button>
                    <Button onClick={login} bg="#693cc3" size="sm" w="120px">
                        Sign Up
                    </Button>
                </HStack>
            </Box>
            <Footer />
        </Box>
    )
}