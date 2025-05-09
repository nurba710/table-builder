import { useState } from 'react';
import { useAppDispatch } from 'store/hooks/hooks';
import { createTable } from 'store/slices/tableSlice';
import { formInputNames, ITableColumns, mockOptions, Select } from 'shared';

const inputStyles = 'border border-[#E6ECEF] rounded-[4px] p-[14px] text-[12px] font-normal w-full';

interface Props {
  onClose: () => void;
}

export const CreateTableForm = ({ onClose }: Props) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<ITableColumns>({
    firstColumn: '',
    secondColumn: '',
    thirdColumn: '',
    forthColumn: mockOptions[0].value,
  });

  const isFormDataFilled = Object.values(formData).every((value) => value !== '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    if (value === 'City') {
      setFormData({
        firstColumn: 'Name',
        secondColumn: 'Surname',
        thirdColumn: 'Age',
        forthColumn: value,
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        forthColumn: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createTable(formData));
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 py-5 px-4 bg-white w-[280px] rounded-[4px]"
    >
      {formInputNames.map((name, index) => (
        <input
          key={name}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          type="text"
          placeholder={`${['First', 'Second', 'Third'][index]} column`}
          className={inputStyles}
        />
      ))}

      <Select options={mockOptions} value={formData.forthColumn} onChange={handleSelectChange} />

      <button
        disabled={!isFormDataFilled}
        type="submit"
        className="bg-[#1493FE] text-[12px] font-bold text-white py-[14px] rounded-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ADD
      </button>
    </form>
  );
};
