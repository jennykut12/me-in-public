import logo from './logo.svg';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import Sidebar from './components/Sidebar';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Sidebar children={
        <>
          <NavBar/>
        </>
      }/>
    </div>
  );
}

export default App;
