import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../redux/actions/course';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile';
import {loadUser} from '../../redux/actions/user'
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
        children={title}
      />
      <Text children={description} noOfLines={2} />
      <HStack>
        <Text fontWeight={'bold'} children={'Creator :'} />
        <Text fontWeight={'bold'} children={creator} fontFamily={'body'} />
      </HStack>

      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lecture : ${lectureCount}`}
      />
      <Heading textAlign={'center'} size={'xs'} children={`Views : ${views}`} />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlaylistHandler(id)}
          isLoading={loading}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState();

  const addToPlaylistHandler =async (courseId) => {
   await dispatch(addToPlaylist(courseId))
   dispatch(loadUser())
  };
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Machine Learning',
    'D.S.A',
    'App Development',
    'Data Science',
    'Networking',
    'Game Development',
    'Hardware',
  ];

  const dispatch = useDispatch();
  const { loading, courses, error,message } = useSelector(state => state.course);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }

    dispatch(getAllCourses(category, keyword));
  }, [category, keyword, dispatch, error,message]);

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search A Course...."
        type={'text'}
        focusBorderColor={'yellow.500'}
      />
      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length >0?
          courses.map((item) => (
            <Course
            key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          )):<Heading mt={'4'}>Course Not Found</Heading>}
      </Stack>
    </Container>
  );
};

export default Courses;
