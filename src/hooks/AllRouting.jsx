import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/User/AboutPage";
import HomePage from './../pages/User/HomePage';
import ListWisataPage from "../pages/User/ListWisataPage";
import Dashboard from './../pages/admin/Dashboard';
import Navbar from "../pages/admin/Navbar";
import AboutA from "../pages/admin/AboutA";
import SidebarA from "../pages/admin/SidebarA";
import FormAboutA from './../pages/admin/FormAboutA';

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/destination" element={<ListWisataPage />} />

      <Route path="/dashboardA" element={<Dashboard />} />
      <Route path="/navbarA" element={<Navbar />} />
      <Route path="/sidebarA" element={<SidebarA />} />
      <Route path="/aboutA" element={<AboutA />} />
      <Route path="/formAbout" element={<FormAboutA />} />
    </Routes>
  );
};

export default AllRouting;
