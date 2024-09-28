import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <VStack spacing={8} align="center">
        <Heading size="xl" textAlign="center" color="red.500">
          Payment Failed
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Oops! Something went wrong during the payment process.
        </Text>
        <Box
          bg={'red.500'}
          p={4}
          borderRadius={'md'}
          textAlign={'center'}
          color={'white'}
        >
         
        <Link to="/subscribe">
          <Button variant={'ghost'}>Try Again</Button>
        </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
