import {
  Button,
  FormControl,
  Box,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import styles from './FilterForm.module.css';
import { useAppContext } from '../../../../../../context/AppContext';

export default function FilterForm() {
  const {
    filterBlogs,
    filter: { searchTerm},
  } = useAppContext();
  return (
    <Box
      className={styles.FormControls}
      bg={useColorModeValue('transparent', 'transparent')}>
      <FormControl id='email' minW='70%'>
        <Input
          onChange={e =>
            filterBlogs('searchTerm', e.target.value)
          }
          value={searchTerm}
          height='56px'
          placeholder='search here...'
          _placeholder={{ color: 'gray.500' }}
          type='text'
        />
      </FormControl>
      <Box minW='25%' ml={4}>
        <Button
          variant='primary'
          midth='full'
          height='56px'
          fontSize='lg'>
          search
        </Button>
      </Box>
    </Box>
  );
}
