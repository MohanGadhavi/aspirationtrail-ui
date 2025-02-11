import { Button } from '@material-tailwind/react';
import React from 'react';
import api from '../../utils/api';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth';

function Home() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    api
      .get('/user/logout')
      .then((res) => {
        console.log('response>>> ', res);
        dispatch(logout());
        localStorage.removeItem('authToken');
        window.location.href = '/';
      })
      .catch((error) => {
        console.log('Error while logging out:', error);
      });
  };

  return (
    <div className="h-96 bg-gray-100 ">
      <h1 className="text-6xl font-bold text-red-400">Home</h1>

      <Button onClick={handleLogout}>LOGOUT</Button>
    </div>
  );
}

export default Home;
