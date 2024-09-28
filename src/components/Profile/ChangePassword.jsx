import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { changePassword } from '../../redux/actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
  };

  const { message, error,loading } = useSelector(state => state.profile);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);
  return (
    <Container py={'16'} minH={'90vh'}>
      <form action="" onSubmit={submitHandler}>
        <Heading my={'16'} textAlign={['center', 'left']}>
          Change Password
        </Heading>
        <VStack spacing={'8'}>
          <Input
            required
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder={'Enter Your Old Password'}
            type="password"
            focusBorderColor={'yellow.500'}
          />
          <Input
            required
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder={'Enter Your New Password'}
            type="password"
            focusBorderColor={'yellow.500'}
          />
          <Button w={'full'} colorScheme="yellow" type="submit" isLoading={loading}>
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
