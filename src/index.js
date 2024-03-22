import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import PasswordTesterMath from './pages/PasswordTesterMath';
import PasswordCracker from './pages/PasswordCracker';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route exact path='/tester' element={<PasswordTesterMath/>}/>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/cracker' element={<PasswordCracker/>}/>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);