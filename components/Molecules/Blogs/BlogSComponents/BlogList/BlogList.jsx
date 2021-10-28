import { Container, Heading } from '@chakra-ui/react';
import { useAppContext } from '../../../../../context/AppContext';
import SingleBlog from '../SingleBlog/SingleBlog';
import styles from './BlogList.module.css';

function BlogList() {
  const { sorted, paginate } = useAppContext();
  if (sorted[paginate]) {
    return (
      <Container maxW='container.xl' mt='2' mx='auto'>
        {sorted[paginate].map(blog => {
          return <SingleBlog {...blog} key={blog.id} />;
        })}
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
