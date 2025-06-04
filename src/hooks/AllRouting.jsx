import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/User/AboutPage";
import HomePage from './../pages/User/HomePage';
import ListWisataPage from "../pages/User/ListWisataPage";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/destination" element={<ListWisataPage />} />
    </Routes>
  );
};

export default AllRouting;
