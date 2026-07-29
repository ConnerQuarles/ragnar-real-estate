import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Foreclosure from "./pages/Foreclosure";
import TaxAuction from "./pages/TaxAuction";
import Distressed from "./pages/Distressed";
import Probate from "./pages/Probate";
import PreProbate from "./pages/PreProbate";
import Inherited from "./pages/Inherited";
import FairOffer from "./pages/FairOffer";
import Testimonials from "./pages/Testimonials";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/foreclosure" element={<Foreclosure />} />
        {/* Pre-foreclosure and foreclosure are now one merged page/nav tab. */}
        <Route path="/pre-foreclosure" element={<Navigate to="/foreclosure" replace />} />
        <Route path="/tax-auction" element={<TaxAuction />} />
        <Route path="/distressed" element={<Distressed />} />
        <Route path="/probate" element={<Probate />} />
        <Route path="/pre-probate" element={<PreProbate />} />
        <Route path="/inherited" element={<Inherited />} />
        <Route path="/fair-offer" element={<FairOffer />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Route>
    </Routes>
  );
}

export default App;
