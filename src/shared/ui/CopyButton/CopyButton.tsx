import { createCopy } from 'store/slices/tableSlice';
import { useAppDispatch } from 'store/hooks/hooks';

interface Props {
  tableId: string;
}

export const CopyButton = ({ tableId }: Props) => {
  const dispatch = useAppDispatch();

  const handleCopy = () => dispatch(createCopy(tableId));

  return (
    <button type="button" onClick={handleCopy} className="text-[14px] font-semibold">
      Copy 📄
    </button>
  );
};
