import QuestionsList from '../features/questions/QuestionsList';

import SectionTitle from '../ui/SectionTitle';
import FormQuestions from '../features/questions/FormQuestions';
import { useUser } from '../features/authentication/useUser';

function Questions() {
  const { isAuthenticated } = useUser();
  return (
    <>
      <SectionTitle content="Вопросы и ответы" />
      {isAuthenticated && <FormQuestions />}
      <QuestionsList />
    </>
  );
}

export default Questions;
