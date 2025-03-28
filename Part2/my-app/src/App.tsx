import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { ICard } from './pages/Card/Card';

function App() {
  return (
    <ChakraProvider>
      <ICard />
    </ChakraProvider>
  );
}

// sempre que pasar algum número, deverá ser passado entre {}

export default App;

