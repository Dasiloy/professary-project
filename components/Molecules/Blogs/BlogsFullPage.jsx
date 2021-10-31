import BlogHero from './BlogSComponents/BlogHero/BlogHero';
import BlogList from './BlogSComponents/BlogList/BlogList';
import FilterForm from './BlogSComponents/BlogList/FilterForm/FilterForm';
import FilterButtons from './BlogSComponents/BlogList/FilterButtons/FilterButtons';
import styles from './BlogFullPage.module.css'
import { Box } from '@chakra-ui/react';

export default function BlogsFullPage() {
  return (
    <Box  minW='full'>
      <BlogHero />
      <Box
        className={styles.filtered}
        mx='auto'
        maxW='container.xl'>
        <FilterForm />
        <FilterButtons />
      </Box>
      <BlogList />
    </Box>
  );
}
