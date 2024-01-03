import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Login />} />
          <Route path="/upload" element={<Upload />} />
                    
        </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
