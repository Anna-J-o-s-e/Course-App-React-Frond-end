import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import ViewAll from './components/ViewAll';
import SearchCourse from './components/SearchCourse';

function App() {
  return (
    <div>

      <BrowserRouter><Routes>
        
        <Route path='/' element={<AddCourse/>}/>
        <Route path='/view' element={<ViewAll/>}/>
        <Route path='/search' element={<SearchCourse/>}/>
        
        </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;
