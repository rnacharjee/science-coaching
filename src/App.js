import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subject from "./components/Subject/Subject";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import SubDetail from "./components/SubDetail/SubDetail";
import Error from "./components/Error/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/subjects/:subject"
            element={<SubDetail></SubDetail>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/*" element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
