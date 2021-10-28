import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from './SingleBlog.module.css';

export default function SingleBlog({
  id,
  post_date,
  category,
  blogUrl,
  title,
  body,
  author: { name, role, imgUrl },
}) {
  return (
    <Box
      color='black'
      px='3'
      py='5'
      maxW='container.xl'
      mx='auto'>
      <Heading as='h5' color='primary' fontSize='xl' my='3'>
        {category}
      </Heading>
      <Box>
        <Box
          my='3'
          display={{ base: 'block', md: 'flex' }}
          alignItems={'start'}
          justifyContent={'space-between'}>
          <Heading
            as='h4'
            color='grayBlack'
            fontSize='3xl'
            className={styles.content1}>
            {`${title.substr(0, 60)}...`}
          </Heading>
          <Text
            fontSize='xs'
            color='grayAuthor'
            mb='1'
            mt='3'
            display={{ md: 'none' }}>
            {post_date}
          </Text>
          <Box
            my='4'
            display='flex'
            alignItems='start'
            className={styles.author}>
            <Image
              src={imgUrl}
              alt='hero'
              borderRadius='full'
              boxSize='55px'
            />
            <Box ml='3'>
              <Text
                fontSize='xs'
                color='grayAuthor'
                mb='1'
                display={{ base: 'none', md: 'block' }}>
                {post_date}
              </Text>
              <Heading
                as='h6'
                mb='1'
                fontSize='sm'
                color='grayBlack'>
                {name}
              </Heading>
              <Text fontSize='xs'>{role}</Text>
            </Box>
          </Box>
        </Box>
        <Flex
          display={{ base: 'block', md: 'flex' }}
          direction='row-reverse'
          alignItems={'start'}
          justifyContent={'space-between'}>
          <Box className={styles.author1}>
            <Image
              src={blogUrl}
              alt='blog'
              mt='2'
              mb='4'
              maxW='full'
              className={styles.blogImg}
            />
          </Box>
          <Box className={styles.content}>
            <Text color=' lightBodyText' fontSize='sm'>
              {`${body.substr(0, 250)}...`}
            </Text>
            <Link href='/'>
              <a>
                <Text color='primary' fontSize='sm' mt='3'>
                  {'Read more '}
                  <ArrowRightIcon h={2} w={4} />
                </Text>
              </a>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
