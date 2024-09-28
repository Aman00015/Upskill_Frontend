import {
    Box,
    Button,
    Container,
    FormLabel,
    Input,
    Text,
    VStack,
    Flex, // Add Flex component
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { AiOutlineRise } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
  import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/user';
  
  const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
const dispatch=useDispatch()
const submitHandler=(e)=>{
e.preventDefault()
dispatch(login(email,password))
}

    return (
      <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'10'}>
          <Box
            direction={['column', 'row']}
            height={'10%'}
            justifyContent={['center', 'center']}
            alignItems={'center'}
            spacing={['16', '56']}
            fontSize={'2xl'}
            display="flex"
          >
            <Text
              fontSize={'3xl'}
              fontStyle={'italic'}
              fontWeight={'bold'}
              marginRight="0"
            >
              Welcome to Up
              <Text as="span" color="#ECC94B">
                skill
              </Text>
            </Text>
  
            <AiOutlineRise color="#ECC94B" size={'40px'} />
          </Box>
  
          <form onSubmit={submitHandler}  action="" style={{ width: '100%' }}>
            <Box>
              <FormLabel htmlFor={'email'}>Email Address</FormLabel>
              <Input
                required
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'abc@gmail.com'}
                type="email"
                focusBorderColor={'yellow.500'}
              />
            </Box>
            <Box my={'2'}>
              <FormLabel htmlFor={'password'}>Password </FormLabel>
              <Input
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={'Enter Your Password'}
                type="password"
                focusBorderColor={'yellow.500'}
              />
            </Box>
            <Box>
              <Link to={'/forgetpassword'}>
                <Button fontSize={'sm'} variant={'link'} colorScheme={'yellow'}>
                  Forget Password ?
                </Button>
              </Link>
            </Box>
            <Flex justify="space-between" align="center" w="100%">
              <Button my={'4'} colorScheme="yellow" type="submit">
                Login
              </Button>
              <Box my={'4'}>
                New User ?{' '}
                <Link to={'/register'}>
                  <Button colorScheme="yellow" variant={'outline'}>
                    Sign Up
                  </Button>
                </Link>
              </Box>
            </Flex>
          </form>
        </VStack>
      </Container>
    );
  };
  
  export default Login;
  