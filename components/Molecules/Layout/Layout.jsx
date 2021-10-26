import Navbar from '../../Atoms/Navbar';
import Footer from '../../Atoms/Footer';

 function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}

export default Layout;
