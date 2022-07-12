import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
function App() {
  return (

    <Route exact path='/' element={< Home />} />


  )
}

export default App;
