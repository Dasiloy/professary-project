import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { PaginateBlogs } from '../utilis/helpers';
import { heroDetails, Blogs } from '../utilis/localData';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [hero, setHero] = useState(heroDetails);
  const [blogs, setBlogs] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [paginate, setPaginate] = useState(1);
  const [filter, setfilter] = useState({
    searchTerm: '',
    category: 'all',
  });

  const handleSorted = useCallback(() => {
    setBlogs(Blogs);
    setSorted(PaginateBlogs(Blogs));
  }, [Blogs]);

  const Pagination = index => {
    if (index > sorted.length - 1) {
      index = sorted.length - 1;
    } else if (index < 0) {
      index = 0;
    }
    setPaginate(index);
  };

    const filterBlogs = (name,value) => {
      setfilter({ ...filter, [name]: value });
    };

  const filtered = useCallback(() => {
    let newProducts = [...blogs];
    const { searchTerm, category } =
      filter;
    if (searchTerm !== '') {
      newProducts = newProducts.filter(item => {
        const term = item.title.toLowerCase().trim();
        return term.includes(searchTerm) ? item : null;
      });
    }
    if (category !== 'all') {
      newProducts = newProducts.filter(item => {
        return item.category === category;
      });
    }
    setPaginate(0);
    setSorted(PaginateBlogs(newProducts));
  }, [blogs, filter]);

  useEffect(() => {
    handleSorted();
  }, []);

  useEffect(() => {
    filtered();
  }, [filtered]);

  return (
    <AppContext.Provider
      value={{
        hero,
        blogs,
        setBlogs,
        sorted,
        setSorted,
        Pagination,
        paginate,
        filter,
        filterBlogs,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
