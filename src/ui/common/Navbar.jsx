import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  Img,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const links = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/login',
    text: 'Login',
  },
  {
    path: '/register',
    text: 'Register',
  },
];

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box as="section" w="full">
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container
          py={{
            base: '1',
            lg: '4',
          }}
          maxW="100%"
        >
          <Flex justify="space-between">
            <HStack gap={4}>
              <Link to="/">
                <Img src={logo} />
              </Link>
              {isDesktop && (
                <ButtonGroup variant="ghost" spacing="4">
                  {links.map(link => (
                    <Button
                      key={link.path}
                      as={NavLink}
                      to={link.path}
                      _activeLink={{ _hover: { bg: 'primary.500' }, bg: 'primary.600', color: 'primary.100' }}
                    >
                      {link.text}
                    </Button>
                  ))}
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack>
                <ButtonGroup variant="ghost" spacing="1">
                  <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                  <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                  <IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
                </ButtonGroup>
                <Avatar boxSize="10" name="Christoph Winston" src="https://picsum.photos/120/120" />
              </HStack>
            ) : (
              <IconButton variant="ghost" icon={<FiMenu fontSize="1.25rem" />} aria-label="Open Menu" />
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
