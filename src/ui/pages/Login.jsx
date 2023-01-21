import {
  Button,
  Checkbox,
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

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuthUseCases();
  
  return (
    <Container
      maxW="md"
      py={{
        base: '6',
        md: '8',
      }}
    >
      <form onSubmit={handleSubmit(login)}>
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
                Accede a tu cuenta
              </Heading>
              <Text color="gray.200">Empieza a hacer realidad tus sueños</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
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
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="primary" size="sm">
                Olvidé mi contraseña
              </Button>
            </HStack>
            <Stack spacing="2">
              <Button type="submit" variant="solid">
                Entrar
              </Button>
            </Stack>
          </Stack>
          <HStack justify="center" spacing="2">
            <Text fontSize="sm" color="white">
              ¿No tienes una cuenta?
            </Text>
            <Button as={Link} to="/register" variant="link" size="sm">
              Regístrate
            </Button>
          </HStack>
        </Stack>
      </form>
    </Container>
  );
};

export default Login;
