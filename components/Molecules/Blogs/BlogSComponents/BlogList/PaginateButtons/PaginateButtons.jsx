import { Text, ChakraProvider } from '@chakra-ui/react';
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator,
} from '@ajna/pagination';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';
import styles from './Paginatebuttons.module.css';
import { useAppContext } from '../../../../../../context/AppContext';

const PaginateButtons = () => {
  const {
    blogs,
    Pagination: paged,
    paginate,
  } = useAppContext();

  // constants
  const outerLimit = 1;
  const innerLimit = 1;

  const {
    pages,
    pagesCount,
    currentPage,
    setCurrentPage,
    isDisabled,
  } = usePagination({
    total: blogs.length,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: {
      pageSize: 5,
      isDisabled: false,
      currentPage: 1,
    },
  });

  // handlers
  const handlePageChange = nextPage => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
  };

  return (
    <ChakraProvider>
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        isDisabled={isDisabled}
        onPageChange={handlePageChange}>
        <PaginationContainer
          align='center'
          justify='space-between'
          p={4}
          mx='auto'
          className={styles.paginT}>
          <PaginationPrevious
            bg='#610BEF'
            color='white'
            _hover={{
              bg: 'blue.600',
              color: 'white',
            }}
            onClick={() => paged(paginate - 1)}>
            <FaAngleDoubleLeft />
          </PaginationPrevious>
          <PaginationPageGroup
            isInline
            align='center'
            separator={
              <PaginationSeparator
                bg='transparent'
                fontSize='sm'
                color='black'
                w='20px'
                jumpSize={11}
              />
            }>
            {pages.map((page, index) => (
              <PaginationPage
                w='30px'
                bg='transparent'
                color='black'
                key={`pagination_page_${page}`}
                page={page}
                onClick={() => paged(index)}
                fontSize='sm'
                _hover={{
                  bg: '#610BEF',
                  color: 'black',
                }}
                _current={{
                  bg: '#610BEF',
                  color: 'white',
                  fontSize: 'sm',
                  w: '50px',
                }}
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext
            bg='#610BEF'
            color='white'
            _hover={{
              bg: 'blue.600',
              color: 'white',
            }}
            onClick={() => paged(paginate + 1)}>
            <FaAngleDoubleRight />
          </PaginationNext>
        </PaginationContainer>
      </Pagination>
    </ChakraProvider>
  );
};

export default PaginateButtons;
