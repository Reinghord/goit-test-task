// import './App.css';
// import { getUsers } from "./utils/mockapi";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/users/users-operation';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TweetsPage from './pages/TweetsPage/TweetsPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/tweets" element={<TweetsPage />}></Route>
      <Route path="*" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
