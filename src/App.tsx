import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import { useToastStore } from './states/useToastStore';
import ToastAlert from './components/ToastAlert';

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
        <Route path='/' element={<Root />} />
      </Routes>
    </Router>
  );
}

export default App;
