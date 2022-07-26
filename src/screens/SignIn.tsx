import { VStack, Heading, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn() {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon as={<AntDesign name="mail" />} ml={4} />}
      />
      <Input
        placeholder="Senha"
        mb={8}
        InputLeftElement={<Icon as={<AntDesign name="key" />} ml={4} />}
      />

      <Button title="Entrar" w="full" />
    </VStack>
  );
}
