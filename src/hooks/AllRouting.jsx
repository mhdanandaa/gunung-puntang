import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/User/AboutPage";
import HomePage from './../pages/User/HomePage';

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default AllRouting;
