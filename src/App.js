import './App.css';
import Home from './pages/home/Home';
import { Routes,Route } from 'react-router-dom';
import Main from './pages/main/Main';
import routeObj from './routes/routes';
import SignUp from './pages/signup/SignUp';
function App() {
  return (
    <div className="app">
       
      <Routes>
        <Route element={<Home />} path={routeObj.home}/>
        <Route element = {<SignUp/>} path={routeObj.signUp} />
        <Route element={<Main />} path={routeObj.main}/>
      </Routes>
    </div>
  );
}

export default App;
