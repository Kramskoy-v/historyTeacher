import { useUser } from '../features/authentication/useUser';
import FormMethodic from '../features/methodic/FormMethodic';
import MethodicList from '../features/methodic/MethodicList';
import SectionTitle from '../ui/SectionTitle';

function Methodic() {
  const { isAuthenticated } = useUser();
  return (
    <>
      <SectionTitle content="Методические разработки" />
      {isAuthenticated && <FormMethodic />}
      <MethodicList />
    </>
  );
}

export default Methodic;
