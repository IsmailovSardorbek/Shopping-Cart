import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { About } from "./Pages/About";
import Store from "./Pages/Store";
import Navbar from "./Components/Navbar";
import { Fragment } from "react";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
