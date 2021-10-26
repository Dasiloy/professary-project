import Layout from '../../components/Molecules/Layout';
import PageHead from '../../components/Atoms/Shared/PageHead';
import BlogsFullPage from '../../components/Molecules/Blogs';

export default function Blogs() {
  return (
    <Layout>
      <PageHead title='Professary | Blogs' />
      <BlogsFullPage />
    </Layout>
  );
}
