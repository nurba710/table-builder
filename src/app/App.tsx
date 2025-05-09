import { CreateTableButton } from 'components';
import { useAppSelector } from '../store/hooks/hooks';
import { Table } from '../components/Table';

function App() {
  const tables = useAppSelector((state) => state.table.tables);

  return (
    <div className="w-full py-5 px-[48px]">
      <CreateTableButton />
      <div className="flex flex-wrap gap-4">
        {tables.map((table) => (
          <div key={table.id} className="basis-[32%] grow shrink">
            <Table table={table} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
