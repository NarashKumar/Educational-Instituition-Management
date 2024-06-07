
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import AddStudent from './components/AddStudent.jsx'
import Navbar from './components/Navbar'
import StudentList from './components/StudentList.jsx';
import IntroductionPage from './components/IntroductionPage.jsx';
import StudentProvider from './components/StudentProvider.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<IntroductionPage/>}></Route>
        <Route path="/" element={<StudentList />}></Route>
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route path="/studentlist" element={<StudentList />}></Route>
        
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App
