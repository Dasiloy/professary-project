import {
  Box,
  Image,
  Text,
  Heading,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from './SingleBlog.module.css';

export default function SingleBlog({
  id,
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
      <div className={styles.heroflex}>
        <Box className={styles.heroChild1}>
          <Image
            src={blogUrl}
            alt='blog'
            size='full'
            mt='2'
            mb='4'
            maxW='full'
            className={styles.blogImg}
          />
        </Box>
        <Box className={styles.heroChild2}>
          <Heading
            as='h5'
            color='primary'
            fontSize='xl'
            mt='4'>
            {category}
          </Heading>
          <Heading
            as='h4'
            color='grayBlack'
            fontSize='3xl'
            my='4'>
            {`${title.substr(0, 30)}...`}
          </Heading>
          <Box my='4' display='flex' alignItems='center'>
            <Image
              src={imgUrl}
              alt='hero'
              borderRadius='full'
              boxSize='40px'
              className={styles.heroImg}
            />
            <Box ml='3'>
              <Heading
                as='h6'
                fontSize='sm'
                color='grayBlack'>
                {name}
              </Heading>
              <Text fontSize='xs'>{role}</Text>
            </Box>
          </Box>
          <Text color=' lightBodyText' fontSize='sm'>
            {`${body.substr(0, 250)}...`}
          </Text>
          <Link href='/' className={styles.heroLink}>
            <a>
              <Text color='primary' fontSize='sm' mt='3'>
                {'Read more '}
                <ArrowRightIcon h={2} w={4} />
              </Text>
            </a>
          </Link>
        </Box>
      </div>
    </Box>
  );
}
