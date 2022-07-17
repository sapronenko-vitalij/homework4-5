import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';





import './App.css';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home title='alksdjfl;' tittle='alksdjfl;' />}/>
        <Route path='users' element={<Users/>}/>
        <Route path='users/:id' element={<User/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
