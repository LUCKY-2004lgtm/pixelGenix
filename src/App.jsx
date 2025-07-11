import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import '@fontsource/poppins'; // Defaults to 400 weight
import '@fontsource/poppins/600.css'; // For other weights
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogSection from "./pages/BlogSection";
import BlogDetail from "./pages/BlogDetail";
import Company from "./pages/Company";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminServices from "./admin/AdminServices";
import WhatsAppButton from "./components/WhatsAppButton";
import PhoneAppButton from "./components/PhoneAppButton"
import Client from "./components/Client";
import TestimonialsSection from "./components/TestimonialsSection";
import OurStoryPage from "./pages/Ourstory";
import OurStory from "./pages/Ourstory";
import Whowe from "./pages/Whowe";
import Howwe from "./pages/Howwe";
import Meet from "./pages/Meet";
import Recog from "./pages/Recog";
import Business from "./pages/Business";


function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path='/client' element={<Client />} />
              <Route path="/blog" element={<BlogSection />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/company/:section" element={<Company />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/testimonialsSection" element={<TestimonialsSection />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin/services" element={<AdminServices />} />
              <Route path="/our-story" element={<OurStory/>} />
              <Route path="/who-we-serve" element={<Whowe/>} />
              <Route path="/how-we-operate" element={<Howwe/>} />
              <Route path="/meet-the-team" element={<Meet/>} />
              <Route path="/business-modal" element={<Business/>} />
              <Route path="/recognition" element={<Recog/>} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <PhoneAppButton />
      <WhatsAppButton />
    </>
  );
}

export default App;
