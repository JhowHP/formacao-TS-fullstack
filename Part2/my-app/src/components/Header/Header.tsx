import { Flex, Heading, Image} from "@chakra-ui/react";
import Logodio from '../../assets/images/logo.png'


export function Header() {
    return (
        <Flex as="header" justify="center" bg="#3a1e9f" color="white" p='20px' borderRadius='15px' >
            <Image
                boxSize= '40px'
                src={Logodio}
                alt='Logo dio'
                mt='-7px'
                mr='5px'
            />
            <Heading size="lg">Bank </Heading>
        </Flex>
    );
}


