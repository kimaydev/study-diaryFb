import "./scss/main.scss";
import ModuleCss from "./module/Wrap.module.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Diary from "./pages/Diary";
import Todo from "./pages/Todo";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <h1 className={ModuleCss.AppTitle}>Firebase를 활용한 Diary</h1>
      <Header />
      <div className={ModuleCss.Wrap}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
