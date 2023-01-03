import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create_Blog from './components/Create_Blog';
import ReadBlog from './components/Read-Blog';
import DeleteBlog from './components/Delete-Blog';
import UpdateBlog from './components/Update-Blog';


function App() {
  return (
    <div className="">
      <header className="">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Create_Blog />} />
            <Route path="/read-blog" element={<ReadBlog />} />
            <Route path="/update-blog" element={<UpdateBlog />} />
            <Route path="/delete-blog" element={<DeleteBlog />} />

          </Routes>

        </BrowserRouter>
        {/* <h1>Hi</h1> */}
      </header>
    </div>
  );
}

export default App;
