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
  const {hero} = useAppContext()
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
    <Container className={styles.BlogHero} maxW='full' mb={4}>
      <Center
        color='white'
        maxW='container.xl'
        bg='transparent'
        mx='auto'>
        <Heading
          as='h1'
          size='4xl'
          fontWeight='bold'
          my='16'>
          {firstHeading}
        </Heading>
      </Center>
      <Box
        bg='lightHero'
        color='black'
        boxShadow='lg'
        boxSizing='border-box'
        px='3'
        py='2'
        maxW='container.xl'
        borderRadius='lg'
        mx='auto'>
        <div className={styles.heroflex}>
          <Box className={styles.heroChild1}>
            <Image
              src={heroImg}
              alt='hero'
              size='full'
              mt='2'
              mb='4'
              maxW='full'
              className={styles.heroImg}
            />
          </Box>
          <Box className={styles.heroChild2}>
            <Heading
              as='h5'
              color='primary'
              fontSize='xl'
              mt='4'>
              {secondHeading}
            </Heading>
            <Heading
              as='h3'
              color='grayBlack'
              fontSize='3bxl'
              my='4'>
              {thirdHeading}
            </Heading>
            <Box my='4' display='flex' alignItems='center'>
              <Image
                src='/images/hero-img.jpg'
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
                  {imgHeading}
                </Heading>
                <Text fontSize='xs'>{imgText}</Text>
              </Box>
            </Box>
            <Text color=' lightBodyText' fontSize='sm'>
              {body}
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
        </div>
      </Box>
    </Container>
  );
}
