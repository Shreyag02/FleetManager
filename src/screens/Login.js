import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  Button,
  Stack,
  Input,
  Icon,
  Radio,
  Image,
} from 'native-base';
import cars from '../../assets/car.png';
// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

const Login = ({navigation}) => {
  const [show, setShow] = useState(false);

  return (
    <NativeBaseProvider>
      <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        px={4}
        flex={1}>
        {/* <ToggleDarkMode /> */}

        <VStack space={5} alignItems="center">
          <Image source={cars} alt="image" height="200" width="200" />
          <Heading size="lg">Welcome Back! Fleeter</Heading>

          <Stack space={4} w="100%" alignItems="center">
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              type="email"
              placeholder="youremail@abc.com"
            />
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              type={show ? 'text' : 'password'}
              placeholder="Password"
            />
            <Text onPress={() => setShow(!show)}>
              {!show ? 'show' : 'hide'} Password
            </Text>
            <Radio.Group
              name="exampleGroup"
              defaultValue="1"
              accessibilityLabel="pick a size">
              <HStack
                alignItems={{
                  base: 'flex-start',
                  md: 'center',
                }}
                space={4}
                w="75%"
                maxW="300px">
                <Radio value="1" size="sm" my={1}>
                  Manager
                </Radio>
                <Radio value="2" size="sm" my={1}>
                  Driver
                </Radio>
              </HStack>
            </Radio.Group>

            <Button>Login</Button>
          </Stack>
          <HStack>
            <Text>New to fleeter? </Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text bold underline>
                Signup here
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default Login;

const styles = StyleSheet.create({});
