import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <h2>Welcome to the protected home page!</h2>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
