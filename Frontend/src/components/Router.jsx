import { Link, Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Layout from "../Layout";
import Housing from "../pages/housing";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
