import logo from './assets/react.svg';
import { Box, Flex, Heading, Img } from '@chakra-ui/react';

const App = () =>  {
  return (
    <Box h="full" bgGradient={{ sm: 'linear(to-r, blue.600, purple.600)' }}>
      <Flex h="full" flexDir="column" justify="center" align="center" textAlign="center" gap={10}>
        <Img w={36} src={logo} color="primary.1000" />
        <Heading as="h1">React Awesome</Heading>
      </Flex>
    </Box>
  );
}

export default App;
