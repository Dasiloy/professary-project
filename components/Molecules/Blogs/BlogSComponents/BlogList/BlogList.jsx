import {
  Container,
  Heading,
  Button,
  Box,
  Center,
  HStack,
} from '@chakra-ui/react';
import { useAppContext } from '../../../../../context/AppContext';
import SingleBlog from '../SingleBlog/SingleBlog';
import PaginateButtons from './PaginateButtons/PaginateButtons';
import styles from './BlogList.module.css';

function BlogList() {
  const { sorted, paginate, Pagination } = useAppContext();
  if (sorted[paginate]) {
    return (
        <Container maxW='container.xl' mt={6.375} mx='auto'>
          
          {sorted[paginate].map(blog => {
            return <SingleBlog {...blog} key={blog.id} />;
          })}
          { <Center my='6'>
          <PaginateButtons />
        </Center> }
        </Container>
    );
  } else {
    return (
      <Container mt='2' maxW='container.xl' mx='auto'>
        <Heading
          className={styles.error}
          as='h4'
          color='primary'>
          unfortunately, your search does not matcha any
          query...
        </Heading>
      </Container>
    );
  }
}

export default BlogList;
