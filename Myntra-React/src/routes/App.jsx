import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeItems from "../components/HomeItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";

function App() {
  
  return (
    <>
      <Header></Header>
      <FetchItems/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
