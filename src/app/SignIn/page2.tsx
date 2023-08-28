"use client"

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    HStack,
    Icon,
  } from '@chakra-ui/react';
  import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

  import { signIn, signOut, useSession } from 'next-auth/react';

  
  export default function SignInPage() {
    const {data : session} = useSession()
    console.log(session)

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool{' '}
              <Text as={'span'} color={'blue.400'}>
                features
              </Text>{' '}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.400'}>Forgot password?</Text>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign in
                </Button>
  
                <Text mt={4} mb={2} align="center" fontWeight="semibold">
                  Or sign in with
                </Text>
  
                <HStack spacing={4}>
                  <Button
                    leftIcon={<Icon as={FaGoogle} boxSize={4} />}
                    colorScheme="red"
                    variant="outline"
                    onClick={()=> signIn('google')}
                    w={["140px", "180px"]}
                  >
                    Google
                  </Button>
                  <Button
                    leftIcon={<Icon as={FaFacebook} boxSize={4} />}
                    colorScheme="blue"
                    variant="outline"
                    w={["140px", "180px"]}
                  >
                    Facebook
                  </Button>
                  <Button
                    leftIcon={<Icon as={FaGithub} boxSize={4} />}
                    colorScheme="gray"
                    variant="outline"
                    w={["140px", "180px"]}
                  >
                    GitHub
                  </Button>
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  