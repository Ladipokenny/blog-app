import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WritePost from "./pages/WritePost";
import ManagePost from "./pages/ManagePost";
import EditPost from "./pages/EditPost";
import ViewPost from "./pages/ViewPost";
import Voice from "./components/Voice";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f5f5] text-[#222831] flex flex-col">
        <ScrollToTop />


        <Navbar />
        <Voice />

        <main className="flex-grow p-4 md:p-6 max-w-6xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/write" element={<WritePost />} />
            <Route path="/admin/manage" element={<ManagePost />} />
            <Route path="/admin/edit/:id" element={<EditPost />} />
            <Route path="/admin/view/:id" element={<ViewPost />} />
            <Route path="/voice" element={<Voice />} />
          </Routes>
        </main>


        <Footer />
      </div>
    </Router>
  );
}
 
export default App; 