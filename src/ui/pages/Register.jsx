import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Img,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
// import { useForm } from 'react-hook-form';
import logo from '../../assets/logo.svg';

const Register = () => {
//   const { register, handleSubmit } = useForm();

  return (
    <Container
      maxW="md"
      py={{
        base: '12',
        md: '24',
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Img src={logo} />
          <Stack spacing="3" textAlign="center">
            <Heading
              color="white"
              size={useBreakpointValue({
                base: 'md',
                md: 'xl',
              })}
            >
              Crea tu cuenta
            </Heading>
            <Text color="gray.200">Empieza a hacer realidad tus sueños</Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel color="white" htmlFor="name">
                Name
              </FormLabel>
              <Input bg="gray.100" id="name" type="text" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="white" htmlFor="email">
                Email
              </FormLabel>
              <Input bg="gray.100" id="email" type="email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="white" htmlFor="password">
                Password
              </FormLabel>
              <Input bg="gray.100" id="password" type="password" />
              <FormHelperText color="gray.200">
                Como mínimo 12 carácteres de longitud, 1 número y 1 símbolo
              </FormHelperText>
            </FormControl>
          </Stack>
          <Stack spacing="4">
            <Button variant="solid">Create account</Button>
          </Stack>
        </Stack>
        <HStack justify="center" spacing="1">
          <Text fontSize="sm" color="white">
            Already have an account?
          </Text>
          <Button variant="link" colorScheme="primary" size="sm">
            Log in
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
};

export default Register;
