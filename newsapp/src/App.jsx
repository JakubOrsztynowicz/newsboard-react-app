import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Navigation from "./components/Navigation";
import NewsBoard from "./components/NewsBoard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NewsItem from "./components/NewsItem";
import { useState } from "react";

export const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navigation setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
};

export default App;
