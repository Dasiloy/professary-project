import { Image as Img } from '@chakra-ui/image';
import Link from 'next/link';
import { useAppContext } from '../../../../../context/AppContext';
import {
  Container,
  Box,
  Center,
  Image,
  Text,
  Heading,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import styles from './BlogHero.module.css';

export default function BlogHero() {
  const { hero } = useAppContext();
  const {
    firstHeading,
    secondHeading,
    thirdHeading,
    heroImg,
    imgHeading,
    body,
    imgText,
  } = hero;
  return (
    <Container
      className={styles.BlogHero}
      maxW='full'
      mb={[120, 96]}>
      <Box className={styles.svg}>
        <Img
          src='/images/hero.svg'
          size='full'
          minH='full'
          alt='hero'
          className={styles.img}
        />
      </Box>
      <Center
        color='black'
        maxW='container.xl'
        bg='transparent'
        mx='auto'>
        <Heading
          as='h1'
          fontSize='120px'
          fontStyle='normal'
          fontWeight='bold'
          mt={20}
          mb={10}>
          {firstHeading}
        </Heading>
      </Center>
      <Box
        bg='lightHero'
        color='white'
        boxShadow='lg'
        boxSizing='border-box'
        maxW='container.xl'
        borderRadius='lg'
        mx='auto'>
        <Box
          className={styles.heroflex}
          mx='auto'
          maxW='container.xl'>
          <Box>
            <Image
              src={heroImg}
              alt='hero'
              size='full'
              minH='full'
              className={styles.heroChild1}
            />
          </Box>
          <Box className={styles.heroChild2}>
            <Heading
              as='h5'
              fontSize='20px'
              fontStyle='normal'
              fontWeight='semibold'
              color='primary'
              mt='4'>
              {secondHeading}
            </Heading>
            <Heading
              as='h3'
              color='grayBlack'
              fontSize='56px'
              fontStyle='normal'
              fontWeight='bold'
              my='4'>
              {thirdHeading}
            </Heading>
            <Box my='4' display='flex' alignItems='center'>
              <Image
                src='/images/hero-img.jpg'
                alt='hero'
                borderRadius='full'
                boxSize='60px'
                className={styles.heroImg}
              />
              <Box ml='3'>
                <Heading
                  as='h6'
                  fontSize='13px'
                  fontStyle='normal'
                  fontWeight='semibold'
                  color='grayBlack'>
                  {imgHeading}
                </Heading>
                <Text
                  fontSize='13px'
                  fontStyle='normal'
                  fontWeight='medium'>
                  {imgText}
                </Text>
              </Box>
            </Box>
            <Text
              color=' lightBodyText'
              fontSize='xl'
              lineHeight='tall'
              fontStyle='normal'
              fontWeight='normal'>
              {body}
            </Text>
            <Link href='/'>
              <a>
                <Text
                  color='primary'
                  mt='4'
                  mb='6'
                  fontSize='md'
                  fontStyle='normal'
                  fontWeight='semibold'>
                  {'Read more '}
                  <ArrowRightIcon h={2} w={4} />
                </Text>
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
