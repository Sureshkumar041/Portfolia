import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import ProtectedRoute from './utils/ProtectedRoute';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route extact path='/' element={<Login />} />
        <Route path='/home/*' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
