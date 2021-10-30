import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import styles from './FilterButtons.module.css';
import { useAppContext } from '../../../../../../context/AppContext';

const filterGroups = [
  'All',
  'Coperate',
  'Engineering',
  'Product',
];

export default function FilterButtons() {
     const {
       filterBlogs,
       filter: { category },
     } = useAppContext();
    const [id, setId] = useState(0);
    
    const handlebtn = (idT,value) => {
        setId(idT);
        filterBlogs('category',value)
    }
  return (
    <ButtonGroup variant='filtered' spacing={4} className={styles.group}>
      {filterGroups.map((button, index) => {
        return (
          <Button
            key={index}
            className={`${
              id === index ? styles.filterBtn : ''
            }`}
            onClick={() => handlebtn(index,button.toLowerCase())}>
            {button}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
