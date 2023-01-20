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
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import useAuthUseCases from '../../core/auth/domain/auth.usecases';

const Register = () => {
  const { register: registerUseCase } = useAuthUseCases();
  const { register, handleSubmit } = useForm();

  const submit = result => {
    console.log('result', result);
    registerUseCase(result);
  };

  return (
    <Container
      maxW="md"
      py={{
        base: '6',
        md: '8',
      }}
    >
      <form onSubmit={handleSubmit(submit)}>
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
                <Input bg="gray.100" id="name" type="text" {...register('name')} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="white" htmlFor="name">
                  Apellido
                </FormLabel>
                <Input bg="gray.100" id="name" type="text" {...register('lastName')} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="white" htmlFor="email">
                  Email
                </FormLabel>
                <Input bg="gray.100" id="email" type="email" {...register('email')} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="white" htmlFor="password">
                  Password
                </FormLabel>
                <Input
                  bg="gray.100"
                  id="password"
                  type="password"
                  {...register('password')}
                  focusBorderColor="primary.300"
                />
                <FormHelperText color="gray.200">
                  Como mínimo 12 carácteres de longitud, 1 número y 1 símbolo
                </FormHelperText>
              </FormControl>
            </Stack>
            <Stack spacing="2">
              <Button type="submit" variant="solid">
                Crear cuenta
              </Button>
            </Stack>
          </Stack>
          <HStack justify="center" spacing="2">
            <Text fontSize="sm" color="white">
              Ya estás registrado?
            </Text>
            <Button as={Link} to="/login" variant="link" size="sm">
              Log in
            </Button>
          </HStack>
        </Stack>
      </form>
    </Container>
  );
};

export default Register;
