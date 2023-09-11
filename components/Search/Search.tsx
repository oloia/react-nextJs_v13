'use client';
import { SearchProps } from '@/components/Search/Search.props';
import styles from '@/components/Search/Search.module.css';
import cn from 'classnames';
import { Button, Input } from '@/components';
import { useState } from 'react';
import SearchIcon from './search.svg';
import { useRouter } from 'next/navigation';


const Search = ({ className, ...props }: SearchProps) => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push(`/search?q=${search}`);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <SearchIcon/>
      </Button>
    </div>
  );

};

export default Search;
