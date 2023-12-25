import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

import QuestionItem from './QuestionItem';
import Spinner from './../../ui/Spinner';
import { getQuestion } from '../../services/apiQuestions';

const StyledQuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

function QuestionsList() {
  const [curOpen, setCurOpen] = useState(0);

  const { data: questions = [], isLoading } = useQuery({
    queryKey: ['questions'],
    queryFn: getQuestion,
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledQuestionsList>
      {questions.map((question, num) => (
        <QuestionItem
          key={question.id}
          num={num}
          curOpen={curOpen}
          onOpen={setCurOpen}
          {...question}
        />
      ))}
    </StyledQuestionsList>
  );
}

export default QuestionsList;
