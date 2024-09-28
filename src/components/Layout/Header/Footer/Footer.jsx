import React from 'react';
import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineRise, AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box minW={'40'} p={'16'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'}>
          <Heading size={'md'} textAlign={'center'}>
            Subscribe For More Updates
          </Heading>
          <HStack>
            <Input
              placeholder="Enter Email..."
              border={'2px solid #50555E'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            ></Input>
            <Button
              colorScheme={'yellow'}
              
              //   variant={"ghost"}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={"20"}/>
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid ']}
          borderRight={['none', '1px solid ']}
        >
          <Box
            direction={['column', 'row']}
            height={'10%'}
            justifyContent={['center', 'center']}
            alignItems={'center'}
            spacing={['16', '56']}
            fontSize={'2xl'}
            display="flex"
            mt={'10px'}
            mb={'10px'}
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
          <Text>All Rights Reserved ©</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textAlign={'center'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a href="https://youtube.com" target="blank">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="https://LinkedIn.com" target="blank">
              LinkedIn{' '}
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="https://github.com" target="blank">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
 //6completed