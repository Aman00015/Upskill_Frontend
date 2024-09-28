import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Card,
  CardBody,
  CardFooter,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import instructor from '../../assets/images/instructor-2x-v3.jpg';
import { StarIcon } from '@chakra-ui/icons';
import React from 'react';
import './home.css';
import vg from '../../assets/images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdacity } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro_k06RXPGM.mp4';
import { AiOutlineRise } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const TestimonialBox = ({ author, role, text, rating }) => {
  return (
    <Box p="4" boxShadow={'lg'} borderRadius="md" maxW="400px" mx="auto" mt="4">
      <Text fontSize="lg" fontWeight="bold" mb="2">
        {author}
      </Text>
      <Text fontSize="sm" mb="2">
        {role}
      </Text>
      <Text fontSize="md">{text}</Text>
      {/* Star rating */}
      {Array.from({ length: rating }).map((_, index) => (
        <StarIcon key={index} color="yellow.400" />
      ))}
    </Box>
  );
};

const Home = () => {
  return (
    <section className="home">
      <div className="container">
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
            Up
            <Text as="span" color="#ECC94B">
              skill
            </Text>
          </Text>
          <AiOutlineRise color="#ECC94B" size={'40px'} />
        </Box>

        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'8'}
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'xl'} />
            <Text
              textAlign={['center', 'left']}
              children="Find Valuable Content at Reasonable Price"
              fontFamily={'cursive'}
              fontSize={'lg'}
            />
            <Link to={'/courses'}>
              <Button size={'lg'} colorScheme={'yellow'}>
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-gfx"
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
          />
        </Stack>
      </div>
      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading
          children="We collaborate with 300+ leading universities and companies"
          fontFamily={'body'}
          textAlign={'center'}
          color={'yellow.400'}
        />
        <HStack
          className="brandsbanner"
          justifyContent={'space-evenly'}
          mt={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdacity />
          <SiCoursera />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          src={introVideo}
          autoPlay={false}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
      <VStack height={'auto'}>
        <Heading
          children="FAQs"
          fontFamily={'body'}
          textAlign={'center'}
          color={'yellow.400'}
        />
        <Accordion defaultIndex={[0]} allowMultiple w={'70%'} m={'20px'}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How do I enroll in courses on the LMS platform?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Depending on the LMS, there may be different methods for enrolling
              in courses. Usually, there will be a course catalog or enrollment
              page where you can browse available courses and enroll in them
              with a click or by following specific instructions provided by
              your instructor or administrator.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How can I access course materials and resources
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Once enrolled in a course, you can usually access course materials
              such as lectures, readings, videos, and assignments within the
              course's interface. Look for tabs or links labeled "Course
              Content," "Materials," or similar.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How do I submit assignments or assessments on the LMS platform
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Your instructor will provide instructions on how to submit
              assignments or assessments within each course. Typically, there
              will be a designated area where you can upload files or enter text
              to submit your work.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Can I communicate with my instructor and classmates through
                  the LMS platform
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Many LMS platforms offer communication tools such as discussion
              forums, messaging systems, and chat features that allow you to
              interact with your instructor and classmates. Check the course
              homepage or navigation menu for communication options.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How do I track my progress and grades on the LMS platform?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The LMS platform usually provides a dashboard or gradebook where
              you can view your grades, feedback on assignments, and overall
              progress in each course. Look for tabs or links labeled "Grades,"
              "Progress," or similar.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Can I access the LMS platform from my mobile device?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Many LMS platforms offer mobile apps or mobile-friendly websites
              that allow you to access course materials, participate in
              discussions, and view grades from your smartphone or tablet. Check
              the app store or your institution's website for mobile access
              options.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Heading
          children="Testimony"
          fontFamily={'body'}
          textAlign={'center'}
          color={'yellow.400'}
        />
        <HStack spacing={'4'}>
          {' '}
          <TestimonialBox
            author="John Doe"
            role="CEO, Company XYZ"
            text="Upskill is a game-changer in education. Its seamless interface and robust features empower educators to deliver dynamic content and engage students like never before. With Upskill, we're not just teaching—we're inspiring lifelong learning."
            rating={4} // Add the rating prop
          />
          <TestimonialBox
            author="Jane Smith"
            role="CTO, Tech Co."
            text="Upskill isn't just an LMS—it's a catalyst for innovation in education. Its user-friendly design and powerful analytics have revolutionized the way we teach and learn. With Upskill, we're shaping the future of education.."
            rating={4} // Add the rating prop
          />
          <TestimonialBox
            author="Akhilesh Merchant"
            role="CTO, Tech Co."
            text="Upskill empowers educators to unleash their full potential. Its intuitive platform streamlines course management and enhances student engagement. With Upskill, educators can focus on what truly matters—inspiring the next generation.."
            rating={4} // Add the rating prop
          />
        </HStack>
        <HStack>
          <TestimonialBox
            author="Aman Gupta"
            role="CTO, Tech Co."
            text="Upskill opens doors to opportunity for learners worldwide. Its accessibility features and personalized learning paths ensure that every student can thrive. With Upskill, education knows no bounds."
            rating={4} // Add the rating prop
          />
          <TestimonialBox
            author="Will Smith"
            role="CTO, Tech Co."
            text="Upskill is a game-changer in education. Its seamless interface and robust features empower educators to deliver dynamic content and engage students like never before. With Upskill, we're not just teaching—we're inspiring lifelong learning."
            rating={4} // Add the rating prop
          />
          <TestimonialBox
            author="Tim Cook"
            role="CTO, Tech Co."
            text="Upskill is more than just a platform—it's a revolution in education. Its innovative tools and comprehensive resources empower both educators and learners to excel. With Upskill, we're building a brighter future through knowledge and collaboration."
            rating={4} // Add the rating prop
          />
        </HStack>
      </VStack>
      <VStack h={'100%'} w={'100%'}>
        <Heading
          m={'30px'}
          children="Become A Instructor"
          fontFamily={'body'}
          textAlign={'center'}
          color={'yellow.400'}
        />

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant={'filled'}
          w={'70%'}
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src={instructor}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md" m={'10px'}>
                Become an instructor
              </Heading>

              <Text py="2" m={'10px'} letterSpacing={'2px'}>
                Instructors from around the world teach millions of learners on
                Upskill.We provide the tools and skills to teach what you love.
                Unlock Your Teaching Potential with Upskill: Empowering
                Instructors, Inspiring Learners. Upskill: Where Passion Meets
                Pedagogy - Teach, Inspire, Transform.
              </Text>
            </CardBody>

            <CardFooter>
              <Link to={'/becomeainstructor'}>
                <Button variant="solid" colorScheme="purple" m={'10px'}>
                  Start Teaching
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
      </VStack>

      <VStack h={'auto'} m={'20px'} mt={'50px'}>
        <Tabs variant="soft-rounded" colorScheme="yellow" m={'20px'}>
          <TabList>
            <Tab>Popular AI Content</Tab>
            <Tab>Popular Programs</Tab>
            <Tab>Popular Skills</Tab>
            <Tab>Popular Career Resources</Tab>
          </TabList>
          <TabPanels>
            <TabPanel m={'10px'} padding={'10px'}>
              <p>
                {' '}
                <Link>AI For Business Specialization (Penn)</Link>
              </p>
              <p>
                {' '}
                <Link>AI For Everyone Course (DLAI)</Link>
              </p>
              <p>
                {' '}
                <Link>AI Product Management Specialization (Duke)</Link>
              </p>
              <p>
                {' '}
                <Link>Deep Learning Specialization (DLAI)</Link>
              </p>
              <p>
                {' '}
                <Link>Generative AI for Everyone Course (DLAI)</Link>
              </p>
              <p>
                {' '}
                <Link>Generative AI Fundamentals Specialization (IBM)</Link>
              </p>
              <p>
                {' '}
                <Link>Generative AI with LLMs Course (DLAI & AWS)</Link>
              </p>
              <p>
                {' '}
                <Link>IBM Applied AI Professional Certificate</Link>
              </p>
              <p>
                {' '}
                <Link>Machine Learning Specialization (Stanford)</Link>
              </p>
              <p>
                {' '}
                <Link>NLP Specialization (DLAI)</Link>
              </p>
              <p>
                {' '}
                <Link>NLP Specialization (DLAI)</Link>
              </p>
              <p>
                {' '}
                <Link>Prompt Engineering for ChatGPT Course (Vanderbilt)</Link>
              </p>
              <p>
                {' '}
                <Link>Supervised Machine Learning Course (DLAI)</Link>
              </p>
            </TabPanel>
            <TabPanel m={'10px'} padding={'10px'}>
              <p>
                {' '}
                <Link>Python for Everybody Specialization</Link>{' '}
              </p>
              <p>
                {' '}
                <Link>
                  Google Cybersecurity Professional Certificate UI / UX Design
                  Specialization
                </Link>{' '}
              </p>
              <p>
                {' '}
                <Link> Google Data Analytics Professional Certificate</Link>
              </p>
              <p>
                <Link>
                  {' '}
                  Google Digital Marketing & E-commerce Professional Certificate
                </Link>{' '}
              </p>
              <p>
                {' '}
                <Link>
                  {' '}
                  Google IT Automation with Python Professional Certificate
                </Link>
              </p>
              <p>
                {' '}
                <Link> Google IT Support Professional Certificate</Link>
              </p>
              <p>
                {' '}
                <Link> Google Project Management Professional Certificate</Link>
              </p>
              <p>
                {' '}
                <Link> Google SEO Fundamentals</Link>
              </p>
              <p>
                {' '}
                <Link> Google UX Design Professional Certificate</Link>
              </p>
              <p>
                {' '}
                <Link>
                  {' '}
                  Intuit Academy Bookkeeping Professional Certificate
                </Link>
              </p>
            </TabPanel>

            <TabPanel m={'10px'} padding={'10px'}>
              <p>
                <Link>Cybersecurity Courses</Link>
              </p>
              <p>
                <Link>Data Analysis Courses</Link>
              </p>
              <p>
                <Link>Data Science Courses</Link>
              </p>
              <p>
                <Link>Digital Marketing Courses</Link>
              </p>
              <p>
                <Link>Excel Courses</Link>
              </p>
              <p>
                <Link>Google Courses</Link>
              </p>
              <p>
                <Link>Power BI Courses</Link>
              </p>
              <p>
                <Link>Product Management Courses</Link>
              </p>
              <p>
                <Link>Project Management Courses</Link>
              </p>
              <p>
                <Link>Python Courses</Link>
              </p>
              <p>
                <Link>SQL Courses</Link>
              </p>
            </TabPanel>
            <TabPanel m={'10px'} padding={'10px'}>
              <p>
                <Link> Become a Data Analyst</Link>
              </p>
              <p>
                <Link>CAPM Certification Requirements</Link>
              </p>
              <p>
                <Link>Cybersecurity Career Paths</Link>
              </p>
              <p>
                <Link>Data Analyst Career Guide</Link>
              </p>
              <p>
                <Link>Essential IT Certifications</Link>
              </p>
              <p>
                <Link>High-Income Skills Worth Learning</Link>
              </p>
              <p>
                <Link>How to Get a PMP Certification</Link>
              </p>
              <p>
                <Link>Popular Cybersecurity Certifications</Link>
              </p>
              <p>
                <Link>Popular Data Analytics Certifications</Link>
              </p>
              <p>
                <Link>Popular PMI Certifications</Link>
              </p>
              <p>
                <Link>Popular SQL Certifications</Link>
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </section>
  );
};

export default Home;
