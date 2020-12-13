import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Link, Switch} from 'react-router-dom'
import Home from './pages/Home'
import {BrowserRouter} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login';
import StudentProfile from './pages/StudentProfile';

export const GlobalCtx = React.createContext(null)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path = "/" render = {(rp) => <Home/>}/>
        <Route path = "/signup" render = {(rp) => <Signup/>}/>
        <Route path = "/login" render = {(rp) => <Login/>}/>
        <Route path = "/student_profile" render = {(...rp) => <StudentProfile/>}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
