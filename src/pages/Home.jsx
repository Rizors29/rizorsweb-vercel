import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
      </>
    );
  }
}

export default Home;