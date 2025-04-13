import React from "react";
import NavbarBanner from "./components/Navbar/NavbarBanner.jsx";
import FeatureSection from "./components/FeatureSection/FeatureSection.jsx";
import FeaturedApps from "./components/FeatureAppPages/FeatureApp.jsx";
import Partner from "./components/PartnerPages/Partner.jsx";
import Sales from "./components/SalesPages/Sales.jsx";
import Future from "./components/FuturePages/Future.jsx";
import Company from "./components/CompanyPages/Company.jsx";
import Footer from "./components/FooterPages/Footer.jsx";
import Client from "./components/Client/Client.jsx";

function App() {
  return (
    <div className="App">
      <NavbarBanner />
      <FeatureSection/>
      <FeaturedApps/>
      <Partner/>
      <Sales/>
      <Future/>
      <Client/>
      <Company/>
      <Footer/>
    </div>
  );
}

export default App;
