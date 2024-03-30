import './App.css';
import './Components/Style/index.css'
import './Components/Style/CustomButton.css'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Layout from './Components/Layout/Layout';
import Homepage from './Pages/Homepage';
import BookForm from './Components/BookForm';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/book" element={<BookForm />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
