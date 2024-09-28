import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { fileUploadCss } from '../Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { becomeAInstructor } from '../../redux/actions/other';
import toast from 'react-hot-toast';

const BecomeAInstructor = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [pdf, setPdf] = useState('');
  const [pdfPrev, setPdfPrev] = useState('');
  const [pdfName, setPdfName] = useState('');

  const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
  };
  
  const changeFileHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPdfPrev(reader.result);
      setPdf(file);
      setPdfName(file.name);
    };
  };

  const dispatch = useDispatch();
  const submitHandler = async (e,name,email,course) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('course', course); 
    formData.append('file', pdf); // Use the pdf state directly
     dispatch(becomeAInstructor(formData));
  
    // try {
      // Dispatch action to become an instructor with the form data
  
      // Clear form fields after successful submission if needed
      // setName('');
      // setEmail('');
      // setPdf('');
      // setPdfPrev('');
      // setPdfName('');
      // setCourse('');
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   // Handle error if needed
    // }
  };
  const { loading, message, error } = useSelector(state => state.other);

 
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
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'8'}>
        <Heading color="purple.600">Become A Instructor</Heading>
        <form
          action=""
          style={{ width: '100%' }}
          onSubmit={e => submitHandler(e,name,email,course)}
        >
          <Box>
            <FormLabel htmlFor={'name'}> Instructor Name</FormLabel>
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={`Instructor's Name Here...`}
              type="text"
              focusBorderColor={'purple.500'}
            />
          </Box>
          <Box>
            <FormLabel htmlFor={'email'}>Instructor Email Address</FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={'abc@gmail.com'}
              type="email"
              focusBorderColor={'purple.500'}
            />
          </Box>
          <Box>
            <FormLabel htmlFor={'course'}>Course</FormLabel>
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder={
                'Describe About Your Self,Your Work Experience,Your Degree.... In 5-10 Lines '
              }
              focusBorderColor={'purple.500'}
            />
          </Box>
            <Box>
            <FormLabel htmlFor={'chooseAvatar'}>Upload CV / Resume </FormLabel>
            <Input
              accept="image/*,.pdf"
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor={'purple.500'}
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                  color: 'purple',
                },
              }}
              
             onChange={changeFileHandler}
            />
            {pdfName && (
              <Box mt={2}>
                <strong>File Preview:</strong> {pdfName}
              </Box>
            )}
          </Box>

          <Button
            my={'4'}
            colorScheme="purple"
            type="submit"
            isLoading={loading}
          >
            Send Message
          </Button>
        </form>
      </VStack>
    </Container>
  );
};

export default BecomeAInstructor;
