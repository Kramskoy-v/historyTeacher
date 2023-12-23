import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import { getNews } from '../../services/apiNews';
import Spinner from '../../ui/Spinner';
import NewsItem from './newsItem';

const StyledNewsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

function NewsList() {
  const { isLoading, data } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });

  if (isLoading) return <Spinner />;

  const news = data.toSorted((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <StyledNewsList>
      {news.map((item) => (
        <NewsItem key={item.id} {...item} />
      ))}
    </StyledNewsList>
  );
}

export default NewsList;
