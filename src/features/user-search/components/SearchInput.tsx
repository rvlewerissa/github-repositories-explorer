import { useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import TextInput from '@/shared/components/commons/TextInput';
import Button from '@/shared/components/commons/Button';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

function SearchInput({
  onSearch,
  placeholder = 'Search GitHub users...',
  isLoading = false,
}: SearchInputProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch(value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-3 sm:flex-row sm:gap-2'
    >
      <TextInput
        type='text'
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={isLoading}
        className='flex-1'
      />
      <Button type='submit' disabled={isLoading || !value.trim()}>
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </form>
  );
}

export default SearchInput;
