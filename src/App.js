
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Services from './components/Services/services';
import Pricing from './components/Pricing/pricing';
import Features from './components/Features/features';
import Quote from './components/Quote/quote';
import Team from './components/Team/team';
import Testimonial from './components/Testimonial/testimonial';
import Page from './components/Page/page';
import Contact from './components/Contact/contact';




import Signin from './components/Admin/Signin/signin';
import Register from './components/Admin/Register/register';
// import { CartProvider } from "react-use-cart";
import Protected from './components/Protected'
import Dashboard from './components/Admin/Dashboard/dashboard';
import Service_admin from './components/Admin/Services/Services';
import City from './components/Admin/City/city';
import Price_plan from './components/Admin/Price_plan/price_plan';
import Service_Apply from './components/Admin/Service_Apply/service_apply';


function App() {
  
  const [isSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });
  
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/page" element={<Page />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          
          <Route
            path={"/dashboard"}
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/Service"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Service_admin />
              </Protected>
            }
          />
          <Route
            path="/city"
            element={
              <Protected isSignedIn={isSignedIn}>
                <City />
              </Protected>
            }
          />
          <Route
            path="/price_plan"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Price_plan />
              </Protected>
            }
          />
          <Route
            path="/service_apply"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Service_Apply />
              </Protected>
            }
          />
          
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;