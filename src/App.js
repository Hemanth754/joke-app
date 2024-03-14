import LoginPage from './login';
import HomePage from './Homepage';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path =  "/" element = {<LoginPage/>}/>
        <Route path =  "/Home" element = {<HomePage/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
