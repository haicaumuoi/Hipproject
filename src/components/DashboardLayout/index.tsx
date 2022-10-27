import { ReactComponentElement, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
// import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

export default function DashboardLayout() {
  const location = useLocation();

  const showHeader = location.pathname === '/login' ? false : true;
  return (
    <div>
      {showHeader && <Header />}
      <Main></Main>
      {/* <Footer></Footer> */}
    </div>
  );
}
