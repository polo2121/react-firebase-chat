// import Header from "./Header";
// import { MainContent } from "./MainContent";
// import { Footer } from "./Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Dummy from "./components/Dummy";

// import "./App.css";

const Page = () => {
  return (
    <>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      <Nav />
      <Main />
      <Dummy />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
