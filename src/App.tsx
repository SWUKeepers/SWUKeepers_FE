import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import FileUpload from './pages/FileUpload';
import { useToastStore } from './states/useToastStore';
import ToastAlert from './components/ToastAlert';
import SignUp from './pages/SignUp';
import Result from './pages/result/Result';

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
        <Route path='/file-upload' element={<FileUpload />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/' element={<div>Home</div>} />
        <Route path='/result' element={<Result />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
