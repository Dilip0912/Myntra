import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeItems from "../components/HomeItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  // console.log(fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems/>
      {(fetchStatus.fetching)?<LoadingSpinner/>:<Outlet/>}
      
      <Footer />
    </>
  );
}

export default App;
