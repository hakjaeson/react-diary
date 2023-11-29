import styled from "@emotion/styled";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const Contents = styled.main`
    width: 100%;
    min-height: 500px;
  `;

  return (
    <div className="layout">
      <div className="wrap">
        <Header />
        <Contents>메인 페이지</Contents>
        <Footer />
      </div>
    </div>
  );
}

export default App;
