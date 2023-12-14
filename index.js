import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';

const MainApp = () => {
  return (
    <div>
      <p>header</p>
        <Routes>
          <Route path='/create-blog' element={<CreateBlog />} ></Route>
          <Route path='/detail-blog' element={<DetailBlog />} ></Route>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
      <p>footer</p>
    </div>
  );
}

export default MainApp;
