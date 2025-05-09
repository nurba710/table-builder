import { useAppSelector } from 'store/hooks/hooks';
import { CreateTableButton, SortableTableList } from 'components';

function App() {
  const tables = useAppSelector((state) => state.table.tables);

  return (
    <div className="w-full py-5 px-[48px]">
      <CreateTableButton />
      <SortableTableList tables={tables} />
    </div>
  );
}

export default App;
