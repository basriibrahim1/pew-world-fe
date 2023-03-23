import './App.css';
import './custom.scss'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginWorkerPages from "./pages/auth/worker/loginWorkerPages";
import RegisterWorkerPages from './pages/auth/worker/registerWorkerPages';
import LoginCompanyPages from './pages/auth/company/loginCompanyPages';
import RegisterCompanyPages from './pages/auth/company/registerCompanyPage';
import ResetEmailPage from './pages/auth/resetpassword/resetEmailpage';
import ResetOtpPage from './pages/auth/resetpassword/resetOtpPage';
import ResetPasswordPage from './pages/auth/resetpassword/resetPasswordPage';
import HomePages from './pages/menu/homePages';
import PortfolioPage from './pages/profilePekerja/portfolioPages';
import HiringPages from './pages/hiring/hiringPages';
import ChatCompanyPages from './pages/profilePerusahaan/chatPerusahaanPages';
import ChatWorkerPages from './pages/profilePekerja/chatWorkerPages';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login-worker' element={ <LoginWorkerPages />}/>
          <Route path='/register-worker' element={ <RegisterWorkerPages />}/>
          <Route path='/login-company' element={ <LoginCompanyPages />}/>
          <Route path='/register-company' element={ <RegisterCompanyPages />}/>
          <Route path='/reset-password' element={ <ResetEmailPage />}/>
          <Route path='/reset-password/otp' element={ <ResetOtpPage />}/>
          <Route path='/reset-password/otp/new-password' element={ <ResetPasswordPage />}/>
          <Route path='/home' element={ <HomePages />}/>
          <Route path='/profile' element={ <PortfolioPage />}/>
          <Route path='/hire' element={ <HiringPages />}/>
          <Route path='/chat' element={ <ChatCompanyPages/>}/>
          <Route path='/chat-worker' element={ <ChatWorkerPages/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
