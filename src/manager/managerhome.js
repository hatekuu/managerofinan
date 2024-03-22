import React, { useEffect, useState, Suspense, lazy } from 'react';

import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';
const UserManager = lazy(() => import('./page/User/userManager'));
const AllProduct = lazy(() => import('./page/AllProduct/AllProduct'));
const BillForm = lazy(() => import('./page/BillForm/BillForm'));
const ManagerHome = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState('UserManager');
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      if (!app?.currentUser?.accessToken) {
        navigate('/managerofinan/login');
      } else {
        await app?.currentUser?.refreshAccessToken();
      }
    } catch (error) {
    
      console.log(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      switch (activeComponent) {
        case 'AllProduct':
          setActiveComponent('UserManager');
          break;
        case 'BillForm':
          setActiveComponent('AllProduct');
          break;
        default:
          break;
      }
    } else if (event.key === 'ArrowRight') {
      switch (activeComponent) {
        case 'UserManager':
          setActiveComponent('AllProduct');
          break;
        case 'AllProduct':
          setActiveComponent('BillForm');
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeComponent]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {activeComponent === 'UserManager' && <UserManager />}
        {activeComponent === 'AllProduct' && <AllProduct />}
        {activeComponent === 'BillForm' && <BillForm />}
      </Suspense>
    </div>
  );
};

export default ManagerHome;
