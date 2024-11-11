import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import FileUpload from './pages/FileUpload';
import { useToastStore } from './states/useToastStore';
import ToastAlert from './components/ToastAlert';
import SignUp from './pages/SignUp';

function App() {
  const { toastProps, closeToast } = useToastStore();

  return (
    <Router>
      <ToastAlert
        severity={toastProps.severity}
        open={toastProps.open}
        message={toastProps.message}
        closeToast={closeToast}
      />
      <Routes>
        <Route path='/' element={<FileUpload />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
