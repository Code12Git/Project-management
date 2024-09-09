import { Routes,Route } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Landing from './pages/Landing';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <div >
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
