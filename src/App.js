import './App.scss';
import Home from "./pages/home/Home.jsx"
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch.jsx';
import  Login from './pages/login/Login.jsx';

function App() {
  return (
    <div className="App"> 
     <Home/>
     <Watch/>
     <Register/>
     <Login />
    </div>
  );
}

export default App;
