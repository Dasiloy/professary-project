import styles from './Footer.module.css';
import {
  Box,
  chakra,
  Container,
  Link,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        color: useColorModeValue(
          'lightLinkHover',
          'darkLinkHover'
        ),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight='bold' fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const ListItem = ({ children, href }) => {
  return (
    <Link
      href={href}
      fontSize='sm'
      isExternal
      _hover={{
        color: useColorModeValue(
          'lightLinkHover',
          'darkLinkHover'
        ),
        textDecoration: 'none',
      }}>
      {children}
    </Link>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('lightBodyBg', 'blackBodyBg')}
      color={useColorModeValue(
        'lightFooterText',
        'DarkFooterText'
      )}>
      <Container
        as={Stack}
        maxW='container.xl'
        mt={40}
        py={10}
        mx='auto'>
        <SimpleGrid
          templateColumns={{
            sm: '1fr 1fr',
            md: '2fr 1fr 1fr 1fr',
          }}
          spacing={8}>
          <Stack
            justifyContent='space-between'
            maxH='eighty'>
            <Box>
              <Image
                src='/images/Logo Group.svg'
                alt='Logo'
                maxW='200px'
              />
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Professary</ListHeader>
            <ListItem href={'#'}>Home</ListItem>
            <ListItem href={'#'}>About</ListItem>
            <ListItem href={'#'}>Features</ListItem>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <ListItem href={'#'}>FAQ</ListItem>
            <ListItem href={'#'}>Customer</ListItem>
            <ListItem href={'#'}>Zendesk</ListItem>
            <ListItem href={'#'}>Resources</ListItem>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Developers</ListHeader>
            <ListItem href={'#'}>Docuentation</ListItem>
            <ListItem href={'#'}>APi</ListItem>
            <ListItem href={'#'}>Career</ListItem>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
