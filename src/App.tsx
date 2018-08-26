import * as React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
 
import LoginPage from './components/LoginPage/LoginPage';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <LoginPage />
      </Router>
    );
  }
}

export default App;
