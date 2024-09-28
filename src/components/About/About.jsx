import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineRise } from 'react-icons/ai';
import Team from '../../assets/images/Team.jpeg';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro_k06RXPGM.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from '../../assets/docs/termsAndConditions'
const OurTeam = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar boxSize={['40', '48']} src={Team} />
        <Text children="Upskill Team" opacity={'0.7'} />
      </VStack>
      <VStack>
        <Box
          direction={['column', 'row']}
          height={'10%'}
          justifyContent={['center', 'center']}
          alignItems={'center'}
          //   spacing={['16', '56']}
          fontSize={'2xl'}
          display="flex"
        >
          <Text fontSize={'3xl'} fontStyle={'italic'} fontWeight={'bold'}>
            Up
            <Text as="span" color="#ECC94B">
              skill
            </Text>
          </Text>
          <AiOutlineRise color="#ECC94B" size={'40px'} />
        </Box>
        <Text fontSize={'xl'} fontStyle={'italic'} fontWeight={'bold'} m={'2'}>
          A Learning Platform Revolutionizing Education:
        </Text>
        <Text
          fontSize={'lg'}
          fontStyle={'italic'}
          m={'2'}
          marginRight="0"
          textAlign={['center', 'left']}
        >
          Welcome to our innovative learning management platform, where
          education meets technology to create a transformative and engaging
          learning experience. At Upskill, we are dedicated to reshaping the
          future of education by providing a comprehensive and user-friendly
          solution for both learners and educators.
        </Text>
      </VStack>
    </Stack>
  );
};
const VideoPlayer = () => {
  return (
    <Box mt={'4'}>
      <video
        src={introVideo}
        autoPlay={false}
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
      ></video>
    </Box>
  );
};
const TandC = ({ termsAndConditions }) => (
  <Box>
    <Heading size={'md'} textAlign={['center', 'left']}>
      Terms And Condtions
    </Heading>
    <Box h={'sm'} p={'4'} overflow={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {termsAndConditions}
      </Text>
      <Heading my={'4'} size={'xs'} >Refund Only Applicable For Cancellation Within 7 Days</Heading>
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} p={'16'} boxShadow={'lg'}>
      <Heading textAlign={['center', 'left']}>About Us</Heading>
      <OurTeam />
      <Text fontSize={'xl'} fontStyle={'italic'} fontWeight={'bold'} m={'2'}>
        A Learning Platform Redefined:
      </Text>
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Text
          fontSize={'lg'}
          fontStyle={'italic'}
          m={'2'}
          textAlign={['center', 'left']}
        >
          Our mission is to empower learners of all ages and backgrounds with
          the tools they need to succeed in an ever-evolving world. UpSkill is
          not just a learning management system; it's a dynamic ecosystem
          designed to foster collaboration, inspire creativity, and cultivate a
          passion for lifelong learning.
        </Text>
      </Stack>
      <VStack>
        <Link to={'/subscribe'}>
          <Button variant={'outline'} colorScheme="yellow" m={'4'}>
            Explore Our Plans, Starting at Just ₹‎499 Per Month!
          </Button>
        </Link>
      </VStack>
      <VideoPlayer />
      <TandC termsAndConditions={termsAndConditions} />

      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading size={'xs'} fontFamily={'sans-serif'}>
          Payment is Secured By Razorpay{' '}
        </Heading>
      </HStack>
    </Container>
  );
};

export default About;
