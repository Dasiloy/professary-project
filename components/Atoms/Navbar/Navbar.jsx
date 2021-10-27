import styles from './Navbar.module.css';
import { Links } from '../../../utilis/localData';
import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons';

const NavLink = ({ children }) => (
  <Link
    px={2}
    fontSize='sm'
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue(
        ' ligghtLinkHover',
        ' darkLinkHover'
      ),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('lightBodyBg', 'darkBodyBg')}
        maxW='container.xl'
        mx='auto'
        px='3'>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={
              isOpen ? <CloseIcon /> : <HamburgerIcon />
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            bg='transparent'
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex
            className={styles.navFlex}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Box fontSize='lg'>
              <Text>Logo</Text>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Button
                size='md'
                border='1px'
                variant='outline'
                color={useColorModeValue(
                  ' ligghtLinkHover',
                  ' darkLinkHover'
                )}
                bgColor={useColorModeValue(
                  'lightBodyBg',
                  'darkBodyBg'
                )}>
                Log in
              </Button>
              <Button
                size='md'
                variant='solid'
                rightIcon={<ArrowForwardIcon/>}
                colorScheme='primary'>
                Sign up
              </Button>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
