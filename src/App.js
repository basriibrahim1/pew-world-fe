import './App.css';
import './custom.scss'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginWorkerPages from "./pages/auth/loginWorkerPages";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <LoginWorkerPages />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
