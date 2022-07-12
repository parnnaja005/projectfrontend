import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import NotFound from './pages/notfound'
import Post from './pages/createpost'
import Blogs from './pages/blogs'
import Blogsdetails from './pages/blogsdetails'

ReactDOM.render(

  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      {/* <Route exact path="/blogsdetails/:id" element={<Blogsdetails/>}/> */}
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/createpost" element={<Post/>}/>
      <Route exact path="/blogs" element={<Blogs/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route path="/:id" element={<Blogsdetails/>}/>
      <Route path="*" element={<NotFound/>}/>
            
    </Routes>
</Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
