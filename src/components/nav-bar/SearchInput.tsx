import { Input } from '@chakra-ui/react';
import { InputGroup } from '../ui/input-group';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import useGameQueryStore from '@/store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate('/');
        }
      }}
    >
      <InputGroup startElement={<BsSearch />} width='100%'>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder='Search games...'
          variant='subtle'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
