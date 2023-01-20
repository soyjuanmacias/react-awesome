import logo from './assets/logo.svg';
import { Box, Flex, Heading, Img } from '@chakra-ui/react';
import Navbar from './ui/common/Navbar';
import { Route, Routes } from 'react-router';
import Register from './ui/pages/Register';
import Login from './ui/pages/Login';

const App = () => {
  return (
    <Box h="full">
      <Navbar />
      <Flex
        h="full"
        flexDir="column"
        justify="center"
        align="center"
        textAlign="center"
        gap={10}
        bgGradient={{ sm: 'linear(to-r, blue.600, purple.600)' }}
      >
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="*"
            element={
              <>
                <Img w={36} src={logo} color="primary.1000" />
                <Heading as="h1">React Awesome</Heading>
              </>
            }
          />
        </Routes>
      </Flex>
    </Box>
  );
};

export default App;
