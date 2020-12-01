import Header from './components/Header'
import Body from './components/Body'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
}

export default App;