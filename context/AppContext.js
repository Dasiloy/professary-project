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

  const handleSorted = useCallback(() => {
    setBlogs(Blogs);
    setSorted(PaginateBlogs(Blogs));
  }, [Blogs]);

  const Pagination = index => {
    if (index > sorted.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = sorted.length - 1;
    }
    setPaginate(index);
  };

  

  useEffect(() => {
    handleSorted();
  },[]);

  return (
    <AppContext.Provider
      value={{ hero, blogs, setBlogs, sorted, setSorted,Pagination,paginate }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
