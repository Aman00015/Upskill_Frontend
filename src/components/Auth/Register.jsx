import {
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  Text,
  VStack,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineRise } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/actions/user';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'Transparent',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('name', name);
    myForm.append('email', email);
    myForm.append('password', password);
    myForm.append('file', image);
    dispatch(register(myForm));
  };
  return (
    <Container h={'130vh'}>
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
            SignUp With Up
            <Text as="span" color="#ECC94B">
              skill
            </Text>
          </Text>

          <AiOutlineRise color="#ECC94B" size={'40px'} />
        </Box>

        <form onSubmit={submitHandler} action="" style={{ width: '100%' }}>
          <Box display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>
          <Box>
            <FormLabel htmlFor={'name'}>Name</FormLabel>
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={'Enter Your Name'}
              type="text"
              focusBorderColor={'yellow.500'}
            />
          </Box>

          <Box>
            <FormLabel htmlFor={'email'}>Email Address</FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
              placeholder={'Enter Your Password'}
              type="password"
              focusBorderColor={'yellow.500'}
            />
          </Box>

          <Box>
            <FormLabel htmlFor={'chooseAvatar'}>Choose Avatar</FormLabel>
            <Input
              accept={'image/*'}
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor={'yellow.500'}
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Flex justify="space-between" align="center" w="100%">
            <Button my={'4'} colorScheme="yellow" type="submit">
              Sign Up{' '}
            </Button>
            <Box my={'4'}>
              Already A User ?{' '}
              <Link to={'/login'}>
                <Button colorScheme="yellow" variant={'outline'}>
                  Login
                </Button>
              </Link>
            </Box>
          </Flex>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
