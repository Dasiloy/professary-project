import Image from 'next/image';
import {
  Container,
  Box,
  Center,
  Text,
  Heading,
} from '@chakra-ui/layout';
import styles from './BlogHero.module.css';
export default function BlogHero() {
  return (
    <Container className={styles.BlogHero} maxW='full'>
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
          Blog
        </Heading>
      </Center>
      <Box
        bg='lightHero'
        color='black'
        boxShadow='lg'
        px='3'
        py='2'
        maxW='container.xl'
        borderRadius='lg'
        mx='auto'>
        <div className={styles.heroflex}>
          <article>
            <Image
              src='/images/hero-img.jpg'
              width={200}
              height={150}
              alt='hero'
            />
          </article>
          <Box>hello</Box>
        </div>
      </Box>
    </Container>
  );
}
