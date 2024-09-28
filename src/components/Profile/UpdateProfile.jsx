import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate('/profile');

  };

  const { loading } = useSelector(state => state.profile);
  return (
    <Container py={'16'} minH={'90vh'}>
      <form action="" onSubmit={submitHandler}>
        <Heading my={'16'} textAlign={['center', 'left']}>
          Update Profile
        </Heading>
        <VStack spacing={'8'}>
          <Input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={'Name'}
            type="text"
            focusBorderColor={'yellow.500'}
          />
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={'Email'}
            type="email"
            focusBorderColor={'yellow.500'}
          />
          <Button
            w={'full'}
            colorScheme="yellow"
            type="submit"
            isLoading={loading}
          >
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
