import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import DiaryEdit from "./pages/diary/DiaryEdit";
import DiaryIndex from "./pages/diary/DiaryIndex";
import { Route, Routes } from "react-router";
import Index from "./pages/Index";
import Intro from "./pages/Intro";
import DiaryAdd from "./pages/diary/diaryAdd";

function App() {
  return (
    <div className="layout">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Index />}></Route>
          <Route path="/diary" element={<DiaryIndex />}></Route>
          <Route path="/diary/Add" element={<DiaryAdd />}></Route>
          <Route path="/diary/Edit" element={<DiaryEdit />}></Route>
        </Routes>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
