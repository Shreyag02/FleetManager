import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import cars from '../../assets/car.png';

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
} from 'native-base';

const Signup = ({navigation}) => {
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

          <Heading size="lg">Join our fleet!</Heading>

          <Stack space={4} w="100%" alignItems="center">
            <Input
              w={{
                base: '75%',
                md: '25%',
              }}
              placeholder="Full Name"
            />
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

            <Button>Signup</Button>
          </Stack>
          <HStack>
            <Text>already a fleeter? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text bold underline>
                Login here
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default Signup;

const styles = StyleSheet.create({});
