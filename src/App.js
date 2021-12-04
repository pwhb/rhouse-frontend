import { useTranslation } from "react-i18next";

import Footer from "./components/Footer";
import ResponsiveContainer from "./components/ResponsiveContainer";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <BrowserRouter>
      <ResponsiveContainer>
        <Container style={{ margin: "2rem 0rem", minHeight: "24rem" }}>
          <Routes>
            <Route path="rent" element={<Rent />} />
            <Route path="buy" element={<Buy />} />
            <Route path="sell" element={<Sell />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </ResponsiveContainer>
    </BrowserRouter>
  );
};

export default App;
