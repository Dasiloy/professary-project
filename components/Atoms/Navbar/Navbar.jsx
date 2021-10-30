import { useState } from 'react';
import styles from './Navbar.module.css';
import { Links } from '../../../utilis/localData';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
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

const NavLink = ({ children, handleClick, id, linkId }) => (
  <Link
    onClick={handleClick}
    fontWeight='600'
    fontStyle='13px'
    px={2}
    fontSize='sm'
    color={id === linkId ? 'primary' : ''}
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
  const [linkId, setLinkId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLinkId = id => {
    setLinkId(id);
  };

  return (
    <>
      <Box
        minHeight='96px'
        bg={useColorModeValue('lightBodyBg', 'darkBodyBg')}
        maxW='container.xl'
        mx='auto'
        className={styles.nav}>
        <Flex
          minHeight='96px'
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          direction='row-reverse'>
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
            <Box
              fontSize='lg'
              display='flex'
              alignItems='center'>
              <Image
                src='/images/Logo Group.svg'
                alt='Logo'
                maxW='200px'
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <NavLink
                  key={link}
                  linkId={linkId}
                  id={index}
                  handleClick={() => handleLinkId(index)}>
                  {link}
                </NavLink>
              ))}
              <Button
                variant='primaryOutline'
                size='sm'
                fontWeight='600'
                fontStyle='normal'
                width='120px'
                height='40px'>
                Log in
              </Button>
              <Button
                variant='primary'
                width='120px'
                height='40px'
                fontWeight='600'
                fontStyle='normal'
                size='sm'
                rightIcon={<ArrowForwardIcon />}>
                Sign up
              </Button>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                <NavLink
                  key={link}
                  linkId={linkId}
                  id={index}>
                  {link}
                </NavLink>
              ))}
              <Box>
                <NavLink linkId={linkId} id={uuid()}>
                  Sign up
                </NavLink>
              </Box>
              <Box>
                <NavLink linkId={linkId} id={uuid()}>
                  Log in
                </NavLink>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
