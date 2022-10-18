import Header from "./views/components/Header";
import BlogFeater from "./views/feature";
import {  BrowserRouter,Route, Routes } from 'react-router-dom';
import BlogView from "./views/feature/BlogView";


function App() {
  return (
    <BrowserRouter>
       <Header />
       <Routes>
          <Route path="/" element={<BlogFeater />} />
          <Route path="/add"  exact ></Route>
          <Route path="/blog/:id" element={<BlogView/>} exact ></Route>
          <Route path="/edit/:id"  exact ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;