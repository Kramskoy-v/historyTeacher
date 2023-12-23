import { useUser } from '../features/authentication/useUser';
import FormNews from '../features/news/FormNews';
import NewsList from '../features/news/newsList';
import SectionTitle from '../ui/SectionTitle';

function News() {
  const { isAuthenticated } = useUser();

  return (
    <>
      <SectionTitle content="Информация и новости" />
      {isAuthenticated && <FormNews />}
      <NewsList />
    </>
  );
}

export default News;
