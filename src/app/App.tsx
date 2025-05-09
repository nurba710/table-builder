import { CreateTableButton } from 'components';
import { useAppSelector } from '../store/hooks/hooks';

function App() {
  const tables = useAppSelector((state) => state.table.tables);

  console.log(tables, 'tables');
  return (
    <div className="w-full py-5 px-[48px]">
      <CreateTableButton />
    </div>
  );
}

export default App;
